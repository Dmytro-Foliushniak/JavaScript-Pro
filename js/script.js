"use strict";

const globalProductFunction = function () {
    const parsedURL = new URLSearchParams(document.location.search)
    const nameArticle = parsedURL.get("article");
    const mainWrapper = document.querySelector('.main');

    // Создаем блок Каталог товаров
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

    // Создаем кнопку с нашими покупками
        const header = document.createElement('header')
        header.className = 'header'
        header.insertAdjacentHTML('beforeend', `<div class="order"><a class="order-link" href="?myOrder">Мої Замовлення</a></div>`)
        document.body.prepend(header)


    // Создаем блок с нашими покупками
    const createOrderDetail = function (){
        const orderProduct = JSON.parse(localStorage.getItem('DATA_ORDER'))

        const orderParam = document.location.search.substring(1)

        if (orderParam === 'myOrder'){
            catalog.remove()
            mainWrapper.style.justifyContent = 'center'
            mainWrapper.insertAdjacentHTML('beforeend', "<div class='order-box'><h2>Мої замовлення</h2></div>")
            const order = document.querySelector('.order-box')

            orderProduct.forEach((item,index)=>{
                order.insertAdjacentHTML('beforeend', `<div class="order-container" data-index="${index}"><p class="order-text">
            Ціна покупки: ${item.price}, Дата покупки: ${item['time']}</p>
            <button class="detail-order"><img class="detail-order-img" src="/image/icon/circle-down-regular.svg" alt="img"></button>
            <img class="delete-btn" src ='/image/icon/trash-can-regular.svg' alt="img">
            </div> `)
            })

            const orderBox = document.querySelector('.order-box')
            orderBox.addEventListener('click',(event)=>{
                deleteOrderProduct(orderProduct,event)
                getDetailOrder(orderProduct,event)
            })
        }
    }

    //Фунция для вывода доп информации о покупке
    const getDetailOrder = function (orderProduct,event){

            const getParentBox = event.target.closest('.order-container')

            if (event.target.className === 'detail-order-img' || event.target.className === 'order-text') {
                const getIndexOrder = event.target.closest('.order-container').getAttribute('data-index')
                orderProduct.forEach((item, index) => {
                    if (+getIndexOrder === index) {
                        if (!getParentBox.classList.contains('active')){
                            getParentBox.classList.add('active')
                            getParentBox.insertAdjacentHTML('afterend', `<div class="order-box-detail">
                            <p class="detail-text">Назва товару: ${item.name} <br/> Кількість:${item['CountProduct']} <br/> Ціна:${item.price} </p></div>`)
                        } else {
                            getParentBox.classList.remove('active')
                            getParentBox.nextSibling.remove()

                        }
                    }
                })
            }
    }

    //Фунция удаления с окно "Мої замовлення"
    const deleteOrderProduct = function (orderProduct,event){

            let getIndex = event.target.parentNode.getAttribute('data-index')

            if (event.target.className === 'delete-btn'){

                document.querySelector('.order-box-detail') ? event.target.parentNode.nextSibling.remove(): ''
                event.target.parentNode.remove()
                orderProduct.splice(getIndex,1)

                const orderContainer = document.querySelectorAll('.order-container')
                let getNewIndexInArray = []
                //Получаю обновленненный набор индексов
                orderProduct.forEach((item,index)=>{
                    getNewIndexInArray.push(index)
                })
                //Удаляю и вставляю в дата-индекс обновленные индексы елементов
                for (let i=0; i<orderContainer.length; i++){
                    orderContainer[i].removeAttribute('data-index')
                    orderContainer[i].setAttribute('date-index', getNewIndexInArray[i])
                }
                localStorage.setItem('DATA_ORDER', JSON.stringify(orderProduct))
            }
    }

    // Создаем функцию по получению продуктов из массива обьектов динамически для каждой категории
    const getProducts = function (productsArray) {
        const catalogName = parsedURL.get("name");
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


    // Создаем функцию для получения информации о продукте
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

    // Створити форму при кліку
    const getOrderForm = function (){
        const buttonBuy = document.querySelector('.buy')
        if (buttonBuy){
            buttonBuy.addEventListener('click', ()=>{createOrderForm()})
        }

    }

    //Создаем функцию по созданию формы для оформления покупки. Форма отображается после нажатия на кнопку "купить"
    const createOrderForm = function () {

        if (document.querySelector('.orderForm') !== null){
            const orderForm = document.querySelector('.orderForm')
            orderForm.remove()
        }

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
            <input type="number" name="CountProduct" id="count-product" required>
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

    // Создаем функцию для проверки на обязательное заполнение поле Форми. Работает после нажатия на кнопку "Оформити Замовлення".
    const formValidation = function (thisElement){

        if (thisElement.checkValidity()){
            validForm(thisElement,productsOfArray,nameArticle)

            addProductInLocalStorage()

        }else {
            invalidForm(thisElement)
        }
    }

    //Создаем функцию для вивода информации о заказаном продукте.

    // Добавляем продукт в локал сторенж.
    const addProductInLocalStorage = function (product){
        let data = [];

        const getItemProduct = localStorage.getItem('DATA_ORDER')
        const orderForm = JSON.parse(localStorage.getItem('DATA_FORM'))

        if (getItemProduct !== null){
                data = JSON.parse(getItemProduct)
        }
        productsOfArray.forEach(item=>{
            if (item.aboutProduct.article === nameArticle){
                Object.assign(item, orderForm)
                data.push(item)
            }
        })

        localStorage.setItem('DATA_ORDER', JSON.stringify(data))

        return data
    }

    createOrderDetail(productsOfArray)

    getProducts(productsOfArray);

    getInformationAboutProduct(productsOfArray);

    getOrderForm();
}

globalProductFunction()
