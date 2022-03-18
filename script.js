const carouselContainer = document.querySelector('.carousel-container');
const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide > img');

//btns
const prev = document.getElementById('prev');
const next = document.getElementById('next');

const size = carouselContainer.clientWidth;

console.log(size);

let counter = 1;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

prev.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = 'transform 0.7s ease-in-out';
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

next.addEventListener('click', () => {
    if (counter >= images.length - 1) return;
    carouselSlide.style.transition = 'transform 0.7s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
    carouselSlide.style.transition = 'none';

    if (images[counter].id === 'firstClone') {
        counter = 1;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if (images[counter].id === 'lastClone') {
        counter = images.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});



