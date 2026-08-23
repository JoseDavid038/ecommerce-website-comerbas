import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Importar estilos de Swiper directamente desde node_modules
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

/* Carrusel Principal (Hero) */
const swiper = new Swiper(".mySwiper", {
  modules: [Navigation, Pagination, Autoplay],
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
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 30,
    }
  }
});

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