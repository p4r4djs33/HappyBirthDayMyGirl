
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

$('#run').addEventListener('click', () => {
    myInterval = setInterval(() => {
        next();

    }, 1 * 1000);
})
$('#stop').addEventListener('click', () => {
    clearInterval(myInterval);
})

document.addEventListener('keyup', (e) => {
    if (e.code === "ArrowRight") next();
    else if (e.code === "ArrowLeft") prev();
});