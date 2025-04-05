document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section"); // Все секции с id
    const navLinks = document.querySelectorAll(".header__nav-link"); // Все ссылки в навигации
  
    function setActiveLink() {
      let currentSection = "";
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100; // Смещение для точности
        const sectionHeight = section.clientHeight;
  
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute("id");
        }
      });
  
      navLinks.forEach((link) => {
        link.classList.remove("active"); // Убираем класс у всех ссылок
  
        if (link.getAttribute("href") === `#${currentSection}`) {
          link.classList.add("active"); // Добавляем только нужной
        }
      });
    }
  
    window.addEventListener("scroll", setActiveLink);
  });
  

// Добавьте этот JavaScript перед закрывающим тегом </body>
const hamb = document.querySelector(".header__burger");
const popup = document.querySelector(".header__nav");
const body = document.body;

// Бургер при клике
hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle("active");
  hamb.classList.toggle("active");
  body.classList.toggle("no-scroll");
}

// Закрытие меню при клике на ссылку
const links = Array.from(popup.querySelectorAll("a"));

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  popup.classList.remove("active");
  hamb.classList.remove("active");
  body.classList.remove("no-scroll");
}






  
document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.slider-container');
  const slides = document.querySelectorAll('.slider-slide');
  const dots = document.querySelectorAll('.slider-dot');
  const prevBtn = document.querySelector('.slider-prev');
  const nextBtn = document.querySelector('.slider-next');
  let currentIndex = 0;
  
  function updateSlider() {
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
      
      // Обновляем индикаторы
      dots.forEach((dot, index) => {
          dot.classList.toggle('active', index === currentIndex);
      });
      
      // Управление видимостью кнопок
      if (currentIndex === 0) {
          prevBtn.style.display = 'none'; // Скрываем на первом слайде
      } else {
          prevBtn.style.display = 'flex'; // Показываем на других слайдах
      }
      
      if (currentIndex === slides.length - 1) {
          nextBtn.style.display = 'none'; // Скрываем на последнем слайде (если нужно)
      } else {
          nextBtn.style.display = 'flex'; // Показываем на других слайдах
      }
  }
  
  // Инициализация - скрываем prevBtn на первом слайде
  updateSlider();
  
  // Переключение по стрелкам
  nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlider();
  });
  
  prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlider();
  });
  
  // Переключение по точкам
  dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
          currentIndex = index;
          updateSlider();
      });
  });
  
  // Переключение клавиатурой
  document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
          currentIndex = (currentIndex + 1) % slides.length;
          updateSlider();
      } else if (e.key === 'ArrowLeft') {
          currentIndex = (currentIndex - 1 + slides.length) % slides.length;
          updateSlider();
      }
  });
});

