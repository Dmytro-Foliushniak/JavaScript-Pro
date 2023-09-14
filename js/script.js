
const someArray = [1,2,[1.1,1.2,1.3],3]
const generateList = function (array){

    const ulElement = document.createElement('ul')

    array.forEach(item=>{
        if (typeof item === 'number'){
            ulElement.insertAdjacentHTML('beforeend', `<li>${item}</li>`)
        }

        if (Array.isArray(item)){
            const liElement = document.createElement('li')
            liElement.innerHTML = '<ul></ul>'
            ulElement.append(liElement)
            item.forEach(item=>{
                liElement.lastElementChild.insertAdjacentHTML('beforeend', `<li>${item}</li>`)
            })
        }
    })

    document.querySelector('.main').append(ulElement)
}

generateList(someArray)