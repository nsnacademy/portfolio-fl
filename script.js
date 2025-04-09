// Отслеживание активного раздела при прокрутке страницы (плавное выделение активной ссылки в навигации)
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".header__nav-link");

  function setActiveLink() {
    let currentSection = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${currentSection}`);
    });
  }

  window.addEventListener("scroll", () => requestAnimationFrame(setActiveLink));
  setActiveLink();
});


// Меню-бургер (открытие и закрытие при клике)
const hamb = document.querySelector(".header__burger");
const popup = document.querySelector(".header__nav");
const body = document.body;

hamb.addEventListener("click", (e) => {
  e.preventDefault();
  popup.classList.toggle("active");
  hamb.classList.toggle("active");
  body.classList.toggle("no-scroll");
});

popup.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    popup.classList.remove("active");
    hamb.classList.remove("active");
    body.classList.remove("no-scroll");
  });
});



// Слайдер (переключение слайдов с кнопками и точками)
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider-container");
  const slides = document.querySelectorAll(".slider-slide");
  const dots = document.querySelectorAll(".slider-dot");
  const prevBtn = document.querySelector(".slider-prev");
  const nextBtn = document.querySelector(".slider-next");
  let currentIndex = 0;

  if (slider && slides.length) {
    function updateSlider() {
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;

      dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
      });

      prevBtn.style.display = currentIndex === 0 ? "none" : "flex";
      nextBtn.style.display = currentIndex === slides.length - 1 ? "none" : "flex";
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
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        currentIndex = (currentIndex + (e.key === "ArrowRight" ? 1 : -1) + slides.length) % slides.length;
        updateSlider();
      }
    });
  }
});



// Анимация появления элементов при скролле
document.addEventListener("DOMContentLoaded", () => {
  const animateOnScroll = (selector = ".pricing-card") => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
      if (elementPosition < screenPosition) {
        element.style.opacity = "1";
        element.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", () => requestAnimationFrame(() => animateOnScroll()));
  animateOnScroll();
});



// Анимация процесса работы
document.querySelectorAll('.step-header').forEach(header => {
  header.addEventListener('click', () => {
    const step = header.closest('.process-step');
    const isActive = step.classList.contains('active');

    document.querySelectorAll('.process-step.active').forEach(openStep => {
      if (openStep !== step) {
        openStep.classList.remove('active');
        openStep.querySelector('.step-toggle').setAttribute('aria-expanded', 'false');
      }
    });

    step.classList.toggle('active', !isActive);
    const toggleButton = step.querySelector('.step-toggle');
    toggleButton.setAttribute('aria-expanded', String(!isActive));
  });
});



// Кнопка "Вернуться наверх"
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  backToTopButton.classList.toggle('visible', window.pageYOffset > 300);
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});



// Переключение темы
document.getElementById('themeToggle').addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-theme');
});
