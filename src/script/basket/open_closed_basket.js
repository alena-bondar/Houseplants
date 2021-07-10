import {toggleEmptyBasket} from './add_to_basket';

const basket = document.querySelector('.basket');
const closeBasket = document.querySelector('.close_basket');

closeBasket.onclick = function () {
    document.querySelector('body').style.overflow = 'visible';
    basket.style.display = 'none';
}

const openBasket = document.querySelector('.open_basket');

openBasket.onclick = function () {
    basket.style.display = 'block';

    document.querySelector('body').style.overflow = 'hidden';

    const iconMenu = document.querySelector('.menu_icon');
    const menuBodyActive = document.querySelector('.menu_body');

    if (menuBodyActive.classList.contains('_active')) {
        document.body.classList.remove('_lock');
        menuBodyActive.classList.toggle('_active');
        iconMenu.classList.toggle('_active');
    }
    toggleEmptyBasket();

}


