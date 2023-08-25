

const createTable = function (countTR, countTD){
    const tableContainer = document.querySelector('.table-box');
    const table = document.createElement('table');
    table.setAttribute('class', 'table')
    tableContainer.prepend(table);

    for (let i = 0; i < countTR; i++){
        table.innerHTML += `<tr class="tr"></tr>`
        let tr = document.querySelectorAll('tr')
        let sum = 0
        for (let j = 0; j < countTD; j++){
            tr[i].innerHTML += `<td class="td">${sum +=i+1}</td>`
        }
    }

}

createTable(10,10)