const hamburger = document.querySelector('#hamburger');
const MenuList = document.querySelector('.menu-list');
const Navbar = document.querySelector('.Navbar');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger-active');
  MenuList.classList.toggle('menu-list-active');
});
document.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    Navbar.classList.add('Navbar-scroll');
  } else {
    Navbar.classList.remove('Navbar-scroll');
  }
});
