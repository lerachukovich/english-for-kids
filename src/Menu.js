const menuIcon = document.querySelector('.menu__burger');
const menu = document.querySelector('.menu');

const toggleMenu = function () {
  menu.classList.toggle('change');
}

menuIcon.addEventListener('click', (e) => {
  e.stopPropagation()
  toggleMenu();
});

document.addEventListener('click', function(e) {
  const target = e.target;
  const its_menu = target === menu || menu.contains(target);
  const menu_is_active = menu.classList.contains('change');

  if (!its_menu && menu_is_active) {
    toggleMenu();
    document.body.classList.toggle('');
  }
});


