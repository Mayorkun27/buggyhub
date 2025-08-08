document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.thiss');
    let scrollPosition = window.scrollY;
    
    if (scrollPosition > 50) {
      navbar.classList.add('nowsticky');
    } else {
      navbar.classList.remove('nowsticky');
    }
  });
})

document.getElementById('copyrightYear').textContent = new Date().getFullYear();

const navToggler = document.getElementById("navToggler")
const navCollapse = document.getElementById("navCollapse")

navToggler.addEventListener("click", () => {
  navCollapse.classList.toggle("open")
})