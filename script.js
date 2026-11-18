const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav nav');
menu?.addEventListener('click', () => nav.classList.toggle('open'));
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const toast = document.getElementById('toast');
let toastTimer;
document.querySelectorAll('.quick').forEach(button => {
  button.addEventListener('click', () => {
    toast.textContent = `${button.dataset.product} — contactez Hanaa Shop sur Instagram pour les détails.`;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 3200);
  });
});