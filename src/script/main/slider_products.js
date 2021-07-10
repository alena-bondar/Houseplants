let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let images = document.querySelectorAll('.plant');
let i = 0;

if (prev) {
    prev.onclick = function () {
        images[i].classList.remove('showed');
        i--;
        if (i < 0) {
            i = images.length - 1;
        }
        images[i].classList.add('showed');
    };

}
if (next) {
    next.onclick = function () {
        images[i].classList.remove('showed');
        i++;
        if (i >= images.length) {
            i = 0;
        }
        images[i].classList.add('showed');
    };
}
