// Render charts for television page
document.addEventListener('DOMContentLoaded', function() {
    // Only run if we're on the televisions page
    if (document.querySelector('title').textContent.includes('Televisions')) {
        renderCharts();
    }
});

function renderCharts() {
    // Energy Consumption Chart
    const consumptionCtx = document.getElementById('consumptionChart');
    if (consumptionCtx) {
        new Chart(consumptionCtx, {
            type: 'bar',
            data: {
                labels: ['LED', 'OLED', 'QLED', 'Plasma', 'LCD'],
                datasets: [{
                    label: 'Watts (Average)',
                    data: [80, 130, 110, 300, 150],
                    backgroundColor: [
                        '#fae79b',
                        '#f3a528',
                        '#e68900',
                        '#876942',
                        '#b3915e'
                    ],
                    borderColor: [
                        '#d4c179',
                        '#d48c07',
                        '#c47a00',
                        '#6c5334',
                        '#9a7a49'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Power Consumption by TV Type (Watts)'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `Average: ${context.raw} watts`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Watts'
                        }
                    }
                }
            }
        });
    }
    
    // Annual Cost Chart
    const costCtx = document.getElementById('costChart');
    if (costCtx) {
        new Chart(costCtx, {
            type: 'line',
            data: {
                labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
                datasets: [
                    {
                        label: 'LED TV',
                        data: [42, 43, 45, 47, 50, 52],
                        borderColor: '#fae79b',
                        backgroundColor: 'rgba(250, 231, 155, 0.2)',
                        tension: 0.3,
                        fill: true
                    },
                    {
                        label: 'OLED TV',
                        data: [68, 70, 73, 76, 80, 85],
                        borderColor: '#f3a528',
                        backgroundColor: 'rgba(243, 165, 40, 0.2)',
                        tension: 0.3,
                        fill: true
                    },
                    {
                        label: 'QLED TV',
                        data: [58, 60, 63, 65, 68, 70],
                        borderColor: '#e68900',
                        backgroundColor: 'rgba(230, 137, 0, 0.2)',
                        tension: 0.3,
                        fill: true
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Annual Running Cost (AUD)'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.dataset.label}: $${context.raw}`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Cost (AUD)'
                        }
                    }
                }
            }
        });
    }
    
    // Market Share Chart
    const marketCtx = document.getElementById('marketChart');
    if (marketCtx) {
        new Chart(marketCtx, {
            type: 'doughnut',
            data: {
                labels: ['LED', 'OLED', 'QLED', 'Other'],
                datasets: [{
                    data: [65, 15, 12, 8],
                    backgroundColor: [
                        '#fae79b',
                        '#f3a528',
                        '#e68900',
                        '#876942'
                    ],
                    borderColor: [
                        '#d4c179',
                        '#d48c07',
                        '#c47a00',
                        '#6c5334'
                    ],
                    borderWidth: 1,
                    hoverOffset: 15
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'right',
                    },
                    title: {
                        display: true,
                        text: 'TV Technology Market Share (%)'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.label}: ${context.raw}%`;
                            }
                        }
                    }
                }
            }
        });
    }
}