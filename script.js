document.addEventListener("DOMContentLoaded", function () {
  const circles = document.querySelectorAll('.circle');
  const lines = document.querySelectorAll('.line');
  const nextButton = document.getElementById('next');
  const prevButton = document.getElementById('prev');
  
  let currentActiveIndex = 0;

  function updateButtonStates() {
    if (currentActiveIndex === 0) {
      prevButton.disabled = true;
    } else {
      prevButton.disabled = false;
    }

    if (currentActiveIndex === circles.length - 1) {
      nextButton.disabled = true;
    } else {
      nextButton.disabled = false;
    }
  }

  function updateActiveCircle() {
    circles.forEach((circle, index) => {
      circle.classList.remove('active');
      if (index < circles.length - 1) {
        lines[index].classList.remove('active');
      }
    });

    circles[currentActiveIndex].classList.add('active');
    if (currentActiveIndex > 0) {
      for (let i = 0; i < currentActiveIndex; i++) {
        lines[i].classList.add('active');
      }
    }

    updateButtonStates();
  }

  nextButton.addEventListener('click', function () {
    if (currentActiveIndex < circles.length - 1) {
      currentActiveIndex++;
      updateActiveCircle();
    }
  });

  prevButton.addEventListener('click', function () {
    if (currentActiveIndex > 0) {
      currentActiveIndex--;
      updateActiveCircle();
    }
  });

  updateActiveCircle();
});
