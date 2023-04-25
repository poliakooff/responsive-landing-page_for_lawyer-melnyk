
const menuItems = document.querySelectorAll('.navigation_menu__item')
const supheader = document.querySelector('.supheader');
const navigationMenu = document.querySelector('.navigation_menu');
const hamburgerBtn = document.querySelector('.navigation__hamburger');

menuItems.forEach(menuItem => {
    menuItem.addEventListener('click', () => {
      navigationMenu.classList.remove('navigation_menu_active');
      hamburgerBtn.classList.remove('navigation__hamburger_active');
      supheader.style.display = 'block'
    })
  })