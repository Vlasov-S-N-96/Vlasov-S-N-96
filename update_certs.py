import os
import requests
import json
from datetime import datetime

CLIENT_ID = os.environ['STEPIK_CLIENT_ID']
CLIENT_SECRET = os.environ['STEPIK_CLIENT_SECRET']
USER_ID = 471959028  # Ваш ID на Stepik

# ===== КАСТОМИЗАЦИЯ ДЛЯ КОНКРЕТНЫХ КУРСОВ =====
# Здесь можно переопределить иконку и подпись для любого курса по его ID.
# Если курс не указан, будут использованы данные из API (cover и название).
CUSTOMIZATIONS = {
    # Пример для Karpov.Courses (если хотите использовать свою иконку)
    # 95367: {
    #     'icon_url': 'image/icon_courses/carpov_courses.jpg',
    #     'custom_label': 'Karpov.Courses'
    # },
}

def get_access_token():
    resp = requests.post(
        'https://stepik.org/oauth2/token/',
        data={'grant_type': 'client_credentials'},
        auth=(CLIENT_ID, CLIENT_SECRET)
    )
    resp.raise_for_status()
    return resp.json()['access_token']

def fetch_certificates(token):
    headers = {'Authorization': f'Bearer {token}'}
    params = {'user': USER_ID}
    resp = requests.get('https://stepik.org/api/certificates', headers=headers, params=params)
    resp.raise_for_status()
    return resp.json().get('certificates', [])

def fetch_course_info(token, course_id):
    """Получает название и обложку курса по ID с авторизацией"""
    headers = {'Authorization': f'Bearer {token}'}
    try:
        resp = requests.get(f'https://stepik.org/api/courses/{course_id}', headers=headers)
        if resp.status_code == 200:
            data = resp.json()
            courses = data.get('courses', [])
            if courses:
                course = courses[0]
                return {
                    'title': course.get('title', f'Курс #{course_id}'),
                    'cover': course.get('cover', '')  # ссылка на обложку
                }
        return {'title': f'Курс #{course_id}', 'cover': ''}
    except Exception as e:
        print(f'Ошибка получения курса {course_id}: {e}')
        return {'title': f'Курс #{course_id}', 'cover': ''}

def get_customization(course_id):
    """Возвращает настройки для конкретного курса"""
    return CUSTOMIZATIONS.get(course_id, {})

def main():
    token = get_access_token()
    certs = fetch_certificates(token)
    
    certs_data = []
    for cert in certs:
        course_id = cert['course']
        course_info = fetch_course_info(token, course_id)
        custom = get_customization(course_id)
        
        # Используем кастомную иконку, если есть, иначе — обложку из API
        icon_url = custom.get('icon_url', course_info['cover'])
        # Используем кастомную подпись, если есть, иначе — стандартную
        label = custom.get('custom_label', 'Сертификат Stepik')
        
        # ===== ГЛАВНОЕ ИСПРАВЛЕНИЕ =====
        # Берём готовую ссылку на PDF из API (поле 'url')
        pdf_url = cert.get('url', '')
        # Если вдруг поле url пустое (редко, но бывает), делаем запасной вариант
        if not pdf_url:
            pdf_url = f"https://stepik.org/certificate/{cert['id']}/pdf"
        # ================================
        
        certs_data.append({
            'id': cert['id'],
            'course_id': course_id,
            'course_title': course_info['title'],
            'issued_at': cert['issue_date'],
            'is_excellent': cert.get('type') == 'distinction',
            'pdf_url': pdf_url,           # теперь правильная ссылка
            'cover_url': icon_url,        # ссылка на иконку
            'custom_label': label         # подпись (отображается на карточке)
        })
    
    output = {
        'updated_at': datetime.utcnow().isoformat() + 'Z',
        'certificates': certs_data
    }
    
    os.makedirs('data', exist_ok=True)
    with open('data/certificates.json', 'w', encoding='utf-8') as f:
        json.dump(output, f, ensure_ascii=False, indent=2)
    
    print(f"✅ Обновлено {len(certs_data)} сертификатов с правильными ссылками на PDF")

if __name__ == '__main__':
    main()
