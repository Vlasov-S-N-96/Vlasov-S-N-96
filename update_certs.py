import os
import requests
import json
from datetime import datetime

CLIENT_ID = os.environ['STEPIK_CLIENT_ID']
CLIENT_SECRET = os.environ['STEPIK_CLIENT_SECRET']
USER_ID = 471959028  # Ваш ID на Stepik

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

def main():
    token = get_access_token()
    certs = fetch_certificates(token)
    
    certs_data = []
    for cert in certs:
        certs_data.append({
            'id': cert['id'],
            'course_id': cert['course'],
            'issued_at': cert['issue_date'],
            'is_excellent': cert.get('is_excellent', False),
            'pdf_url': f"https://stepik.org/certificate/{cert['id']}/pdf"
        })
    
    output = {
        'updated_at': datetime.utcnow().isoformat() + 'Z',
        'certificates': certs_data
    }
    
    os.makedirs('data', exist_ok=True)
    with open('data/certificates.json', 'w', encoding='utf-8') as f:
        json.dump(output, f, ensure_ascii=False, indent=2)
    
    print(f"✅ Обновлено {len(certs_data)} сертификатов")

if __name__ == '__main__':
    main()