let searchBar = document.querySelector('.searchBar');
let searchButton = document.querySelector('.searchButton');

searchButton.addEventListener('click', function () {
    if (searchBar.style.height === '80px') {
        searchBar.style.height = '0px';
    } else {
        searchBar.style.height = '80px';
    }
});

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


hamburgerIcon1.addEventListener('click', () => {
    hamburgerIcon1.style.zIndex = 0;
    hamburgerIcon2.style.zIndex = 1000;
    hamburgerIcon2.style.display = 'flex';
    hamburgerIcon1.style.display = 'none';
    hamburgerMenu.style.left = '-320px';
    hamburgerMenu.style.left = '0px';
    line4.style.transform = 'rotate(45deg)';
    line5.style.transform = 'rotate(-45deg)';
})

hamburgerIcon2.addEventListener('click', function () {
    hamburgerIcon1.style.zIndex = 1000;
    hamburgerIcon2.style.zIndex = 0;
    hamburgerIcon2.style.display = 'none';
    hamburgerIcon1.style.display = 'flex';
    hamburgerMenu.style.left = '-320px';
})

plus.addEventListener('click', function () {
    hamburgerMenu.style.left = '-320px';
    hamburgerIcon2.style.display = 'none';
    hamburgerIcon1.style.display = 'flex';
})

const chevIcon1 = document.querySelector('.chevIcon1');
const chevIcon2 = document.querySelector('.chevIcon2');
const hamburgerDD = document.querySelector('.hamburgerDD');

chevIcon1.addEventListener('click', function () {
    hamburgerDD.style.height = '300px';
    chevIcon1.style.display = 'none';
    chevIcon2.style.display = 'block';
})

chevIcon2.addEventListener('click', function () {
    hamburgerDD.style.height = '0px';
    chevIcon2.style.display = 'none';
    chevIcon1.style.display = 'block';
})


const playButton = document.querySelector('.playButton');
const videoOverlay = document.querySelector('.videoOverlay');
const close = document.querySelector('.close');

playButton.addEventListener('click', function () {
    videoOverlay.style.display = 'block';
})

close.addEventListener('click', function () {
    videoOverlay.style.display = 'none';
})


window.addEventListener("scroll", function() {
    if (window.pageYOffset !== 0) {
      document.querySelector(".scrollButton").classList.add("visible");
    } else {
      document.querySelector(".scrollButton").classList.remove("visible");
    }
  });