

const createTable = function (countTR, countTD){
    const tableContainer = document.querySelector('.table-box');
    const table = document.createElement('table');
    table.setAttribute('class', 'table')
    tableContainer.prepend(table);

    for (let i = 0; i < countTR; i++){
        let tr = document.createElement("tr")
        tr.className = 'tr'
        for (let j = 0; j < countTD; j++){
            const td = document.createElement('td')
            td.className = 'td'
            td.textContent = `${i * countTD + j + 1}`
            tr.append(td)
        }
        table.append(tr)
    }
}


createTable(10,10)