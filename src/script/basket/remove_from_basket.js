import {toggleEmptyBasket} from './add_to_basket';
import {showQtyBasket} from "./add_to_basket";
import {showTotalCost} from "./add_to_basket";


document.addEventListener('click', function (event) {
    const elemDel = event.target;
    if (!elemDel.classList.contains('delete')) {
        return;
    }
    const parentElDel = elemDel.parentElement;

    if (!parentElDel) {
        return;
    }
    let productId = parentElDel.getAttribute('data-product-id');
    window.cart.removeItem(productId);
    parentElDel.remove();

    showTotalCost();
    showQtyBasket();
    localStorage.setItem('cart', window.cart.getJsonData());
    toggleEmptyBasket();
});

document.addEventListener('click', function (event) {

    const elemClear = event.target;
    if (!elemClear.classList.contains('clear_basket')) {
        return;
    }
    const clearParent = elemClear.parentElement;
    const clearParentEl = clearParent.parentElement;
    const basketContainer = clearParentEl.querySelector('.basket_container');
    const childrenBasketContainer = basketContainer.querySelectorAll('.basket_item');
    if (childrenBasketContainer) {
        childrenBasketContainer.forEach((i) => {
            i.remove();
            window.cart.removeItems();

            showQtyBasket();
            showTotalCost();

            localStorage.clear();
            localStorage.setItem('cart', window.cart.getJsonData());
        })
    }
    toggleEmptyBasket();
});
