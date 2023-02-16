const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
let currentSlide = 0;

function showSlide() {
  slides.forEach(slide => {
    slide.classList.remove('active');
  });
  slides[currentSlide].classList.add('active');
}

showSlide();

prevButton.addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide();
});

nextButton.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide > slides.length - 1) {
    currentSlide = 0;
  }
  showSlide();
});
