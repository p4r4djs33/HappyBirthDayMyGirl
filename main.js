const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
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

function run() {

    if (index < slideImages.length - 1) {
        index++;
    } else {
        index = 0;
    }

    slideContainer.style.transform = `translateX(${-IMG_WIDTH * index}px)`;
}

let myInterval;
var audio = new Audio('http://docs.google.com/uc?export=open&id=1kU0kluHXjUtMXFLJPiwWdsECWdvveT48');
$('#run').addEventListener('click', () => {

    audio.play();
    audio.loop = true;
    myInterval = setInterval(() => {
        run();
    }, 3 * 1000);
    document.getElementById("run").disabled = true;
    document.getElementById("stop").disabled = false;
})
$('#stop').addEventListener('click', () => {
    audio.pause();
    clearInterval(myInterval);
    document.getElementById("run").disabled = false;
    document.getElementById("stop").disabled = true;
})

document.addEventListener('keyup', (e) => {
    if (e.code === "ArrowRight") next();
    else if (e.code === "ArrowLeft") prev();
});
