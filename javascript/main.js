const searchForm = document.querySelector(".search-form");
const loginForm = document.querySelector(".login-form-container");

document.querySelector("#search-btn").addEventListener("click", () => {
  searchForm.classList.toggle("active");
});

function headerFixed() {
  searchForm.classList.remove("active");
  if (window.scrollY > 80) {
    document.querySelector(".header .header-2").classList.add("active");
  } else {
    document.querySelector(".header .header-2").classList.remove("active");
  }
}

document.querySelector("#login-btn").addEventListener("click", () => {
  loginForm.classList.toggle("active");
});

document.querySelector("#close-login-btn").addEventListener("click", () => {
  loginForm.classList.remove("active");
});

window.onscroll = () => headerFixed();
window.onload = () => headerFixed();

const swiper = new Swiper(".books-slider", {
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

const swiper2 = new Swiper(".featured-slider", {
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOneInteraction: false,
  },
  navigation: {
    nexEl: ".swiper-button-next",
    preEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});
