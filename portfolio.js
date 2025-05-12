// Simple scroll animation
window.addEventListener('scroll', () => {
  document.body.style.backgroundColor = window.scrollY > 100 ? '#eaeaea' : '#f4f4f4';
});
