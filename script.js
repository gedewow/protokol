var delay = 3000; // Задержка перед скроллом в миллисекундах
var carousel = $('#carousel');
var cards = $('.card');
var cardCount = cards.length;
var currentIndex = 0;

function scrollCarousel() {
    currentIndex = (currentIndex + 1) % cardCount;
    carousel.scrollLeft(currentIndex * carousel.width());
}

setInterval(scrollCarousel, delay);

$('#prev').click(function() {
    currentIndex = (currentIndex - 1 + cardCount) % cardCount;
    carousel.scrollLeft(currentIndex * carousel.width());
});

$('#next').click(function() {
    currentIndex = (currentIndex + 1) % cardCount;
    carousel.scrollLeft(currentIndex * carousel.width());
});