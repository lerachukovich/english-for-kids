import Category from "./Category";

// const menuLink = document.querySelectorAll('.menu__link');
const menuIcon = document.querySelector('.menu__burger');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('change');
});

// menuLink.forEach(element => {
//   element.addEventListener('click', function () {
//     let category = new Category(this.data[0][i], this.data[i+1]);
//     document.querySelector('.app__container').appendChild(category.render());
//
//   })
// })
