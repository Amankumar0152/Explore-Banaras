document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.ms-slide');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const indicators = document.querySelectorAll('.ms-indicator');
  let currentSlide = 0;
  let touchStartX = 0;
  let touchEndX = 0;
  const slider = document.querySelector('.modern-slider');

  // Initialize slider
  showSlide(currentSlide);

  // Next button - loops to first after last
  nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  // Previous button - loops to last after first
  prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  // Indicator clicks
  indicators.forEach(indicator => {
    indicator.addEventListener('click', function() {
      currentSlide = parseInt(this.getAttribute('data-slide'));
      showSlide(currentSlide);
    });
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextBtn.click();
    if (e.key === 'ArrowLeft') prevBtn.click();
  });

  // Touch events for mobile
  slider.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, {passive: true});

  slider.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, {passive: true});

  function handleSwipe() {
    if (touchEndX < touchStartX - 50) nextBtn.click(); // Swipe left
    if (touchEndX > touchStartX + 50) prevBtn.click(); // Swipe right
  }

  function showSlide(index) {
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Update indicators
    indicators.forEach(ind => ind.classList.remove('active'));
    
    // Show current slide
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
  }
});