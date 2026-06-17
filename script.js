// ДАННЫЕ ДЛЯ СТРАНИЦЫ

// Навыки
const skillsList = [
    "Тест-дизайн", "Тест-кейсы / Чек-листы", "Баг-репорты", "Анализ требований",
    "Postman / Swagger", "Test IT", "Jira / YouTrack", "Chrome DevTools",
    "Charles Proxy", "Android Studio", "REST / SOAP API", "SQL (PostgreSQL, MySQL)",
    "Python (pandas)", "Git / GitHub", "Bash", "Jenkins / GitHub Actions",
    "Docker (базово)", "Linux", "Excel"
];

// Опыт работы
const experienceData = [
    {
        title: "Системный администратор",
        period: "Воронежская областная клиническая офтальмологическая больница · Дек 2022 — настоящее время",
        responsibilities: [
            "Администрирование Windows/Linux серверов, поддержка бесперебойной работы IT-инфраструктуры, настройка резервного копирования.",
            "Разработка и ведение базы данных (MySQL) — создание таблиц, написание тестовых скриптов для проверки данных при миграции.",
            "Написание SQL-запросов для анализа данных, подготовки отчётности для руководства и валидации бизнес-логики.",
            "Автоматизация задач с помощью Python (обработка данных, перенос информации между системами, ETL-процессы).",
            "Создание аналитических представлений (views) с агрегацией для руководства — проверка корректности расчётов.",
            "В рамках обучения на курсах: пишу тест-кейсы, чек-листы, работаю в Jira и Postman, изучаю основы тест-дизайна."
        ]
    },
    {
        title: "Руководитель подразделения",
        period: "Государственное учреждение России · Сен 2019 — Сен 2022",
        responsibilities: [
            "Сбор и анализ данных, подготовка отчётов для руководства.",
            "Контроль качества документации и соблюдения регламентов."
        ]
    }
];

// СТАТИЧЕСКИЕ КУРСЫ (без сертификатов из Stepik)
const staticCoursesData = [
    { title: "Тестирование ПО с нуля.\nПродвинутый курс\nс ИИ", progress: "78% пройдено", iconImg: "image/icon_courses/Testing_advanced_courses_ii+prectica.png", desc: "Типы тестирования, тест-дизайн, тестовая документация, работа с Jira, Postman, SQL, Git, CI/CD", certImage: "image/certificate_foto/testing_advanced.jpg" },
    { title: "Тестирование ПО.\nСимулятор собеседования\nс ИИ", progress: "✅ Успешно завершён", iconImg: "image/icon_courses/Testing_advanced_courses_ii.png", desc: "Подготовка к интервью: теория, тест-дизайн, API, SQL, ситуационные кейсы", certImage: "image/certificate_foto/testing_interview.jpg" },
    { title: "Тестирование ПО.\nПрактические\nтренажеры с ИИ", progress: "✅ Успешно завершён", iconImg: "image/icon_courses/AI_testing_simullytions.png", desc: "Классы эквивалентности, граничные значения, pairwise, таблицы решений, DevTools", certImage: "image/certificate_foto/testing_trainers.jpg" },
    { title: "Инженер данных с нуля\n(Karpov.Courses)", progress: "✅ Успешно завершён", iconImg: "image/icon_courses/carpov_courses.jpg", desc: "SQL, Linux, PostgreSQL, ClickHouse, Python, Git, Spark, Airflow, DWH, финальный проект", certImage: "image/certificate_foto/karpov-certificate.jpg" },
    { title: "Python: анализ данных\nс Pandas", progress: "✅ Успешно завершён", iconImg: "image/icon_courses/pandas_python.png", desc: "Чтение данных, фильтрация, группировка, merge, работа с датами, визуализация", certImage: "image/certificate_foto/Stepik-Pandas.jpg" },
    { title: "SQL для всех", progress: "✅ Успешно завершён", iconImg: "image/icon_courses/sql_level.png", desc: "SELECT, JOIN, GROUP BY, агрегатные функции, подзапросы, создание отчётов", certImage: "image/certificate_foto/Stepik-sertificate-SQL.jpg" },
    { title: "SQL для всех.\nLevel Up", progress: "✅ Успешно завершён", iconImg: "image/icon_courses/SQL_level_up.png", desc: "Продвинутые запросы, вложенные подзапросы, сложные JOIN, оптимизация", certImage: "image/certificate_foto/Stepik_sql_level_up.jpg" },
    { title: "Оконные функции SQL", progress: "✅ Успешно завершён", iconImg: "image/icon_courses/windows_funkcion.png", desc: "ROW_NUMBER, RANK, LEAD, LAG, агрегация с окнами, фреймы ROWS/RANGE", certImage: "image/certificate_foto/stepik-certificate_for_sql_window_functions.jpg" },
    { title: "Интерактивный тренажер\nпо SQL", progress: "✅ Успешно завершён", iconImg: "image/icon_courses/Interactive_sql.jpg", desc: "100+ практических задач, от простых запросов до сложных аналитических", certImage: "image/certificate_foto/stepik-certificate.jpg" },
    { title: "Excel: основное для работы\nс массивами и базами данных", progress: "✅ Успешно завершён", iconImg: "image/icon_courses/Exel_massive_bd.jpg", desc: "ВПР, ИНДЕКС-ПОИСКПОЗ, СМЕЩ, БД-функции, умные таблицы, Power Pivot", certImage: "image/certificate_foto/Exel_massive_bd.png" },
    { title: "Excel: от новичка до\nуверенного бизнес-пользователя", progress: "✅ Успешно завершён", iconImg: "image/icon_courses/Excel_user.jpg", desc: "Сводные таблицы, диаграммы, условное форматирование, защита данных", certImage: "image/certificate_foto/Exel_user.png" },
    { title: "Введение в статистику\nи проверку гипотез", progress: "✅ Успешно завершён", iconImg: "image/icon_courses/statistic.png", desc: "Распределения, Z-test, T-test, A/B тестирование, мощность теста, sample size", certImage: "image/certificate_foto/Stepik-sertificate_statistik.jpg" }
];

