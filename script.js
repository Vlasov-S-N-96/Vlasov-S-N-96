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

// ===== СТАТИЧЕСКИЙ КУРС =====
const staticCoursesData = [
    { 
        title: "Инженер данных с нуля\n(Karpov.Courses)", 
        progress: "✅ Успешно завершён",
        date: "2025-05-05", 
        iconImg: "image/icon_courses/carpov_courses.jpg", 
        desc: "SQL, Linux, PostgreSQL, ClickHouse, Python, Git, Spark, Airflow, DWH", 
        certImage: "image/certificate_foto/karpov-certificate.jpg",
        stepikCourseId: 95367,
        pdfUrl: "https://vlasov-s-n-96.github.io/Vlasov-S-N-96/image/certificate_foto/karpov-certificate.pdf"  // ваш PDF
    }
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

// ===== РЕНДЕР КАРТОЧКИ КУРСА =====
function renderCourseCard(course) {
    const titleHtml = course.title.replace(/\n/g, '<br>');
    const star = course.isExcellent ? ' ⭐' : '';
    
    // Статический курс
    if (course.iconImg && course.certImage) {
        const hasPdf = course.pdfUrl && course.pdfUrl.trim() !== '';
        return `
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front" style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 20px;">
                        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px; width: 100%; justify-content: center;">
                            <img src="${course.iconImg}" alt="Иконка" style="width: 45px; height: 45px; object-fit: cover; border-radius: 16px; background: #f0f2f5; flex-shrink: 0;" onerror="this.style.display='none';">
                            <div class="course-title" style="font-size: 18px; font-weight: 700; color: #1e4663; text-align: center;">${titleHtml}</div>
                        </div>
                        <div style="display: flex; flex-direction: column; align-items: center; margin-bottom: 8px;">
                            <div class="course-badge" style="background: #16d6ad20; color: #107980; padding: 4px 12px; border-radius: 20px; font-size: 13px; font-weight: 600; margin-bottom: 4px; text-align: center;">${escapeHtml(course.progress)}</div>
                            ${course.date ? `<div style="font-size: 13px; color: #107980; text-align: center;">${escapeHtml(course.date)}</div>` : ''}
                        </div>
                        <div class="course-desc" style="font-size: 14px; color: #4a627a; margin-bottom: 8px; text-align: center;">${escapeHtml(course.desc)}</div>
                        <div class="click-hint" style="font-size: 12px; color: #a0b8d0; text-align: center;">✨ Нажмите для сертификата</div>
                    </div>
                    <div class="flip-card-back" style="background: #1e4663; color: white; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; gap: 20px; padding: 20px;">
                        ${hasPdf ? `
                            <img src="${course.iconImg}" alt="Иконка" style="width: 60px; height: 60px; object-fit: contain; background: rgba(255,255,255,0.1); border-radius: 12px; padding: 8px;">
                            <p style="font-size: 16px; font-weight: 600; margin: 0;">Сертификат</p>
                            <a href="${course.pdfUrl}" target="_blank" style="background: white; color: #1e4663; padding: 12px 24px; border-radius: 30px; text-decoration: none; font-weight: 600;">Открыть PDF →</a>
                            <span style="font-size: 12px; opacity: 0.7;">Нажмите, чтобы скачать или просмотреть</span>
                        ` : `
                            <img class="cert-image" src="${course.certImage}" alt="Сертификат" 
                                onclick="event.stopPropagation(); openCertModal('${course.certImage}')"
                                style="max-width: 100%; max-height: 200px; border-radius: 8px; cursor: pointer;"
                                onerror="this.onerror=null; this.parentElement.innerHTML='<div style=\'color:white;\'>⚠️ Сертификат недоступен</div>';">
                            <div style="font-size: 12px; opacity: 0.8;">🔍 Кликните для увеличения</div>
                        `}
                    </div>
                </div>
            </div>
        `;
    } else {
        // Динамический курс из Stepik
        const iconUrl = course.iconUrl || 'https://stepik.org/static/img/logo.svg';
        const label = course.customLabel || 'Сертификат Stepik';
        
        return `
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front" style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 20px;">
                        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px; width: 100%; justify-content: center;">
                            <img src="${iconUrl}" alt="Иконка курса" style="width: 45px; height: 45px; object-fit: contain; flex-shrink: 0;" onerror="this.style.display='none';">
                            <div class="course-title" style="font-size: 18px; font-weight: 700; color: #1e4663; text-align: center;">${titleHtml}${star}</div>
                        </div>
                        <div style="display: flex; flex-direction: column; align-items: center; margin-bottom: 8px;">
                            <div class="course-badge" style="background: #16d6ad20; color: #107980; padding: 4px 12px; border-radius: 20px; font-size: 13px; font-weight: 600; margin-bottom: 4px; text-align: center;">✅ Успешно завершён</div>
                            <div style="font-size: 13px; color: #107980; text-align: center;">${escapeHtml(course.progress)}</div>
                        </div>
                        <div class="course-desc" style="font-size: 14px; color: #4a627a; margin-bottom: 8px; text-align: center;">${escapeHtml(label)}</div>
                        <div class="click-hint" style="font-size: 12px; color: #a0b8d0; text-align: center;">✨ Нажмите, чтобы открыть PDF</div>
                    </div>
                    <div class="flip-card-back" style="background: #1e4663; color: white; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; gap: 20px; padding: 20px;">
                        <img src="${iconUrl}" alt="Иконка" style="width: 60px; height: 60px; object-fit: contain; background: rgba(255,255,255,0.1); border-radius: 12px; padding: 8px;">
                        <p style="font-size: 16px; font-weight: 600; margin: 0;">Сертификат</p>
                        <a href="${course.pdfUrl}" target="_blank" style="background: white; color: #1e4663; padding: 12px 24px; border-radius: 30px; text-decoration: none; font-weight: 600;">Открыть PDF →</a>
                        <span style="font-size: 12px; opacity: 0.7;">Нажмите, чтобы скачать или просмотреть</span>
                    </div>
                </div>
            </div>
        `;
    }
}

// Рендер карточки проекта
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

// Бургер-меню и плавный скролл
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

        const staticStepikIds = new Set();
        staticCoursesData.forEach(course => {
            if (course.stepikCourseId) {
                staticStepikIds.add(course.stepikCourseId);
            }
        });

        const filteredCerts = data.certificates.filter(cert => !staticStepikIds.has(cert.course_id));

        return filteredCerts.map(cert => ({
            title: cert.course_title || `Курс #${cert.course_id}`,
            progress: cert.issued_at ? cert.issued_at.slice(0, 10) : 'Дата неизвестна',
            pdfUrl: cert.pdf_url,
            isExcellent: cert.is_excellent,
            iconUrl: cert.cover_url || '',
            customLabel: cert.custom_label || ''
        }));

    } catch (e) {
        console.warn('Ошибка загрузки сертификатов Stepik:', e);
        return [];
    }
}

// ===== ИНИЦИАЛИЗАЦИЯ =====
async function init() {
    console.log('Initializing...');
    renderSkills();
    renderExperience();

    const stepikCourses = await loadStepikCourses();
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
