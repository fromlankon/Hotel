let searchBar = document.querySelector('.searchBar');
let searchButton = document.querySelector('.searchButton');
const hamburgerSearch = document.querySelector('.hamburgerSearch');

searchButton.addEventListener('click', function () {
  if (searchBar.style.height === '80px') {
    searchBar.style.height = '0px';
  } else {
    searchBar.style.height = '80px';
  }
});

hamburgerSearch.addEventListener('click', function () {
  if (searchBar.style.height === '80px') {
    searchBar.style.height = '0px';
  } else {
    searchBar.style.height = '80px';
  }
});

let leftButton = document.querySelector('.swiperButtonLeft');
let rightButton = document.querySelector('.swiperButtonRight');
let index = 0;
const slides = document.querySelectorAll('.swiperSlide');
const width = slides[0].getBoundingClientRect().width;

for (let i = 0; i < slides.length; ++i) {
  slides[i].style.left = i * width + 'px';
}

leftButton.addEventListener('click', function () {
  if (index > 0)
    index--;
    updateSlide()
})

rightButton.addEventListener('click', function () {
  if (index < slides.length - 1)
    index++;
    updateSlide()
})

function updateSlide(){
  for (let i = 0; i < slides.length; ++i) {
    slides[i].style.left = (i - index) * width + 'px';
  }
}


let leftButton2 = document.querySelector('.section3LeftSwiperButton');
let rightButton2 = document.querySelector('.section3RightSwiperButton');
let index2 = 0;
const slides2 = document.querySelectorAll('.swiper2Slide');
const width2 = slides2[0].getBoundingClientRect().width;

for (let i = 0; i < slides2.length; ++i) {
  slides2[i].style.left = i * width2 + 'px';
}

leftButton2.addEventListener('click', function () {
  if (index2 > 0)
    index2--;
    updateSlide2()
})

rightButton2.addEventListener('click', function () {
  if (index2 < slides2.length - 1)
    index2++;
    updateSlide2()
})

function updateSlide2(){
  for (let i = 0; i < slides2.length; ++i) {
    slides2[i].style.left = (i - index2) * width2 + 'px';
  }
}

const plus = document.querySelector('.plus');
const hamburger = document.querySelector('.hamburger');
const hamburgerIcon1 = document.querySelector('.hamburgerIcon1');
const hamburgerIcon2 = document.querySelector('.hamburgerIcon2');
const hamburgerMenu = document.querySelector('.hamburgerMenu');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');
const line4 = document.querySelector('.line4');
const line5 = document.querySelector('.line5');


hamburgerIcon1.addEventListener('click', () =>{
  hamburgerIcon1.style.zIndex = 0;
  hamburgerIcon2.style.zIndex = 1000;
  hamburgerIcon2.style.display = 'flex';
  hamburgerIcon1.style.display = 'none';
  hamburgerMenu.style.left = '-320px';
  hamburgerMenu.style.left = '0px';
  line4.style.transform = 'rotate(45deg)';
  line5.style.transform = 'rotate(-45deg)';
})

hamburgerIcon2.addEventListener('click', function(){
  hamburgerIcon1.style.zIndex = 1000;
  hamburgerIcon2.style.zIndex = 0;
  hamburgerIcon2.style.display = 'none';
  hamburgerIcon1.style.display = 'flex';
  hamburgerMenu.style.left = '-320px';
})

plus.addEventListener('click', function(){
  hamburgerMenu.style.left = '-320px';
  hamburgerIcon2.style.display = 'none';
  hamburgerIcon1.style.display = 'flex';  
})

const chevIcon1 = document.querySelector('.chevIcon1');
const chevIcon2 = document.querySelector('.chevIcon2');
const hamburgerDD = document.querySelector('.hamburgerDD');

chevIcon1.addEventListener('click', function(){
  hamburgerDD.style.height = '300px';
  chevIcon1.style.display = 'none';
  chevIcon2.style.display = 'block';
})

chevIcon2.addEventListener('click', function(){
  hamburgerDD.style.height = '0px';
  chevIcon2.style.display = 'none';
  chevIcon1.style.display = 'block';
})


window.addEventListener("scroll", function() {
  if (window.pageYOffset !== 0) {
    document.querySelector(".scrollButton").classList.add("visible");
  } else {
    document.querySelector(".scrollButton").classList.remove("visible");
  }
});


const circle1 = document.querySelector('.circle1');
const circle2 = document.querySelector('.circle2');
const circle3 = document.querySelector('.circle3');
const circle4 = document.querySelector('.circle4');
const quotes1 = document.querySelector('.quotes1');
const quotes2 = document.querySelector('.quotes2');
const quotes3 = document.querySelector('.quotes3');
const quotes4 = document.querySelector('.quotes4');

circle1.addEventListener('click', function(){
    quotes1.style.left = '0';
    quotes2.style.left = '540px';
    quotes3.style.left = '1080px';
    quotes4.style.left = '1620px';
    circle1.style.backgroundColor = 'rgb(28, 195, 178)';
    circle2.style.backgroundColor = 'rgb(192, 200, 215)';
    circle3.style.backgroundColor = 'rgb(192, 200, 215)';
    circle4.style.backgroundColor = 'rgb(192, 200, 215)';
})

circle2.addEventListener('click', function(){
    quotes1.style.left = '-540px';
    quotes2.style.left = '0';
    quotes3.style.left = '540px';
    quotes4.style.left = '1080px';
    circle1.style.backgroundColor = 'rgb(192, 200, 215)';
    circle2.style.backgroundColor = 'rgb(28, 195, 178)';
    circle3.style.backgroundColor = 'rgb(192, 200, 215)';
    circle4.style.backgroundColor = 'rgb(192, 200, 215)';
})

circle3.addEventListener('click', function(){
    quotes1.style.left = '-1080px';
    quotes2.style.left = '-540px';
    quotes3.style.left = '0';
    quotes4.style.left = '540px';
    circle1.style.backgroundColor = 'rgb(192, 200, 215)';
    circle2.style.backgroundColor = 'rgb(192, 200, 215)';
    circle3.style.backgroundColor = 'rgb(28, 195, 178)';
    circle4.style.backgroundColor = 'rgb(192, 200, 215)';
})

circle4.addEventListener('click', function(){
    quotes1.style.left = '-1620px';
    quotes2.style.left = '-1080px';
    quotes3.style.left = '-540px';
    quotes4.style.left = '0';
    circle1.style.backgroundColor = 'rgb(192, 200, 215)';
    circle2.style.backgroundColor = 'rgb(192, 200, 215)';
    circle3.style.backgroundColor = 'rgb(192, 200, 215)';
    circle4.style.backgroundColor = 'rgb(28, 195, 178)';
})