// ПРОЕКТЫ
const projectsData = [
    { 
        title: "Тестовые артефакты (чек-листы, тест-кейсы)", 
        desc: "Чек-листы, тест-кейсы, анализ требований, техники тест-дизайна.", 
        tech: ["Тест-дизайн", "Qase", "Jira", "SQL"], 
        link: "https://vlasov-s-n-96.github.io/Work_job_project/", 
        iconImg: "image/icon_courses/test-project.png"
    },
    { 
        title: "Витрина данных для аналитиков", 
        desc: "Агрегированные метрики. Data Lake (Spark) → Airflow → Greenplum.", 
        tech: ["PySpark", "Airflow", "Greenplum", "S3"], 
        link: "https://vlasov-s-n-96.github.io/Data_mart_project_for_Analysts/", 
        iconImg: "image/icon_courses/analys_test_project.png"
    }
];

// Вспомогательные функции
function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, m => m === '&' ? '&amp;' : m === '<' ? '&lt;' : '&gt;');
}

function renderSkills() {
    const container = document.getElementById('skillsContainer');
    if (container) container.innerHTML = skillsList.map(s => `<span class="skill-tag">${escapeHtml(s)}</span>`).join('');
}

function renderExperience() {
    const container = document.getElementById('experienceContainer');
    if (!container) return;
    container.innerHTML = '';
    experienceData.forEach(exp => {
        container.innerHTML += `
            <div class="exp-card">
                <div class="exp-title">${escapeHtml(exp.title)}</div>
                <div class="exp-period">${escapeHtml(exp.period)}</div>
                <ul>${exp.responsibilities.map(r => `<li>${escapeHtml(r)}</li>`).join('')}</ul>
            </div>
        `;
    });
}

// Модальное окно
const modal = document.getElementById('certModal');
const modalImg = document.getElementById('modalImage');
const closeModal = document.querySelector('.modal-close');

function openCertModal(imgSrc) {
    if (modal && modalImg) {
        modalImg.src = imgSrc;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

if (closeModal) closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
});
if (modal) modal.addEventListener('click', e => { if (e.target === modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';
}});

