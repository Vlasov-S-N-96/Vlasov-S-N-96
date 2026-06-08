// ДАННЫЕ ДЛЯ СТРАНИЦЫ

// Навыки
const skillsList = [
    "SQL (MySQL, PostgreSQL)", "Python (pandas, автоматизация)", "Postman / API",
    "Git / GitHub", "Linux / Bash", "Jira / Qase", "Docker (базово)",
    "Тест-дизайн", "Тестовая документация", "Анализ данных", "Excel"
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

// КУРСЫ 
const coursesData = [
    { title: "Тестирование ПО с нуля. Продвинутый курс с ИИ", progress: "78% пройдено", iconImg: "image/icon_courses/Testing_advanced_courses_ii+prectica.png", desc: "Типы тестирования, тест-дизайн, тестовая документация, работа с Jira, Postman, SQL, Git, CI/CD", certImage: "image/certificate_foto/testing_advanced.jpg" },
    { title: "Тестирование ПО. Симулятор собеседования с ИИ", progress: "✅ Успешно завершён", iconImg: "image/icon_courses/Testing_advanced_courses_ii.png", desc: "Подготовка к интервью: теория, тест-дизайн, API, SQL, ситуационные кейсы", certImage: "image/certificate_foto/testing_interview.jpg" },
    { title: "Тестирование ПО. Практические тренажеры с ИИ", progress: "✅ Успешно завершён", iconImg: "image/icon_courses/AI_testing_simullytions.png", desc: "Классы эквивалентности, граничные значения, pairwise, таблицы решений, DevTools", certImage: "image/certificate_foto/testing_trainers.jpg" },
    { title: "Инженер данных с нуля (Karpov.Courses)", progress: "✅ Успешно завершён", iconImg: "image/icon_courses/carpov_courses.jpg", desc: "SQL, Linux, PostgreSQL, ClickHouse, Python, Git, Spark, Airflow, DWH, финальный проект", certImage: "image/certificate_foto/karpov-certificate.jpg" },
    { title: "Python: анализ данных с Pandas", progress: "✅ Успешно завершён", iconImg: "image/icon_courses/pandas_python.png", desc: "Чтение данных, фильтрация, группировка, merge, работа с датами, визуализация", certImage: "image/certificate_foto/Stepik-Pandas.jpg" },
    { title: "SQL для всех", progress: "✅ Успешно завершён", iconImg: "image/icon_courses/sql_level.png", desc: "SELECT, JOIN, GROUP BY, агрегатные функции, подзапросы, создание отчётов", certImage: "image/certificate_foto/Stepik-sertificate-SQL.jpg" },
    { title: "SQL для всех. Level Up", progress: "✅ Успешно завершён", iconImg: "image/icon_courses/SQL_level_up.png", desc: "Продвинутые запросы, вложенные подзапросы, сложные JOIN, оптимизация", certImage: "image/certificate_foto/Stepik_sql_level_up.jpg" },
    { title: "Оконные функции SQL", progress: "✅ Успешно завершён", iconImg: "image/icon_courses/windows_funkcion.png", desc: "ROW_NUMBER, RANK, LEAD, LAG, агрегация с окнами, фреймы ROWS/RANGE", certImage: "image/certificate_foto/stepik-certificate_for_sql_window_functions.jpg" },
    { title: "Интерактивный тренажер по SQL", progress: "✅ Успешно завершён", iconImg: "image/icon_courses/Interactive_sql.jpg", desc: "100+ практических задач, от простых запросов до сложных аналитических", certImage: "image/certificate_foto/stepik-certificate.jpg" },
    { title: "Excel: основное для работы с массивами и базами данных", progress: "✅ Успешно завершён", iconImg: "image/icon_courses/Exel_massive_bd.jpg", desc: "ВПР, ИНДЕКС-ПОИСКПОЗ, СМЕЩ, БД-функции, умные таблицы, Power Pivot", certImage: "image/certificate_foto/Exel_massive_bd.png" },
    { title: "Excel: от новичка до уверенного бизнес-пользователя", progress: "✅ Успешно завершён", iconImg: "image/icon_courses/Excel_user.jpg", desc: "Сводные таблицы, диаграммы, условное форматирование, защита данных", certImage: "image/certificate_foto/Exel_user.png" },
    { title: "Введение в статистику и проверку гипотез", progress: "✅ Успешно завершён", iconImg: "image/icon_courses/statistic.png", desc: "Распределения, Z-test, T-test, A/B тестирование, мощность теста, sample size", certImage: "image/certificate_foto/Stepik-sertificate_statistik.jpg" }
];

// Проекты
const projectsData = [
    { title: "Тестовые артефакты (чек-листы, тест-кейсы)", desc: "Чек-листы, тест-кейсы, анализ требований, техники тест-дизайна.", tech: ["Тест-дизайн", "Qase", "Jira", "SQL"], link: "https://vlasov-s-n-96.github.io/Work_job_project/", icon: "🧪" },
    { title: "Витрина данных для аналитиков", desc: "Агрегированные метрики. Data Lake (Spark) → Airflow → Greenplum.", tech: ["PySpark", "Airflow", "Greenplum", "S3"], link: "https://vlasov-s-n-96.github.io/Data_mart_project_for_Analysts/", icon: "📊" }
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

function renderContact() {
    const contactDiv = document.getElementById('contactCard');
    if (contactDiv) {
        contactDiv.innerHTML = `
            <div>
                <p>📧 Email: <strong>nikolaevch96@yandex.ru</strong></p>
                <p>💬 Telegram: <strong>@Vlasov_S_Nid96271</strong></p>
                <p>🐙 GitHub: <strong>github.com/Vlasov-S-N-96</strong></p>
            </div>
            <div>
                <p>📍 Воронеж / удалённо</p>
                <p>Открыт для предложений по QA Engineer.</p>
            </div>
        `;
    }
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

// ========== ФУНКЦИЯ ДЛЯ СОЗДАНИЯ СЛАЙДЕРА (с отключением стрелок когда некуда листать) ==========
function createSlider(containerId, items, cardRenderer) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error('Container not found:', containerId);
        return;
    }
    
    // Если нет элементов или только 1 элемент — скрываем стрелки и точки
    const showNavigation = items.length > 1;
    
    container.innerHTML = '';
    
    const sliderWrapper = document.createElement('div');
    sliderWrapper.className = 'slider-wrapper';
    
    const sliderContainer = document.createElement('div');
    sliderContainer.className = 'slider-container';
    
    const sliderTrack = document.createElement('div');
    sliderTrack.className = 'slider-track';
    
    items.forEach(item => {
        const slide = document.createElement('div');
        slide.className = 'slider-slide';
        slide.innerHTML = cardRenderer(item);
        
        if (containerId === 'coursesContainer') {
            const flipCard = slide.querySelector('.flip-card');
            if (flipCard) {
                flipCard.addEventListener('click', function(e) {
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
    
    const nextBtn = document.createElement('button');
    nextBtn.className = 'slider-arrow slider-arrow-next';
    nextBtn.innerHTML = '❯';
    
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'slider-dots';
    
    // Если не нужно показывать навигацию — скрываем
    if (!showNavigation) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
        dotsContainer.style.display = 'none';
    }
    
    sliderContainer.appendChild(sliderTrack);
    sliderWrapper.appendChild(sliderContainer);
    sliderWrapper.appendChild(prevBtn);
    sliderWrapper.appendChild(nextBtn);
    sliderWrapper.appendChild(dotsContainer);
    container.appendChild(sliderWrapper);
    
    let currentIndex = 0;
    const totalSlides = items.length;
    
    function updateSlider() {
        const slideWidth = sliderTrack.children[0]?.offsetWidth || 0;
        const gap = 20;
        const offset = currentIndex * (slideWidth + gap);
        sliderTrack.style.transform = `translateX(-${offset}px)`;
        
        if (showNavigation) {
            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex >= totalSlides - 1;
            
            // Визуально показываем disabled состояние
            if (currentIndex === 0) {
                prevBtn.style.opacity = '0.4';
                prevBtn.style.cursor = 'not-allowed';
            } else {
                prevBtn.style.opacity = '1';
                prevBtn.style.cursor = 'pointer';
            }
            
            if (currentIndex >= totalSlides - 1) {
                nextBtn.style.opacity = '0.4';
                nextBtn.style.cursor = 'not-allowed';
            } else {
                nextBtn.style.opacity = '1';
                nextBtn.style.cursor = 'pointer';
            }
            
            const dots = dotsContainer.children;
            for (let i = 0; i < dots.length; i++) {
                dots[i].classList.toggle('active', i === currentIndex);
            }
        }
    }
    
    function createDots() {
        if (!showNavigation) return;
        dotsContainer.innerHTML = '';
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('div');
            dot.className = 'slider-dot';
            dot.addEventListener('click', () => {
                currentIndex = i;
                updateSlider();
            });
            dotsContainer.appendChild(dot);
        }
        updateSlider();
    }
    
    function handleResize() {
        updateSlider();
    }
    
    if (showNavigation) {
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
        
        let touchStartX = 0;
        sliderTrack.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        sliderTrack.addEventListener('touchend', (e) => {
            const diff = e.changedTouches[0].screenX - touchStartX;
            if (Math.abs(diff) > 50) {
                if (diff > 0 && currentIndex > 0) {
                    currentIndex--;
                    updateSlider();
                } else if (diff < 0 && currentIndex < totalSlides - 1) {
                    currentIndex++;
                    updateSlider();
                }
            }
        });
    }
    
    window.addEventListener('resize', () => setTimeout(handleResize, 100));
    
    setTimeout(() => {
        if (showNavigation) {
            createDots();
        }
        handleResize();
    }, 100);
}

// Рендер карточки курса
function renderCourseCard(course) {
    return `
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <div class="course-header">
                        <img class="course-icon-img" src="${course.iconImg}" alt="Иконка" 
                            onerror="this.onerror=null; this.style.display='none';">
                        <div class="course-title">${escapeHtml(course.title)}</div>
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

// Рендер карточки проекта
function renderProjectCard(project) {
    return `
        <div class="project-card">
            <div class="project-icon">${project.icon}</div>
            <div class="project-title">${escapeHtml(project.title)}</div>
            <div class="project-desc">${escapeHtml(project.desc)}</div>
            <div class="project-tech">${project.tech.map(t => `<span class="tech-badge">${escapeHtml(t)}</span>`).join('')}</div>
            <a href="${project.link}" class="project-link" target="_blank">🔗 GitHub →</a>
        </div>
    `;
}

// Бургер-меню
function initBurger() {
    const burger = document.getElementById('burgerBtn');
    const mobileNav = document.getElementById('mobileNav');
    const overlay = document.getElementById('menuOverlay');
    if (!burger) return;
    
    burger.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    });
    overlay?.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });
    mobileNav?.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
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

// Плавный скролл
function initSmoothScroll() {
    document.querySelectorAll('.nav-buttons .nav-btn').forEach(link => {
        link.addEventListener('click', (e) => {
            const hash = link.getAttribute('href');
            if (hash?.startsWith('#')) {
                e.preventDefault();
                document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// СТАРТ
function init() {
    console.log('Initializing...');
    renderSkills();
    renderExperience();
    // renderContact();  // <-- Удалить или закомментировать
    createSlider('coursesContainer', coursesData, renderCourseCard);
    createSlider('projectsContainer', projectsData, renderProjectCard);
    initBurger();
    initSmoothScroll();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}