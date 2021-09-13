
const IMG_WIDTH = 600;
const slideContainer = $('.slides');
const slideImages = [...$$('.slide')];

slideContainer.style.width = `${slideImages.length * IMG_WIDTH}px`;

let index = 0;

function next() {

    if (index < slideImages.length - 1) {
        index++;
    } else {
        index = 0;
    }

    slideContainer.style.transform = `translateX(${-IMG_WIDTH * index}px)`;
}

function prev() {

    if (index === 0) {
        index = slideImages.length - 1;
    } else {
        index--;
    }

    slideContainer.style.transform = `translateX(${-IMG_WIDTH * index}px)`;
}

$('#next').addEventListener('click', () => {
    next();
})

$('#prev').addEventListener('click', () => {
    prev();
})

let myInterval;
var audio = new Audio('http://docs.google.com/uc?export=open&id=1XB9Z1vJcJjpZ5mbtSl7J958VZtMI34RM');

$('#run').addEventListener('click', () => {

    audio.play();
    myInterval = setInterval(() => {
        next();

    }, 2 * 1000);
})
$('#stop').addEventListener('click', () => {
    audio.pause();
    clearInterval(myInterval);
})

document.addEventListener('keyup', (e) => {
    if (e.code === "ArrowRight") next();
    else if (e.code === "ArrowLeft") prev();
});
