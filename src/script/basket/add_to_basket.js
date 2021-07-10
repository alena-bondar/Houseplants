let basketContainer = document.querySelector('.basket_container');

export function toggleEmptyBasket() {
    if (Object.keys(window.cart.items).length !== 0) {
        document.querySelector('.empty_basket').style.visibility = 'hidden';
        document.querySelector('.wrapper_total_cost').style.visibility = 'visible';
        document.querySelector('.clear_basket').disabled = false;
        //functional under development
        //document.querySelector('.send_order').disabled = false;
    } else {
        document.querySelector('.empty_basket').style.visibility = 'visible';
        document.querySelector('.wrapper_total_cost').style.visibility = 'hidden';
        document.querySelector('.clear_basket').disabled = true;
        //functional under development
        //document.querySelector('.send_order').disabled = true;
    }
}

window.cart = { //card
    items: {},  //create an empty item object
    totalQty: 0, //number of goods
    totalSum: 0,
    caclTotal: function () {
        this.totalSum = 0;
        this.totalQty = 0;
        for (let key in this.items) {
            let item = this.items[key];
            this.totalSum += (item.price * item.qty); //total cost
            this.totalQty += item.qty;
        }
        showTotalCost();
        showQtyBasket();
    },
    calcItemTotal(id) {
        return this.items[id].qty * this.items[id].price;
    },
    removeItem: function (id) {
        delete this.items[id];
        this.caclTotal();
    },
    removeItems: function () {
        this.items = {};
        this.caclTotal();
    },
    getJsonData: function () {

        return JSON.stringify(this.getData());
    },
    getData: function () {
        return {
            items: this.items,
            totalQty: this.totalQty,
            totalSum: this.totalSum,
        }
    },
    setDataFromJson(jsonData) {
        if (!jsonData) {
            return;
        }
        let cartData = JSON.parse(jsonData);
        for (let key in cartData.items) {
            let item = cartData.items[key];
            this.addItemToCart(item);
        }
    },
    addItemToCart(item) {
        if (this.items[item.id]) {
            this.items[item.id].qty++;
            let basketItemElement = document.querySelector(`[data-product-id="${item.id}"]`);
            let calculateElement = basketItemElement.querySelector('.calculation');
            calculateElement.innerHTML = window.cart.calcItemTotal(item.id);
            let count = basketItemElement.querySelector('.count');
            count.innerHTML = this.items[item.id].qty;
            this.caclTotal();
            return;
        }

        basketContainer.innerHTML +=
            `<div class="basket_item" data-product-id="${item.id}">
                <img src="${item.img}" alt="img">
                <h4 class="name">${item.name}</h4>
                <div class="wrapper_price">
                <p class="price">${item.price}</p><p>грн</p>
                </div>
              <div class="counter">
                <button class="increase">+</button>
                <div class="count">${item.qty}</div>
                <button class="decrease">-</button>
              </div>
              <div class="wrapper_calculation">
              <p class="calculation">${item.price * item.qty}</p><p>грн</p>
              </div>
              <a href="#" class="delete">Удалить</a>
        </div>`;

        this.items[item.id] = item;
        this.caclTotal();
    }
};
window.cart.setDataFromJson(localStorage.getItem('cart'))
document.addEventListener('click', function (event) {

    const elemAdd = event.target;

    if (!elemAdd.classList.contains('add_to_basket')) {
        return;
    }

    let id = elemAdd.getAttribute('data-id');
    let productData = products.find(function (product) {
        return product.id === id;
    })
    let item = {
        id: productData.id,
        price: productData.price,
        name: productData.name,
        img: productData.img,
        qty: 1,
    };

    window.cart.addItemToCart(item)

    if (window.cart.items[item.id]) {
        elemAdd.innerHTML = 'Товар в корзине';
        elemAdd.style.backgroundColor = '#ffffff';
        elemAdd.style.color = '#00ab84';
        elemAdd.style.border = '1px solid #00ab84';
    } else {
        elemAdd.innerHTML = 'В корзину';
        elemAdd.style.backgroundColor = '#00ab84';
        elemAdd.style.color = '#ffffff';
    }
    localStorage.setItem('cart', window.cart.getJsonData());
    toggleEmptyBasket();


});


export function showQtyBasket() {
    let qtyBasket = document.querySelector('.qty_basket');
    qtyBasket.innerHTML = window.cart.totalQty;
}

export function showTotalCost() {
    let totalCost = document.querySelector('.total_cost');
    totalCost.innerHTML = window.cart.totalSum;
}
