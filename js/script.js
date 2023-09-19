"use strict";

const globalProductFunction = function () {

    const nameArticle = new URLSearchParams(document.location.search).get("article");
    const mainWrapper = document.querySelector('.main');

    const getCatalog = function () {
        const catalog = document.createElement('aside');
        catalog.className = 'aside';
        mainWrapper.append(catalog);

        catalog.innerHTML =
            `<h2>Категорії товарів</h2>
        <ul class="lists">
            <li class="item-lists"><a class="nav-link" href="?name=all-tv">Телевізори</a></li>
            <li class="item-lists"><a class="nav-link" href="?name=notebooks">Ноутбуки</a></li>
            <li class="item-lists"><a class="nav-link" href="?name=mobile-phones">Смартфони</a></li>
            <li class="item-lists"><a class="nav-link" href="?name=tablets">Планшети</a></li>
            <li class="item-lists"><a class="nav-link" href="?name=monitors">Монітори</a></li>
        </ul>`
    }

    const getProducts = function (productsArray) {
        const catalogName = new URLSearchParams(document.location.search).get("name");
        if (!catalogName) {
            return;
        }

        const products = document.createElement('div');
        products.className = 'products';

        let list = "";
        productsArray.filter(product => catalogName === product.source).forEach(item => {
            list += `<div class = "product-box">
            <a class="product-link" href='?name=${catalogName}&article=${item.aboutProduct.article}'>
            <img class = "product-image" src ='${item.image}' alt="img">
            </a>
            <p class = "name-product">${item.name}</p>
            <p class="price-product">${item.price}</p>
            </div>`
        });
        products.innerHTML = list;

        mainWrapper.append(products);
    };

    const getInformationAboutProduct = function (itemArray) {
        if (!nameArticle) {
            return;
        }

        const itemProduct = document.createElement('div');
        itemProduct.className = 'itemProduct';

        let list = "";
        itemArray.filter(product => nameArticle === product.aboutProduct.article).forEach(item => {
            list += `<div class = 'item-box'>
        <img class = 'item-image' src='${item.image}' alt="img" >
        </div>
        <h2>Опис Товару</h2>
        <p class="item-description">${item.aboutProduct.description}</p>
        <span class="item-price">${item.price}</span>
        <button class="buy" type="button">Купити</button>
        `;
        });
        itemProduct.innerHTML = list;
        mainWrapper.append(itemProduct);
    };

    const getOrderForm = function (){
        const buttonBuy = document.querySelector('.buy')
        if (buttonBuy){
            buttonBuy.addEventListener('click', ()=>{createOrderForm()})
        }

    }


    const createOrderForm = function () {

        if (document.querySelector('.orderForm') !== null){
           const orderForm = document.querySelector('.orderForm')
            orderForm.remove()
        }

        // const buttonBuy = document.querySelector('.buy')
        mainWrapper.insertAdjacentHTML('beforeend', `<form novalidate class="orderForm">
            <div class="block-form">
            <label for="fullName" class="pib">Прізвище Ім'я по Батькові</label>
            <input type="text" id="fullName" name="fullName" class="input-pib" required>
            <select name="city" id="">
            <option value="Kyiv">Київ</option>
            <option value="Lviv">Львів</option>
            <option value="Odessa">Одеса</option>
            <option value="Charkiv">Харків</option>
            <option value="Ternopil">Тернопіль</option>
            <option value="Rivne">Рівне</option>
            <option value="Cherson">Херсон</option>
            <option value="Dnipro">Дніпро</option>
            <option value="Vinnytsia">Вінниця</option>
            </select>
            <label for="warehouse" class="label-warehouse">Склад нової пошти для надсилання</label>
            <input type="text" id="warehouse" name="warehouse" class="input-warehouse" required>
            <label class="radio" for="after-receiving">Післяплата</label>
            <input class="radio" type="radio" name="optionsPay" id="after-receiving" value="afterReceiving">
            <label class="radio" for="bank-card-payment">Оплата банківською картою</label>
            <input class="radio" type="radio" name="optionsPay" id="bank-card-payment" value="bankCardPayment">
            <label for="count-product">Кількість товару</label>
            <input type="number" name="CountProduct" id="count-product">
            <label for="order-description">Комментарій до замовлення</label>
            <textarea name="orderDescription" id="order-description" cols="30" rows="10"></textarea>
            <input class="checkoutButton" type="submit" value="Оформити замовлення">
            </div>
        </form>`)

        const orderForm = document.querySelector('.orderForm')

        window.scrollTo(0, 0);
        orderForm.addEventListener('submit', function (event) {
            event.preventDefault()
            formValidation(this)
        })
    }

    const formValidation = function (thisElement){

        const fullName = document.querySelector('.input-pib')
        const warehouse = document.querySelector('.input-warehouse')

        if (fullName.validity.valid && warehouse.validity.valid){
            validForm(thisElement.elements,productsOfArray,nameArticle)
        }
        if (!fullName.validity.valid || !warehouse.validity.valid){
            invalidForm(thisElement.elements)
        }

        console.log(thisElement)
    }

    getCatalog();

    getProducts(productsOfArray);

    getInformationAboutProduct(productsOfArray);

    getOrderForm()
}

globalProductFunction()
