// script.js - navigation + simple chart + footer year

document.addEventListener('DOMContentLoaded', () => {
  const pages = document.querySelectorAll('.page');
  const navLinks = document.querySelectorAll('.nav-link');
  const navStatus = document.getElementById('navStatus');
  const powerBtn = document.getElementById('powerLogoBtn');
  const yearEl = document.getElementById('year');

  function showPage(id){
    pages.forEach(p=>{
      const is = p.id === id;
      p.classList.toggle('active', is);
      p.setAttribute('aria-hidden', !is);
    });
    navLinks.forEach(a=>{
      a.classList.toggle('active', a.dataset.page === id);
    });
    // friendly status
    navStatus.textContent = `You are on: ${capitalize(id)}`;
    // update document title
    document.title = `${capitalize(id)} — Appliance Energy Demo`;
    // optionally push state so back button works
    history.replaceState({page:id}, '', `#${id}`);
  }

  // set up nav clicks
  navLinks.forEach(link=>{
    link.addEventListener('click', e=>{
      e.preventDefault();
      showPage(link.dataset.page);
    });
    link.addEventListener('mouseover', ()=>{
      navStatus.textContent = `Go to: ${link.textContent}`;
    });
    link.addEventListener('mouseout', ()=> {
      // show active page
      const active = document.querySelector('.nav-link.active');
      navStatus.textContent = `You are on: ${active ? active.textContent : 'Home'}`;
    });
  });

  // logo returns home
  powerBtn.addEventListener('click', ()=> showPage('home'));
  powerBtn.addEventListener('keydown', (e)=> { if(e.key === 'Enter' || e.key === ' ') showPage('home'); });

  // set year in footer
  yearEl.textContent = new Date().getFullYear();

  // show initial page based on hash or default to home
  const initial = (location.hash && location.hash.replace('#','')) || 'home';
  showPage(initial);

  // if you want to respond to back/forward
  window.addEventListener('popstate', (ev) => {
    const page = ev.state?.page || (location.hash ? location.hash.replace('#','') : 'home');
    showPage(page);
  });

  // --- Chart.js sample for Televisions page ---
  const ctx = document.getElementById('tvChart');
  if(ctx){
    const tvChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['32" LED', '50" LED', '55" OLED'],
        datasets: [{
          label: 'Est. kWh/year (sample)',
          data: [50, 120, 150],
          backgroundColor: [
            'rgba(42,157,143,0.8)',
            'rgba(42,157,143,0.6)',
            'rgba(42,157,143,0.4)'
          ],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          title: { display: true, text: 'Sample TV annual energy (placeholder)' }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: { display: true, text: 'kWh / year' }
          }
        }
      }
    });
    // ensure canvas has some height
    ctx.parentElement.style.height = "320px";
  }

  // helper
  function capitalize(s){ return s.charAt(0).toUpperCase() + s.slice(1); }
});
