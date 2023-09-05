const getParamRequest = function (){
    const form = document.querySelector('.form')
    form.addEventListener('submit', (event)=>{
        event.preventDefault();

        const table = document.createElement('table');
        table.className = 'table';
        document.body.append(table);

        const trForHead = document.createElement('tr');
        table.append(trForHead);

        const trForBody = document.createElement('tr');
        table.append(trForBody);

        const setNameLanguage = new Set;
        const setValueLanguage = new Set;

        for (let param of form.elements){

                if ((param.value !== undefined) && !param.hasAttribute('data-off')){
                    trForHead.insertAdjacentHTML("beforeend", `<th class="table-head">${param.name}</th>`);
                    trForBody.insertAdjacentHTML("beforeend", `<td class="table-content">${param.value}</td>`);
                }

                if (param.checked){

                    if (param.name !== 'language'){
                        trForHead.insertAdjacentHTML("beforeend", `<th class="table-head">${param.name}</th>`);
                        trForBody.insertAdjacentHTML("beforeend", `<td class="table-content">${param.value}</td>`);
                    }

                     if (param.name === 'language'){
                         setNameLanguage.add(param.name);
                        setValueLanguage.add(param.value);
                    }
                }

        }

            trForHead.insertAdjacentHTML("beforeend", `<th class="table-head">${String(...setNameLanguage)}</th>`);
            trForBody.insertAdjacentHTML("beforeend", `<td class="table-content">${[...setValueLanguage]}</td>`);
    })

}


getParamRequest();
