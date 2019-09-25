let siemano = new Siema({
  draggable: false,
  loop: true
});

const logos = [
  'apart-fort',
  'amberlique',
  'active-park',
  'nowa',
  'bm4b',
  'mera',
  'broger',
  'hausky',
  'grafitowe',
  'eneroo',
  'molecularch',
  'genoscope',
  'limonka',
  'pole-empire',
  'neligo',
  'dpa',
  'bartosz-kocinski',
  'omero',
  'dobrzanski-team',
  'ev-animo',
  'hardinel',
  'biura-projektowe',
  'goc-communication',
  'stachnik'
];

const cardImages = document.querySelectorAll('.card');
const swiper = document.querySelector('.swiper-container');
const swiperBackground = document.querySelector('.swiper-background');
const closeButtons = document.querySelectorAll('.close-button');
const upButton = document.querySelector('.up');
const downButton = document.querySelector('.down');
const navigation = document.querySelector('.navigation');
const siema = document.querySelector('.siema');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

var mySwiper;

console.log(cardImages, swiper);

for (let [index, element] of cardImages.entries()) {
  element.addEventListener('mouseover', () => {
    if (
      element.firstElementChild.firstElementChild.classList.contains(
        'high-card-img'
      )
    ) {
      element.firstElementChild.firstElementChild.style.height = '100%';
      element.firstElementChild.firstElementChild.style.width = 'auto';
    }

    // element.firstElementChild.style.backgroundColor = '#49c2dd';
    element.firstElementChild.firstElementChild.src =
      'img/logos/' + logos[index] + '.png';

    element.firstElementChild.firstElementChild.style.transition =
      'all 2s ease';
    element.firstElementChild.firstElementChild.style.transform =
      'translate(-50%,-50%) scale(0.7)';
  });

  element.addEventListener('mouseout', () => {
    if (
      element.firstElementChild.firstElementChild.classList.contains(
        'high-card-img'
      )
    ) {
      element.firstElementChild.firstElementChild.style.height = 'auto';
      element.firstElementChild.firstElementChild.style.width = '100%';
    }
    // element.firstElementChild.style.backgroundColor = '#000';
    element.firstElementChild.firstElementChild.style.transition =
      'transform .3s';
    element.firstElementChild.firstElementChild.style.transform =
      'translate(-50%,-50%) scale(1)';
    element.firstElementChild.firstElementChild.src =
      'img/card-backgrounds/' + logos[index] + '.jpg';
  });

  element.addEventListener('click', () => {
    // swiper.classList.toggle('swiper-active');
    console.log('hahaha');
    siema.classList.toggle('siema-active');
    swiperBackground.classList.toggle('swiper-background-active');
    console.log(siema);
    siemano.goTo(index);
    // mySwiper.slideTo(index + 1, 10, true);
  });
}

swiperBackground.addEventListener('click', event => {
  console.log(event.target);
  if (event.target == swiperBackground) {
    // swiper.classList.toggle('swiper-active');

    siema.classList.toggle('siema-active');
    swiperBackground.classList.toggle('swiper-background-active');
  }
});

for (let closeButton of closeButtons) {
  closeButton.addEventListener('click', () => {
    siema.classList.toggle('siema-active');
    // swiper.classList.toggle('swiper-active');
    swiperBackground.classList.toggle('swiper-background-active');
  });
}

document.querySelector('.prev').addEventListener('click', () => siemano.prev());
document.querySelector('.next').addEventListener('click', () => siemano.next());

upButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
downButton.addEventListener('click', () => {
  window.scrollTo({ top: `${document.body.scrollHeight}`, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  if (window.scrollY >= window.innerHeight) {
    navigation.classList.add('block-display');
    upButton.classList.add('block-display');
    downButton.classList.add('block-display');
    console.log('yeyyeyeye');
  } else {
    navigation.classList.remove('block-display');
    upButton.classList.remove('block-display');
    downButton.classList.remove('block-display');
  }
});
