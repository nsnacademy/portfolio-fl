// Отслеживание активного раздела при прокрутке страницы (плавное выделение активной ссылки в навигации)
document.addEventListener("DOMContentLoaded", () => {
  const sections = Array.from(document.querySelectorAll("section"));
  const navLinks = Array.from(document.querySelectorAll(".header__nav-link"));
  
  let currentSection = null;

  // Использование функции requestAnimationFrame для анимаций
  const setActiveLink = () => {
    const scrollY = window.scrollY;
    let activeSection = null;

    for (const section of sections) {
      const { offsetTop, clientHeight, id } = section;
      if (scrollY >= offsetTop - 100 && scrollY < offsetTop + clientHeight) {
        activeSection = id;
        break;
      }
    }

    if (activeSection !== currentSection) {
      currentSection = activeSection;
      navLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === `#${currentSection}`);
      });
    }
  };

  // Использование requestAnimationFrame для уменьшения нагрузки на основной поток
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

// Используем делегирование событий для ссылок внутри меню
popup.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    popup.classList.remove("active");
    hamb.classList.remove("active");
    body.classList.remove("no-scroll");
  }
});

// Слайдер (переключение слайдов с кнопками и точками)
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider-container");
  const slides = Array.from(document.querySelectorAll(".slider-slide"));
  const dots = Array.from(document.querySelectorAll(".slider-dot"));
  const prevBtn = document.querySelector(".slider-prev");
  const nextBtn = document.querySelector(".slider-next");
  let currentIndex = 0;

  const updateSlider = () => {
    const transformValue = `translateX(-${currentIndex * 100}%)`;
    slider.style.transform = transformValue;
    dots.forEach((dot, index) => dot.classList.toggle("active", index === currentIndex));
    prevBtn.style.display = currentIndex === 0 ? "none" : "flex";
    nextBtn.style.display = currentIndex === slides.length - 1 ? "none" : "flex";
  };

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

  updateSlider();
});

// Анимация появления элементов при скролле
document.addEventListener("DOMContentLoaded", () => {
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(".pricing-card");
    const screenPosition = window.innerHeight / 1.2;
    
    elements.forEach(element => {
      const { top } = element.getBoundingClientRect();
      if (top < screenPosition) {
        element.style.opacity = "1";
        element.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", () => requestAnimationFrame(animateOnScroll));
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
const toggleBtn = document.getElementById('themeToggle');
toggleBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-theme');
});
