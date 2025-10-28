  // Swiper

import Swiper from 'swiper/bundle';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css/bundle';


  const swiper = new Swiper(".mySwiper", {
    modules: [Navigation, Pagination],
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 9000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  breakpoints: {
      // When the viewport is 640px or larger
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // When the viewport is 1024px or larger
      1024: {
        slidesPerView: 1,
        spaceBetween: 30,
      }
    }
  });




// var swiper2 = new Swiper(".mySwiper2", {
//   slidesPerView: 1.2,
//   spaceBetween: 10,
//   centeredSlides: true,
//   pagination: {
//     el: ".mySwiper2 .swiper-pagination",
//     clickable: true,
//   },
//   loop: false,
//   on: {
//     slideChange: function () {
//       updateActiveTab(swiper2.realIndex);
//     },
//   },

//  breakpoints: {
//     When the viewport is 640px or larger
//     640: {
//       slidesPerView: 1,
//       spaceBetween: 1,
//     },
//      When the viewport is 1024px or larger
//     1024: {
//       slidesPerView: 1,
//       spaceBetween: 30,
//     }
//   }
// });

/* Carrusel de productos (más vendidos / recomendados) */
const productSwiper = new Swiper('.mySwiper2', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  freeMode: true,
  grabCursor: true,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1150: {
      slidesPerView: 4,
      spaceBetween: 32,
    },
  },
});