document.addEventListener('click', function (event) {
    const elemShowMore = event.target;
    if (!elemShowMore.classList.contains('show_more')) {
        return;
    }
    const parent = elemShowMore.parentElement;
    const more = parent.querySelector('.more');
    const dots = parent.querySelector('.dots');

    if (dots.style.display === 'none') {
        dots.style.display = 'inline';
        elemShowMore.innerHTML = 'Показать больше';
        more.style.display = 'none';
    } else {
        dots.style.display = 'none';
        elemShowMore.innerHTML = 'Скрыть';
        more.style.display = 'inline';
    }

});