// ========== ФУНКЦИЯ ДЛЯ СОЗДАНИЯ СЛАЙДЕРА ==========
function createSlider(containerId, items, cardRenderer) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error('Container not found:', containerId);
        return;
    }
    
    const showNavigation = items.length > 1;
    
    container.innerHTML = '';
    
    const sliderWrapper = document.createElement('div');
    sliderWrapper.className = 'slider-wrapper';
    sliderWrapper.style.position = 'relative';
    sliderWrapper.style.margin = '20px 0 40px';
    sliderWrapper.style.padding = '0 40px';
    
    const sliderContainer = document.createElement('div');
    sliderContainer.className = 'slider-container';
    sliderContainer.style.overflow = 'hidden';
    sliderContainer.style.borderRadius = '20px';
    
    const sliderTrack = document.createElement('div');
    sliderTrack.className = 'slider-track';
    sliderTrack.style.display = 'flex';
    sliderTrack.style.transition = 'transform 0.3s ease-out';
    sliderTrack.style.gap = '20px';
    
    items.forEach(item => {
        const slide = document.createElement('div');
        slide.className = 'slider-slide';
        slide.innerHTML = cardRenderer(item);
        
        if (containerId === 'coursesContainer') {
            // Для статических курсов – переворот, для динамических (Stepik) – тоже, но с ссылкой на PDF
            const flipCard = slide.querySelector('.flip-card');
            if (flipCard) {
                flipCard.addEventListener('click', function(e) {
                    // Если кликнули по картинке сертификата – не переворачиваем
                    if (e.target.classList && e.target.classList.contains('cert-image')) return;
                    this.classList.toggle('flipped');
                });
            }
        }
        
        sliderTrack.appendChild(slide);
    });
    
    const prevBtn = document.createElement('button');
    prevBtn.className = 'slider-arrow slider-arrow-prev';
    prevBtn.innerHTML = '❮';
    prevBtn.style.cssText = `
        position: absolute; top: 50%; transform: translateY(-50%);
        width: 44px; height: 44px; background: #1e4663; color: white;
        border: none; border-radius: 50%; cursor: pointer; font-size: 24px;
        display: flex; align-items: center; justify-content: center;
        z-index: 10; box-shadow: 0 2px 8px rgba(0,0,0,0.2); left: 0;
    `;
    
    const nextBtn = document.createElement('button');
    nextBtn.className = 'slider-arrow slider-arrow-next';
    nextBtn.innerHTML = '❯';
    nextBtn.style.cssText = `
        position: absolute; top: 50%; transform: translateY(-50%);
        width: 44px; height: 44px; background: #1e4663; color: white;
        border: none; border-radius: 50%; cursor: pointer; font-size: 24px;
        display: flex; align-items: center; justify-content: center;
        z-index: 10; box-shadow: 0 2px 8px rgba(0,0,0,0.2); right: 0;
    `;
    
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'slider-dots';
    dotsContainer.style.cssText = 'display: flex; justify-content: center; gap: 10px; margin-top: 20px;';
    
    sliderContainer.appendChild(sliderTrack);
    sliderWrapper.appendChild(sliderContainer);
    sliderWrapper.appendChild(prevBtn);
    sliderWrapper.appendChild(nextBtn);
    sliderWrapper.appendChild(dotsContainer);
    container.appendChild(sliderWrapper);
    
    let currentIndex = 0;
    const totalSlides = items.length;
    let startX = 0;
    let isDragging = false;
    let startTransform = 0;
    
    function updateSlider() {
        const slideWidth = sliderTrack.children[0]?.offsetWidth || 0;
        const gap = 20;
        const offset = currentIndex * (slideWidth + gap);
        sliderTrack.style.transform = `translateX(-${offset}px)`;
        startTransform = -offset;
        
        if (showNavigation) {
            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex >= totalSlides - 1;
            prevBtn.style.opacity = currentIndex === 0 ? '0.4' : '1';
            nextBtn.style.opacity = currentIndex >= totalSlides - 1 ? '0.4' : '1';
            prevBtn.style.cursor = currentIndex === 0 ? 'not-allowed' : 'pointer';
            nextBtn.style.cursor = currentIndex >= totalSlides - 1 ? 'not-allowed' : 'pointer';
            
            const dots = dotsContainer.children;
            for (let i = 0; i < dots.length; i++) {
                if (i === currentIndex) {
                    dots[i].classList.add('active');
                    dots[i].style.background = '#1e4663';
                    dots[i].style.width = '24px';
                    dots[i].style.borderRadius = '10px';
                } else {
                    dots[i].classList.remove('active');
                    dots[i].style.background = '#cbd5e1';
                    dots[i].style.width = '10px';
                    dots[i].style.borderRadius = '50%';
                }
            }
        }
    }
    
    function handleTouchStart(e) {
        startX = e.touches[0].clientX;
        isDragging = true;
        sliderTrack.style.transition = 'none';
        const slideWidth = sliderTrack.children[0]?.offsetWidth || 0;
        const gap = 20;
        const currentOffset = currentIndex * (slideWidth + gap);
        startTransform = -currentOffset;
        sliderTrack.style.transform = `translateX(${startTransform}px)`;
    }
    
    function handleTouchMove(e) {
        if (!isDragging) return;
        const diff = e.touches[0].clientX - startX;
        sliderTrack.style.transform = `translateX(${startTransform + diff}px)`;
    }
    
    function handleTouchEnd(e) {
        if (!isDragging) return;
        isDragging = false;
        sliderTrack.style.transition = 'transform 0.3s ease-out';
        const diff = e.changedTouches[0].clientX - startX;
        
        if (Math.abs(diff) > 50) {
            if (diff > 0 && currentIndex > 0) {
                currentIndex--;
            } else if (diff < 0 && currentIndex < totalSlides - 1) {
                currentIndex++;
            }
        }
        updateSlider();
    }
    
    if (showNavigation) {
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('div');
            dot.className = 'slider-dot';
            dot.style.cssText = 'width:10px;height:10px;border-radius:50%;background:#cbd5e1;cursor:pointer;transition:all 0.2s;';
            dot.addEventListener('click', () => {
                currentIndex = i;
                updateSlider();
            });
            dotsContainer.appendChild(dot);
        }
    }
    
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });
    
    nextBtn.addEventListener('click', () => {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
            updateSlider();
        }
    });
    
    sliderTrack.addEventListener('touchstart', handleTouchStart, { passive: false });
    sliderTrack.addEventListener('touchmove', handleTouchMove, { passive: false });
    sliderTrack.addEventListener('touchend', handleTouchEnd);
    
    function handleResize() {
        const screenWidth = window.innerWidth;
        const slides = document.querySelectorAll(`#${containerId} .slider-slide`);
        
        if (screenWidth <= 768) {
            slides.forEach(slide => slide.style.flex = '0 0 100%');
        } else if (screenWidth <= 1024) {
            slides.forEach(slide => slide.style.flex = '0 0 calc(50% - 10px)');
        } else {
            slides.forEach(slide => slide.style.flex = '0 0 calc(33.333% - 14px)');
        }
        updateSlider();
    }
    
    window.addEventListener('resize', () => setTimeout(handleResize, 100));
    setTimeout(() => {
        handleResize();
        updateSlider();
    }, 100);
}

