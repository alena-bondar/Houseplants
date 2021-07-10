export const iconMenu = document.querySelector('.menu_icon');
export const menuBody = document.querySelector('.menu_body');

if (iconMenu) {
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');

        const basket = document.querySelector('.basket');
        if (basket.style.display === 'block') {
            basket.style.display = 'none';
        }
    });
}