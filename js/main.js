// Конфигурация графиков и общие настройки
const chartConfig = {
    colors: {
        primary: '#0066FF',
        secondary: '#00BFFF',
        accent: '#4169E1',
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
    },
    gradients: {
        primary: ['#0066FF', '#00BFFF'],
        secondary: ['#1E90FF', '#87CEEB'],
    }
};

// Инициализация всех компонентов при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    initializeCharts();
    initializeNavigation();
    initializeNotifications();
    initializeDataRefresh();
});

// Инициализация графиков
function initializeCharts() {
    // График звонков
    const callsChart = document.getElementById('callsChart');
    if (callsChart) {
        new Chart(callsChart.getContext('2d'), {
            type: 'line',
            data: {
                labels: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'],
                datasets: [{
                    label: 'Количество звонков',
                    data: [15, 12, 6, 45, 75, 65, 55, 35],
                    fill: true,
                    borderColor: chartConfig.colors.primary,
                    backgroundColor: `${chartConfig.colors.primary}15`,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            display: true,
                            color: '#E5E7EB'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }

    // График источников
    const sourcesChart = document.getElementById('sourcesChart');
    if (sourcesChart) {
        new Chart(sourcesChart.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['Яндекс', 'Google', 'Instagram', 'Facebook', 'VK'],
                datasets: [{
                    label: 'Конверсия',
                    data: [8.5, 7.2, 6.8, 5.9, 4.7],
                    backgroundColor: [
                        chartConfig.colors.primary,
                        chartConfig.colors.secondary,
                        chartConfig.colors.accent,
                        '#4B5563',
                        '#9CA3AF'
                    ]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            display: true,
                            color: '#E5E7EB'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }
}

// Инициализация навигации
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Удаляем активный класс у всех ссылок
            navLinks.forEach(l => l.classList.remove('active'));
            // Добавляем активный класс к нажатой ссылке
            e.currentTarget.classList.add('active');
        });
    });
}

// Система уведомлений
function initializeNotifications() {
    const notificationButton = document.querySelector('.notification-button');
    if (notificationButton) {
        notificationButton.addEventListener('click', () => {
            // Здесь будет логика отображения уведомлений
            console.log('Notifications clicked');
        });
    }
}

// Автоматическое обновление данных
function initializeDataRefresh() {
    // Обновление каждые 30 секунд
    setInterval(() => {
        updateDashboardData();
    }, 30000);
}

// Обновление данных дашборда
function updateDashboardData() {
    // Здесь будет логика обновления данных
    // Например, запросы к API для получения актуальной информации
    console.log('Updating dashboard data...');
}

// Утилиты для форматирования данных
const utils = {
    formatNumber: (number) => {
        return new Intl.NumberFormat('ru-RU').format(number);
    },
    formatPercentage: (number) => {
        return `${number.toFixed(1)}%`;
    },
    formatDate: (date) => {
        return new Intl.DateTimeFormat('ru-RU', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }).format(date);
    }
};

// Обработка ошибок
window.addEventListener('error', (event) => {
    console.error('Application error:', event.error);
    // Здесь можно добавить логику отправки ошибок в систему мониторинга
});
