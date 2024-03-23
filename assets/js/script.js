'use strict';




// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
  }

  mobileMenuOpenBtn[i].addEventListener('click', function () {
    mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
  });

  mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  overlay.addEventListener('click', mobileMenuCloseFunc);

}


//automatic slider movement
window.onload = function() {
  let list = document.querySelector(' .banner .slider-list');
  let items = document.querySelectorAll('.banner .slider-list .items');
  let prev = document.getElementById('prev');
  let next = document.getElementById('next');

  let active = 0;
  let lengthItems = items.length -1;

  next.onclick = function(){
    if (active + 1 > lengthItems) {
      active=0;
    }else {
      active++;
    }
    reloadSlider();
  }

  prev.onclick = function(){
    if (active - 1 < 0) {
      active = lengthItems;
    }else {
      active--;
    }
    reloadSlider();
  }

  function reloadSlider() {
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

  }
  function changeSlide() {
    if (active + 1 > lengthItems) {
      active = 0;
    } else {
      active++;
    }
    reloadSlider();
  }

  // Automatic slide changer every 3 seconds
  setInterval(changeSlide, 3000);
}

// accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {

        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');

      }

    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });

}