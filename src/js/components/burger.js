const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');

burger.addEventListener('click', (e) => {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('nav--active');
  overlay.classList.toggle('overlay--active');


});
