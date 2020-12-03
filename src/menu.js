const menuIcon = document.querySelector('.menu__burger');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('change');
});
