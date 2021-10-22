import AOS from 'aos';
import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,

  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 24
    }
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

function getYCoord(elem) {
  let box = elem.getBoundingClientRect();
  return box.top + scrollY;
}

function changePanelPosition() {
  const contentsBlock = document.querySelector('.page-content__contents-block');
  const isFixed = contentsBlock.classList.contains('page-content__contents-block_fixed');

  if (scrollY > getYCoord(contentsBlock) && !isFixed) {
    contentsBlock.classList.add('page-content__contents-block_fixed');
    return;
  }
  if (scrollY < getYCoord(contentsBlock) && isFixed) {
    contentsBlock.classList.remove('page-content__contents-block_fixed');
    return;
  }
}

if (window.matchMedia("(max-width: 768px)").matches) {
  window.addEventListener('scroll', changePanelPosition, { once: true });
}

window.addEventListener('resize', () => {
  if (window.matchMedia("(max-width: 768px)").matches) {
    window.addEventListener('scroll', changePanelPosition, { once: true });
  };
});

AOS.init();
