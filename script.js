// Для новостного слайдера
window.addEventListener('load', () => {
    console.log('Page loaded');
});

const sliderWrapper = document.querySelector('.slider-wrapper');
const newsItems = document.querySelectorAll('.news-item');
let currentIndex = 0;

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % newsItems.length;
    updateSlider();
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + newsItems.length) % newsItems.length;
    updateSlider();
});

function updateSlider() {
    const offset = -currentIndex * 100;
    sliderWrapper.style.transform = `translateX(${offset}%)`;
}

// Для боковой панели
function openSidebar() {
    document.getElementById('sidebar').classList.add('open');
}

function closeSidebar() {
    document.getElementById('sidebar').classList.remove('open');
}

// Добавим обработчики событий для закрытия меню при выборе раздела
const sidebarLinks = document.querySelectorAll('.sidebar ul li a');
sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeSidebar(); // Закрываем боковую панель при нажатии
    });
});

// Для галереи изображений
let currentImageIndex = 0;
const slides = document.querySelectorAll('.gallery-slide');

function showImage(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % slides.length;
    showImage(currentImageIndex);
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + slides.length) % slides.length;
    showImage(currentImageIndex);
}

// Изначально показываем первый слайд
showImage(currentImageIndex);
let slideIndexes = [0, 0, 0, 0]; // Добавьте четвертый индекс для четвертого слайдера
showSlides(0, 1);
showSlides(0, 2);
showSlides(0, 3);
showSlides(0, 4); // Добавьте вызов для четвертого слайдера

function plusSlides(n, sliderNum) {
    showSlides(slideIndexes[sliderNum - 1] += n, sliderNum);
}

function showSlides(n, sliderNum) {
    let i;
    let slides = document.getElementsByClassName("slide-" + sliderNum);
    if (n >= slides.length) {
        slideIndexes[sliderNum - 1] = 0; // Перейти к первому изображению
    }
    if (n < 0) {
        slideIndexes[sliderNum - 1] = slides.length - 1; // Перейти к последнему изображению
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Скрыть все изображения
    }
    slides[slideIndexes[sliderNum - 1]].style.display = "block"; // Показать текущее изображение
}