// Рендер карточки курса (универсальная)
function renderCourseCard(course) {
    const titleHtml = course.title.replace(/\n/g, '<br>');
    // Если это курс из Stepik – показываем ссылку на PDF, иначе статичную картинку
    if (course.isStepik) {
        // Карточка с переворотом: на лицевой стороне название и дата, на обратной – ссылка на PDF
        return `
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <div class="course-header">
                            <div class="course-icon-img" style="background: #1e4663; border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 28px; color: white;">📜</div>
                            <div class="course-title">${titleHtml}</div>
                        </div>
                        <div class="course-badge">✅ Получен ${course.progress}</div>
                        <div class="course-desc">Сертификат Stepik</div>
                        <div class="click-hint">✨ Нажмите, чтобы открыть PDF</div>
                    </div>
                    <div class="flip-card-back" style="background: #1e4663; color: white; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px;">
                        <p style="font-size: 16px; font-weight: 600;">📄 Сертификат</p>
                        <a href="${course.pdfUrl}" target="_blank" style="background: white; color: #1e4663; padding: 12px 24px; border-radius: 30px; text-decoration: none; font-weight: 600;">Открыть PDF →</a>
                        <span style="font-size: 12px; opacity: 0.7;">Нажмите, чтобы скачать или просмотреть</span>
                    </div>
                </div>
            </div>
        `;
    } else {
        // Статическая карточка с картинкой сертификата
        return `
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <div class="course-header">
                            <img class="course-icon-img" src="${course.iconImg}" alt="Иконка" 
                                onerror="this.onerror=null; this.style.display='none';">
                            <div class="course-title">${titleHtml}</div>
                        </div>
                        <div class="course-badge">${escapeHtml(course.progress)}</div>
                        <div class="course-desc">${escapeHtml(course.desc)}</div>
                        <div class="click-hint">✨ Нажмите для сертификата</div>
                    </div>
                    <div class="flip-card-back">
                        <img class="cert-image" src="${course.certImage}" alt="Сертификат" 
                            onclick="event.stopPropagation(); openCertModal('${course.certImage}')"
                            onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\'cert-image-error\'>⚠️ Сертификат недоступен</div>';">
                        <div class="cert-hint">🔍 Кликните для увеличения</div>
                    </div>
                </div>
            </div>
        `;
    }
}

