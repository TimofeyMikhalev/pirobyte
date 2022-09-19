//слайдер
var swiper = new Swiper(".slider__body", {
    slidesPerView: 1,
    freeMode: true,
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
});

//слайдер для видео в моб версии
var swiper = new Swiper(".main__video", {
    pagination: {
      el: ".dots__video",
    },
});
//открытие блока с текстом
function readMore(){
    let dots = document.getElementById('dots');
    let more = document.getElementById('more');
    let btn = document.getElementById('btn');

    if(dots.style.display === 'none'){
        dots.style.display = 'inline';
        more.style.display = 'none';
    } else {
        dots.style.display = 'none';
        more.style.display = 'inline';
    }
}

//делаем табы активные
let categoriOne = document.querySelector('.categori__up-1');
let categoriTwo = document.querySelector('.categori__up-2');
let categoriThree = document.querySelector('.categori__up-3');


categoriOne.addEventListener('click', () => {
    categoriOne.classList.add('action');
    categoriTwo.classList.remove('action');
    categoriThree.classList.remove('action');
});
categoriTwo.addEventListener('click', () => {
    categoriTwo.classList.add('action');
    categoriThree.classList.remove('action');
    categoriOne.classList.remove('action');
});
categoriThree.addEventListener('click', () => {
    categoriThree.classList.add('action');
    categoriTwo.classList.remove('action');
    categoriOne.classList.remove('action');
});


//активная кнопка после заполнение полей
function toggleButton(){
    let username = document.getElementById('username').value;
    let password = document.getElementById('country').value;

    if (username && password) {
        document.getElementById('submitButton').innerHTML = "Take a complex order";
    } else {
        document.getElementById('submitButton').innerHTML = "Order";
    }
}

//отчистка формы
let form = document.querySelector('.main__send');
let button = document.getElementById('clearButton');
button.addEventListener('click', () => {
    form.reset();
    categoriThree.classList.remove('action');
    categoriTwo.classList.remove('action');
    categoriOne.classList.remove('action');
});

//открыть.закрыть меню в моб версии
let mobileBtn = document.querySelector('.header__mobile_menu');
let mobileClose = document.querySelector('.burger__krest');
let mobileBurger = document.querySelector('.mobile__burger');

mobileBtn.addEventListener('click', () => {
    mobileBurger.style.display = 'flex';
});

mobileClose.addEventListener('click', () => {
    mobileBurger.style.display = 'none';
});



AOS.init();