const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const navLinks = document.querySelectorAll(".nav-menu .nav-link");

menuOpenButton.addEventListener("click", () => {
  //toggle mobile menu visibility
  //toggle add and remove the class
  //clik on click off
  document.body.classList.toggle("show-mobile-menu");
});
menuCloseButton.addEventListener("click", () => {
  menuOpenButton.click();
//   The same button (menuOpenButton) is responsible for both opening and closing the menu via toggling the class show-mobile-menu.
// You want the close button to behave exactly like the open button (just toggle).
});

//close menu when the nav link is clicked
navLinks.forEach(link => {
  link.addEventListener('click',()=>menuOpenButton.click())
})
//initialize swiper
const swiper = new Swiper('.slider-wrapper', {
  // // Optional parameters
  // direction: 'vertical',
  loop: true,
  grabCursor:true,
  spaceBetween:25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true,//clikable bullets 
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },

//responsive breakpoints
  breakpoints:{
    0:{
      slidesPerView:1
    },
    768:{
      slidesPerView:2
    },
    1024:{
      slidesPerView:3
    },
    
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");

  if (main) {
    // Apply scroll-reveal class to all children inside <main>
    main.querySelectorAll("*").forEach((el) => {
      el.classList.add("scroll-reveal");
    });

    // Observer setup to toggle animation on every scroll in/out
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show"); // Remove when out of view
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe every .scroll-reveal element
    document.querySelectorAll(".scroll-reveal").forEach((el) => observer.observe(el));
  }
});
