const hamburger = document.querySelector('#hamburger');
const MenuList = document.querySelector('.menu-list');
const Navbar = document.querySelector('.Navbar');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger-active');
  MenuList.classList.toggle('menu-list-active');
});
document.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    Navbar.style.backgroundColor = '#3b82f6';
  } else {
    Navbar.style.backgroundColor = 'transparent';
  }
});
