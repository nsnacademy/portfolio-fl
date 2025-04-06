// Отслеживание активного раздела при прокрутке страницы (плавное выделение активной ссылки в навигации)
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".header__nav-link");

  function setActiveLink() {
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");

      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", setActiveLink);
});




// Меню-бургер (открытие и закрытие при клике)
const hamb = document.querySelector(".header__burger");
const popup = document.querySelector(".header__nav");
const body = document.body;

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("active");
  hamb.classList.toggle("active");
  body.classList.toggle("no-scroll");
}

const links = Array.from(popup.querySelectorAll("a"));

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  popup.classList.remove("active");
  hamb.classList.remove("active");
  body.classList.remove("no-scroll");
}




//Слайдер (переключение слайдов с кнопками и точками):
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider-container");
  const slides = document.querySelectorAll(".slider-slide");
  const dots = document.querySelectorAll(".slider-dot");
  const prevBtn = document.querySelector(".slider-prev");
  const nextBtn = document.querySelector(".slider-next");
  let currentIndex = 0;

  function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });

    if (currentIndex === 0) {
      prevBtn.style.display = "none"; 
    } else {
      prevBtn.style.display = "flex"; 
    }

    if (currentIndex === slides.length - 1) {
      nextBtn.style.display = "none"; 
    } else {
      nextBtn.style.display = "flex"; 
    }
  }

  updateSlider();

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateSlider();
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlider();
    } else if (e.key === "ArrowLeft") {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlider();
    }
  });
});




//Анимация появления элементов при скролле
document.addEventListener("DOMContentLoaded", () => {
  const animateOnScroll = () => {
    const cards = document.querySelectorAll(".pricing-card");
    cards.forEach((card) => {
      const cardPosition = card.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;

      if (cardPosition < screenPosition) {
        card.style.opacity = "1";
      }
    });
  };

  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll(); 
});


// Анимация просмотра процесса работы
document.querySelectorAll('.step-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const step = button.closest('.process-step');
    const isActive = step.classList.contains('active');
    
    document.querySelectorAll('.process-step.active').forEach(openStep => {
      if (openStep !== step) {
        openStep.classList.remove('active');
        openStep.querySelector('.step-toggle').setAttribute('aria-expanded', 'false');
      }
    });
    
    step.classList.toggle('active', !isActive);
    button.setAttribute('aria-expanded', String(!isActive));
  });
});