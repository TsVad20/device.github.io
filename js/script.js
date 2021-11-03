const modalLetter = document.querySelector('.modal-letter');
const modalMap = document.querySelector('.modal-map');
const letterButton = document.querySelector('.info-form-link');
const mapButton = document.querySelector('.map-link');

const modalCloseButton = document.querySelectorAll('.modal-close');
const letterForm = modalLetter.querySelector('.letter-form');
const nameInput = modalLetter.querySelector('.letter-input-name');
const emailInput = modalLetter.querySelector('.letter-input-email');

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem('name');
} catch (err) {
  isStorageSupport = false;
}

letterButton.addEventListener('click', (event) => {
  event.preventDefault();
  modalLetter.style.display = 'block';
  modalLetter.classList.add('modal-show');
  if (storage) {
    nameInput.value = storage;
    emailInput.focus();
  } else {
    nameInput.focus();
  }
});

mapButton.addEventListener('click', (event) => {
  event.preventDefault();
  modalMap.style.display = 'block';
  modalMap.classList.add('modal-show');
});

modalCloseButton.forEach((item) => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    modalLetter.style.display = 'none';
    modalMap.style.display = 'none';
    modalLetter.classList.remove('modal-error');
  });
});

letterForm.addEventListener('submit', function (event) {
  if (!nameInput.value || !emailInput.value) {
    event.preventDefault();
    modalLetter.classList.remove('modal-error');
    modalLetter.offsetWidth = modalLetter.offsetWidth;
    modalLetter.classList.add('modal-error');
  } else if (isStorageSupport) {
    localStorage.setItem('name', nameInput.value);
}
});

window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    if (modalLetter.style.display = 'block') {
      event.preventDefault();
      modalLetter.style.display = 'none';
      modalLetter.classList.remove('modal-error');
    }
  }
});

window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    if (modalMap.style.display = 'block') {
      event.preventDefault();
      modalMap.style.display = 'none';
    }
  }
});

// Sliders handlers

function getSlideIndex (href) {
  return href.replace(/[\D]+/g, '') - 1;
}

function switchSlides (slides, switchers, switcher) {
  let currentIndex = [...slides].findIndex(slide => slide.matches('.slide-item-current'));
  switchers[currentIndex].classList.remove('pagination-link-active');
  slides[currentIndex].classList.remove('slide-item-current');

  let selectedIndex = getSlideIndex(switcher.getAttribute('href'));
  switchers[selectedIndex].classList.add('pagination-link-active');
  slides[selectedIndex].classList.add('slide-item-current');
}

// Products Slider

const productSlides = document.querySelectorAll('.slide-item');
const dots = document.querySelectorAll('.pagination-link');
const dotsBlock = document.querySelector('.pagination');

dotsBlock.addEventListener('click', (event) => {
  let switcher = event.target;
  if (switcher.matches('.pagination-link')) {
    event.preventDefault();
    switchSlides(productSlides, dots, switcher);
  }
});

// Services Slider

const serviceSlides = document.querySelectorAll('.advantage-item');
const linksBlock = document.querySelector('.advantage-pagination');
const links = linksBlock.querySelectorAll('.advantage-link');

linksBlock.addEventListener('click', (event) => {
  let switcher = event.target.closest('.advantage-link');
  console.log(switcher)
  if (switcher.matches('.advantage-link')) {
    event.preventDefault();
    switchSlides(serviceSlides, links, switcher);
  }
});
