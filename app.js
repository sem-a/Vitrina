const products = [
    {
        id: 1,
        title: 'Lenovo Yoga',
        price: 3000,
    },
    {
        id: 2,
        title: 'Acer Aspire',
        price: 1800,
    },
    {
        id: 3,
        title: 'Dell Vostro',
        price: 3400
    },
];

let order = [];

function addToBasket(productId) {
    // TODO: добавить проверку наличия товара в заказе (при наличии выдать alert, что товар уже в корзине)
    // TODO: если товар еще не в корзине, добавить его из массива products
    let productTemp;
    for (let i = 0; i < products.length; i++) {
        if(products[i].id == productId) {
            productTemp = products[i];
        }
    }
    if(order.lenght == 0) {
        order.push(productTemp);
    } else {
        for (let i = 0; i < order.length; i++) {
            if(order[i].id == productTemp.id) {
                alert(`${order[i].title} уже есть в корзине`);
                return;
            }
        }
        order.push(productTemp);
    }
    // Эти строчки не трогаем, они отвечают за переотрисовку страницы
    renderCart();
    rerenderTotalPrice();
}

function removeFromBasket(productId) {
    // TODO: описать логику удаления товара из корзины
    for (let i = 0; i < order.length; i++) {
        if(order[i].id == productId) {
            order.splice(i, 1);
        }
    }
    // Эти строчки не трогаем, они отвечают за переотрисовку страницы
    renderCart();
    rerenderTotalPrice();
}


function rerenderTotalPrice() {
    // TODO: опишите функционал подсчета общей стоимости заказа
    if (order.length == 0) {
        totalPrice = 0;
    } else {
        totalPrice = 0;
        for (let i = 0; i < order.length; i++) {
            totalPrice += order[i].price;          
        }
    }
    // Не меняйте эту строчку
    document.getElementById('total').innerText = totalPrice;
}

// Этот метод остается без изменений
function renderCart() {
    const cart = document.getElementById('basket-items');
    cart.innerHTML = '';
    order.forEach(item => {
        const el = document.createElement('li');
        el.innerText = item.title;
        el.onclick = () => removeFromBasket(item.id);
        cart.appendChild(el);
    })
}