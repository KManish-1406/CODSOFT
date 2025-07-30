// main.js
const topButton = document.getElementById("backToTop");

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    topButton.style.display = 'block';
  } else {
    topButton.style.display = 'none';
  }
});
topButton.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
