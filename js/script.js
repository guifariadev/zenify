// responsive navbar script
const navbar = document.querySelector('.navbar');
const mobileMenu = document.querySelector('.mobile_menu');
const button = document.querySelector('.mobile_btn');
const buttonIcon = button.querySelector('i'); 
const ctaButton = document.querySelector('.start-btn');
button.addEventListener('click', function() {
    mobileMenu.classList.toggle('active'); 
    if (mobileMenu.classList.contains('active')) {
        buttonIcon.classList.remove('fa-bars'); 
        buttonIcon.classList.add('fa-times'); 
    } else {
        buttonIcon.classList.remove('fa-times'); 
        buttonIcon.classList.add('fa-bars'); 
    }
});

// Swiper js script
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//end Swiper js script

//AOS animation on scroll
AOS.init({
  duration: 1000,
  once: true
});
