const navbar = document.querySelector('header .navbar');
const layout = document.querySelector('#close-navbar');

// #account-btn - добавляет класс active
// #close-form - удаляет класс active

document.querySelector('#account-btn').onclick = () =>{
  navbar.classList.add('active');

}

document.querySelector('#close-form').onclick = () =>{
  navbar.classList.remove('active');
  console.log(layout);
}

const registerBtn = document.querySelector('.account-form .register-btn');

const loginBtn = document.querySelector('.account-form .login-btn');

const loginForm = document.querySelector('.login-form');
const registerForm = document.querySelector('.register-form');

registerBtn.onclick = () =>{
  registerBtn.classList.add('active');
  loginBtn.classList.remove('active');
  loginForm.classList.remove('active');
  registerForm.classList.add('active');
}

loginBtn.onclick = () =>{
  registerBtn.classList.remove('active');
  loginBtn.classList.add('active');
  loginForm.classList.add('active');
  registerForm.classList.remove('active');
}

const accountForm = document.querySelector('.account-form');

document.querySelector('#account-btn').onclick = () =>{
  accountForm.classList.add('active');
  layout.style.display = "block";
}

document.querySelector('#close-form').onclick = () =>{
  accountForm.classList.remove('active');
  layout.style.display = "none";
}

const boxes = document.querySelectorAll('.account-form .box');

let boxText = '';
for(let a = 0; a < boxes.length; a++){
  boxes[a].addEventListener('click', function(){
    boxText = this.placeholder;
    this.placeholder = '';
  });

  boxes[a].addEventListener('blur', function(){
    if(this.placeholder=='') this.placeholder = boxText;
  });
}

// HOME Swiper
const swiper = new Swiper('.home-slider', {
  pagination:{
    el: '.swiper-pagination',
    clickable:true
  },
  loop: true,
  grabCursor: true,
});

// HOME-COURSES
const home_swiper = new Swiper(".home-courses-slider", {
  loop:true,
  grabCursor:true,
  spaceBetween:10,
  breakpoints:{
    0: {slidesPerView:1},
    768: {slidesPerView:2},
    991: {slidesPerView:3}
  },
});