const hamburger = document.querySelector('#hamburger');
const MenuList = document.querySelector('.menu-list');
const Navbar = document.querySelector('.Navbar');
const Logo = document.querySelector('.Logo');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger-active');
  MenuList.classList.toggle('menu-list-active');
});
document.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    Navbar.classList.add('Navbar-scroll');
    Logo.classList.add('Logo-scroll');
    hamburger.classList.add('Logo-scroll');
  } else {
    Navbar.classList.remove('Navbar-scroll');
    Logo.classList.remove('Logo-scroll');
    hamburger.classList.remove('Logo-scroll');
  }
});
