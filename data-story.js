// TV Insights Charts
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('title').textContent.includes('TV Insights')) {
        renderAllCharts();
    }
});

function renderAllCharts() {
    renderTechFrequencyChart();
    renderPowerByTechChart();
    renderSizeDistributionChart();
    renderSizePowerChart();
    renderBrandShareChart();
    renderRatingSizeChart();
}

function renderTechFrequencyChart() {
    const ctx = document.getElementById('techFrequencyChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['LED/LCD', 'OLED', 'QLED', 'Other'],
            datasets: [{
                label: 'Market Share (%)',
                data: [75, 15, 8, 2],
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
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'TV Technology Market Share',
                    font: { size: 16 }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Market Share (%)'
                    }
                }
            }
        }
    });
}

function renderPowerByTechChart() {
    const ctx = document.getElementById('powerByTechChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['OLED', 'QLED', 'LED/LCD', 'Plasma'],
            datasets: [{
                label: 'Average Power (W)',
                data: [80, 110, 120, 320],
                backgroundColor: '#f3a528',
                borderColor: '#d48c07',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Average Power Consumption by Technology',
                    font: { size: 16 }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Power (Watts)'
                    }
                }
            }
        }
    });
}

function renderSizeDistributionChart() {
    const ctx = document.getElementById('sizeDistributionChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['43"', '50"', '55"', '65"', '75"', '85"'],
            datasets: [{
                label: 'Market Share (%)',
                data: [15, 20, 35, 25, 4, 1],
                backgroundColor: '#fae79b',
                borderColor: '#d4c179',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Screen Size Distribution in Australian Market',
                    font: { size: 16 }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Market Share (%)'
                    }
                }
            }
        }
    });
}

function renderSizePowerChart() {
    const ctx = document.getElementById('sizePowerChart').getContext('2d');
    new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'TV Models',
                data: [
                    {x: 43, y: 60}, {x: 50, y: 80}, {x: 55, y: 120}, 
                    {x: 65, y: 160}, {x: 75, y: 220}, {x: 85, y: 280}
                ],
                backgroundColor: '#f3a528',
                pointRadius: 8,
                pointHoverRadius: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Screen Size vs Power Consumption',
                    font: { size: 16 }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `Size: ${context.parsed.x}", Power: ${context.parsed.y}W`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Screen Size (inches)'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Power Consumption (Watts)'
                    }
                }
            }
        }
    });
}

function renderBrandShareChart() {
    const ctx = document.getElementById('brandShareChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Samsung', 'LG', 'Sony', 'Hisense', 'TCL', 'Other'],
            datasets: [{
                data: [30, 25, 15, 12, 10, 8],
                backgroundColor: [
                    '#fae79b',
                    '#f3a528',
                    '#e68900',
                    '#876942',
                    '#b3915e',
                    '#d2d2d7'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'TV Brand Market Share in Australia',
                    font: { size: 16 }
                },
                legend: {
                    position: 'right'
                }
            }
        }
    });
}

function renderRatingSizeChart() {
    const ctx = document.getElementById('ratingSizeChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['43-50"', '55"', '65"', '75"', '85"'],
            datasets: [{
                label: 'Average Star Rating',
                data: [4.5, 4.2, 4.0, 3.8, 3.5],
                borderColor: '#f3a528',
                backgroundColor: 'rgba(243, 165, 40, 0.1)',
                tension: 0.3,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Energy Star Rating vs Screen Size',
                    font: { size: 16 }
                }
            },
            scales: {
                y: {
                    min: 3,
                    max: 5,
                    title: {
                        display: true,
                        text: 'Star Rating'
                    }
                }
            }
        }
    });
}