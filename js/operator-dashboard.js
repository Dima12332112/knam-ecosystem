// Инициализация дат
function initDates() {
    const now = new Date();
    const options = { day: 'numeric', month: 'long' };
    document.getElementById('current-date').textContent = 'Сегодня, ' + now.toLocaleDateString('ru-RU', options);
    
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(endDate.getDate() - 7);
    
    document.getElementById('calls-start-date').valueAsDate = startDate;
    document.getElementById('calls-end-date').valueAsDate = endDate;
}

// Переключение страниц
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    const link = document.querySelector(`.nav-link[data-page="${pageId}"]`);
    if (link) link.classList.add('active');
    
    window.scrollTo(0, 0);
}

// Обработка клика по метрике
function showMetricDetail(metric) {
    const metrics = {
        'calls': 'Диалоги',
        'leads': 'Заявки',
        'rating': 'Рейтинг',
        'quality': 'Качество'
    };
    alert(`Подробная информация по метрике: ${metrics[metric]}`);
}

// Открытие рабочего пространства
function openWorkspace() {
    window.location.href = 'workspace.html';
}

// Обработчики событий
document.addEventListener('DOMContentLoaded', function() {
    initDates();
    
    // Обработка кликов по навигации
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = link.getAttribute('data-page');
            if (pageId) showPage(pageId);
        });
    });
    
    // Обновление графика при изменении дат
    document.getElementById('calls-start-date').addEventListener('change', updateChart);
    document.getElementById('calls-end-date').addEventListener('change', updateChart);
});

// Обновление графика
function updateChart() {
    const startDate = document.getElementById('calls-start-date').value;
    const endDate = document.getElementById('calls-end-date').value;
    console.log(`Обновление графика за период: ${startDate} - ${endDate}`);
    // Здесь будет логика обновления графика
} 