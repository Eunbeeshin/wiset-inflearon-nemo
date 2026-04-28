document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('data/dashboard_data.json');
        const data = await response.json();
        
        // Initialize Lucide icons (already called in HTML but just in case)
        if (window.lucide) window.lucide.createIcons();

        // Update Dashboard components
        updateSummary(data.summary);
        renderRentDistChart(data.rent_dist);
        renderBusinessDistChart(data.business_dist);
        renderFloorTrendChart(data.floor_trend);
        renderSubwayViewChart(data.subway_analysis);
        renderScatterChart(data.scatter_data);
        renderTopListings(data.top_listings);
        
    } catch (error) {
        console.error('Error loading dashboard data:', error);
    }
});

// Helper for number animation
function animateValue(obj, start, end, duration, prefix = '', suffix = '') {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        obj.innerHTML = prefix + value.toLocaleString() + suffix;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

function updateSummary(summary) {
    const totalListings = document.getElementById('total-listings');
    const avgRent = document.getElementById('avg-rent');
    const avgDeposit = document.getElementById('avg-deposit');
    const totalViews = document.getElementById('total-views');
    const topCategory = document.getElementById('top-category');

    animateValue(totalListings, 0, summary.total_listings, 1500);
    animateValue(avgRent, 0, Math.round(summary.avg_monthly_rent), 1500, '₩');
    animateValue(avgDeposit, 0, Math.round(summary.avg_deposit), 1500, '₩');
    animateValue(totalViews, 0, summary.total_views, 1500);
    topCategory.innerText = summary.top_category;
}

// Global Chart Defaults
Chart.defaults.color = '#94a3b8';
Chart.defaults.font.family = "'Outfit', 'Noto Sans KR', sans-serif";
Chart.defaults.plugins.tooltip.backgroundColor = 'rgba(15, 23, 42, 0.9)';
Chart.defaults.plugins.tooltip.borderColor = 'rgba(255, 255, 255, 0.1)';
Chart.defaults.plugins.tooltip.borderWidth = 1;
Chart.defaults.plugins.tooltip.padding = 12;
Chart.defaults.plugins.tooltip.cornerRadius = 12;

function renderRentDistChart(dist) {
    const ctx = document.getElementById('rentDistChart').getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(79, 172, 254, 0.6)');
    gradient.addColorStop(1, 'rgba(0, 242, 254, 0.1)');

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: dist.labels.slice(0, 5), // Show top 5 segments for clarity in doughnut
            datasets: [{
                data: dist.values.slice(0, 5),
                backgroundColor: [
                    '#4facfe', '#00f2fe', '#9d50bb', '#ff9a9e', '#64748b'
                ],
                borderWidth: 0,
                hoverOffset: 15
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom', labels: { usePointStyle: true, padding: 20 } }
            },
            cutout: '70%'
        }
    });
}

function renderBusinessDistChart(dist) {
    const ctx = document.getElementById('businessDistChart').getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 400, 0);
    gradient.addColorStop(0, 'rgba(157, 80, 187, 0.8)');
    gradient.addColorStop(1, 'rgba(79, 172, 254, 0.3)');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: dist.labels,
            datasets: [{
                label: '매물 수',
                data: dist.values,
                backgroundColor: gradient,
                borderRadius: 8,
                borderWidth: 0,
                barThickness: 24
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                x: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, border: { display: false } },
                y: { grid: { display: false }, border: { display: false } }
            }
        }
    });
}

function renderFloorTrendChart(trend) {
    const ctx = document.getElementById('floorTrendChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: trend.labels,
            datasets: [{
                label: '평균 월세',
                data: trend.values,
                borderColor: '#00f2fe',
                backgroundColor: 'rgba(0, 242, 254, 0.05)',
                fill: true,
                tension: 0.4,
                pointRadius: 4,
                pointBackgroundColor: '#00f2fe',
                borderWidth: 3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                y: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, border: { display: false } },
                x: { grid: { display: false }, border: { display: false } }
            }
        }
    });
}

function renderSubwayViewChart(analysis) {
    const ctx = document.getElementById('subwayViewChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: analysis.labels,
            datasets: [{
                label: '평균 조회수',
                data: analysis.values,
                borderColor: '#9d50bb',
                backgroundColor: 'rgba(157, 80, 187, 0.05)',
                fill: true,
                tension: 0.4,
                pointRadius: 4,
                pointBackgroundColor: '#9d50bb',
                borderWidth: 3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                y: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, border: { display: false } },
                x: { grid: { display: false }, border: { display: false } }
            }
        }
    });
}

function renderScatterChart(scatterData) {
    const ctx = document.getElementById('rentScatterChart').getContext('2d');
    const data = scatterData.map(item => ({
        x: item.size,
        y: item.monthlyRent,
        title: item.title
    }));

    new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: '매물 데이터',
                data: data,
                backgroundColor: 'rgba(0, 242, 254, 0.5)',
                borderColor: '#00f2fe',
                borderWidth: 1,
                pointRadius: 6,
                hoverPointRadius: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: (context) => {
                            const item = context.raw;
                            return [`제목: ${item.title}`, `면적: ${item.x}㎡`, `월세: ₩${item.y.toLocaleString()}`];
                        }
                    }
                }
            },
            scales: {
                x: { title: { display: true, text: '면적 (㎡)' }, grid: { color: 'rgba(255, 255, 255, 0.05)' } },
                y: { title: { display: true, text: '월세 (₩)' }, grid: { color: 'rgba(255, 255, 255, 0.05)' } }
            }
        }
    });
}

function renderTopListings(listings) {
    const tbody = document.getElementById('top-listings-body');
    tbody.innerHTML = '';
    
    listings.forEach((item, index) => {
        const tr = document.createElement('tr');
        tr.style.animation = `fadeInUp 0.5s ease-out forwards ${1.2 + (index * 0.1)}s`;
        tr.style.opacity = '0';
        tr.innerHTML = `
            <td><div style="font-weight: 600; color: #fff;">${item.title}</div></td>
            <td><div style="font-family: 'Outfit';">₩${item.deposit.toLocaleString()} / ${item.monthlyRent.toLocaleString()}</div></td>
            <td><span class="badge">${item.nearSubwayStation || '역세권 정보 없음'}</span></td>
            <td><div style="color: var(--accent-primary); font-weight: 700; font-family: 'Outfit';">${item.viewCount.toLocaleString()}</div></td>
        `;
        tbody.appendChild(tr);
    });
}