// Рендер карточки проекта (без изменений)
function renderProjectCard(project) {
    return `
        <div class="project-card">
            <div class="project-header">
                <div class="project-icon">
                    <img src="${project.iconImg}" alt="Иконка" 
                        onerror="this.onerror=null; this.parentElement.innerHTML='📁';">
                </div>
                <div class="project-title">${escapeHtml(project.title)}</div>
            </div>
            <div class="project-desc">${escapeHtml(project.desc)}</div>
            <div class="project-tech">${project.tech.map(t => `<span class="tech-badge">${escapeHtml(t)}</span>`).join('')}</div>
            <a href="${project.link}" class="project-link" target="_blank">🔗 GitHub →</a>
        </div>
    `;
}

// Бургер-меню (без изменений)
function initBurger() {
    const burger = document.getElementById('burgerBtn');
    const mobileNav = document.getElementById('mobileNav');
    const overlay = document.getElementById('menuOverlay');
    if (!burger) return;
    
    burger.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        burger.classList.toggle('active');
        mobileNav.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    });
    
    overlay?.addEventListener('click', () => {
        burger.classList.remove('active');
        mobileNav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    mobileNav?.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            burger.classList.remove('active');
            mobileNav.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
            const targetId = link.getAttribute('href');
            if (targetId?.startsWith('#')) {
                e.preventDefault();
                document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Плавный скролл (без изменений)
function initSmoothScroll() {
    document.querySelectorAll('.nav-buttons .nav-btn, .mobile-nav .nav-btn').forEach(link => {
        link.addEventListener('click', (e) => {
            const hash = link.getAttribute('href');
            if (hash?.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(hash);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
}

// ===== ЗАГРУЗКА ДИНАМИЧЕСКИХ КУРСОВ ИЗ STEPIK =====
async function loadStepikCourses() {
    try {
        const response = await fetch('/Vlasov-S-N-96/data/certificates.json');
        if (!response.ok) throw new Error('Файл сертификатов не найден');
        const data = await response.json();
        if (data.certificates.length === 0) return [];

        // Получаем названия курсов для каждого сертификата
        const certsWithTitles = await Promise.all(
            data.certificates.map(async (cert) => {
                try {
                    const courseRes = await fetch(`https://stepik.org/api/courses/${cert.course_id}`);
                    if (!courseRes.ok) throw new Error('Курс не найден');
                    const courseData = await courseRes.json();
                    const title = courseData.courses?.[0]?.title || `Курс #${cert.course_id}`;
                    return { ...cert, course_title: title };
                } catch (e) {
                    console.warn(`Не удалось получить название для курса ${cert.course_id}:`, e);
                    return { ...cert, course_title: `Курс #${cert.course_id}` };
                }
            })
        );

        // Преобразуем в формат, понятный renderCourseCard
        return certsWithTitles.map(cert => ({
            title: cert.course_title,
            progress: cert.issued_at ? cert.issued_at.slice(0, 10) : 'Дата неизвестна',
            iconImg: '', // не используется, но оставим
            desc: 'Сертификат Stepik',
            certImage: '', // не используется для динамических
            isStepik: true,
            pdfUrl: cert.pdf_url,
            isExcellent: cert.is_excellent // можно использовать для звёздочки
        }));

    } catch (e) {
        console.warn('Ошибка загрузки сертификатов Stepik:', e);
        return [];
    }
}

// ===== ИНИЦИАЛИЗАЦИЯ (АСИНХРОННАЯ) =====
async function init() {
    console.log('Initializing...');
    renderSkills();
    renderExperience();

    // Загружаем динамические курсы из Stepik
    const stepikCourses = await loadStepikCourses();
    // Объединяем статические и динамические курсы
    const allCourses = [...staticCoursesData, ...stepikCourses];

    createSlider('coursesContainer', allCourses, renderCourseCard);
    createSlider('projectsContainer', projectsData, renderProjectCard);
    initBurger();
    initSmoothScroll();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
