const button = document.querySelector('.header__btn');
const close = document.querySelector('.rightside-menu__close');
const rightsideMenu = document.getElementById('rightside-menu');

button.addEventListener('click', () => {
  rightsideMenu.classList.remove('rightside-menu--close');
});
close.addEventListener('click', () => {
  rightsideMenu.classList.add('rightside-menu--close');
});

$('.header__btn-menu').on('click', () => {
  $('.menu').toggleClass('menu--open');
});

$('.contact-slider').slick({
  slidesToShow: 10,
  slidesToScroll: 10,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1700,
      settings: {
        slidesToShow: 8,
        slidesToScroll: 8,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1511,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6
      }
    },
    {
      breakpoint: 1201,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    }
  ]
});
$('.top__slider').slick({
  dots: true,
  arrows: false,
  fade: true,
  autoplay: true,
});
$('.article-slider__box').slick({
  prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrow-left"><img src="img/arrow-slide-left.svg" alt=""></button>',
  nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrow-right"><img src="img/arrow-slide-right.svg" alt=""></button>',
});

const mixer = mixitup('.gallery__inner', {
  load: {
    filter: '.category-living',
  },
});