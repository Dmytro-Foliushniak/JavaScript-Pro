const validForm = function (thisElement, productsOfArray, nameArticle){
    const orderMassage = document.createElement('div')
    const mainWrapper = document.querySelector('.main');
    orderMassage.className = 'massage'

    let orderText = ''

    const checkButton = document.querySelector('.checkoutButton')

    const data = {}

    for (let element of thisElement.elements) {
        if (element.value !== ''){
            if (element.checked) {
                data[element.name] = element.value
            }
            if (element.type !== 'radio' && element.type !== 'submit') {
                data[element.name] = element.value
                data['time'] = new Date().toISOString()
            }
            localStorage.setItem('DATA_FORM', JSON.stringify(data))

            productsOfArray.forEach(item=>{
                if (item.aboutProduct.article === nameArticle){
                    orderText = `<p>${data['fullName']} Ви замовили ${item.name} по ціні ${item.price} на відділенна ${data['warehouse']}</p>`
                }
            })
            orderMassage.innerHTML = orderText
            mainWrapper.append(orderMassage)
            checkButton.setAttribute('disabled', 'true')
        }
    }
}


const invalidForm = function (thisElement){
    const errorMassage = document.createElement('div');
    errorMassage.className = "massage";

    let errorText = ''

    for (let element of thisElement.elements) {
        if (element.validity.valueMissing) {
            errorText += `<p>Заповніть будь-ласка поле: ${element.name}</p>`;
        }
        errorMassage.innerHTML = errorText
        document.querySelector('.main').append(errorMassage);
        errorMassage.insertAdjacentHTML('beforeend', `<input class="buttonFromErrorForm" type="button" value="OK" >`)
        const buttonFromErrorMassage = document.querySelector('.buttonFromErrorForm')
        buttonFromErrorMassage.addEventListener('click', () => {
            errorMassage.remove()
        })
    }
}
