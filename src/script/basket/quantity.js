import {showQtyBasket} from "./add_to_basket";

document.addEventListener('click', function (event) {
    //get target element
    const elemQuantity = event.target;
    //if it contains a class 'increase', then continue
    if (!elemQuantity.classList.contains('increase')) {
        return;
    }
    //looking for a parent element
    let counterElement = elemQuantity.parentElement;
    //find the element count in the parent
    let count = counterElement.querySelector('.count');
    if (!count) {
        return;
    }
    //if not, we go up to the next parent
    let basketItemElement = counterElement.parentElement;
    let productId = basketItemElement.getAttribute('data-product-id');
    count.innerHTML = ++window.cart.items[productId]['qty'];
    window.cart.caclTotal();
    let calculateElement = basketItemElement.querySelector('.calculation');
    let price = basketItemElement.querySelector('.price');

    calculateElement.innerHTML = count.innerText * Number(price.innerText);

    let totalCost = document.querySelector('.total_cost');
    totalCost.innerHTML = window.cart.totalSum;

    showQtyBasket();

    localStorage.setItem('cart', window.cart.getJsonData());
});

document.addEventListener('click', function (event) {

    const elemQuantity = event.target;
    if (!elemQuantity.classList.contains('decrease')) {
        return;
    }

    let counterElement = elemQuantity.parentElement;
    let count = counterElement.querySelector('.count');
    if (!count) {
        return;
    }

    let basketItemElement = counterElement.parentElement;
    let productId = basketItemElement.getAttribute('data-product-id');
    let qty = window.cart.items[productId]['qty'];
    qty--;
    if (qty < 1) {
        return;
    }
    window.cart.items[productId]['qty'] = qty;
    window.cart.caclTotal();

    count.innerHTML = qty;

    let calculateElement = basketItemElement.querySelector('.calculation');

    let price = basketItemElement.querySelector('.price');

    calculateElement.innerHTML = count.innerText * Number(price.innerText);

    let totalCost = document.querySelector('.total_cost');
    totalCost.innerHTML = window.cart.totalSum;

    showQtyBasket()
    localStorage.setItem('cart', window.cart.getJsonData());

});


