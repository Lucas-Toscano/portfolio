const menu = document.querySelector('#mobileMenu');
const menuLinks = document.querySelector('.navbarMenu');

// Display Mobile Menu
const toggleMobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
}

menu.addEventListener('click', toggleMobileMenu);