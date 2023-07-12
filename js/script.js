let isCancelFlag = false;

const cancelInput = function (){
    alert('Шкода. Сподіваюсь ще побачимось')
}

const inputNumber = function () {
    let first = prompt('Будемо знаходить рішення квадратного рівняння виду: ax^2 + bx + c = 0' + '\n' + 'Введіть a')
    while (isNaN(+first)){
        first = prompt('Введіть a')
    }
    if (first === null) {
        isCancelFlag = true
        cancelInput()
        return isCancelFlag
    }

    let second = 0;
    while (second === 0 || isNaN(second)){
        second = prompt(`a = ${first} \nВведіть b`)
    }
    if (second === null){
        isCancelFlag = true
        cancelInput()
        return isCancelFlag
    }

    let third = 0;
    while (third === 0 || isNaN(third)){
        third = prompt(`a = ${first}, b = ${second} \nВведіть c`)
    }
    if (+third === null) {
        isCancelFlag = true
        cancelInput()
        return isCancelFlag
    }
    return {first, second , third}
}

let number = inputNumber()

const quadraticEquation = function (a,b,c){
    let d = b**2 -4*a*c;

    if (+a === 0){
        return ('Рівняння не має рішень')
    }

    if (d < 0){
        return ('D < 0 Рівняння не має рішень')
    }
    if (d === 0){
        let x = -b / (2*a);
        return (`D = 0 Єдиний корінь рівння ${x}`)
    }
    if (d > 0){
        let x1 = (-b + Math.sqrt(d)) / (2 *a)
        let x2 = (-b - Math.sqrt(d)) / (2 *a)
        return (`D > 0 Корені рівняння ${x1}, ${x2}`)
    }
}

let result = null;

if ( isCancelFlag !== true){
   result = quadraticEquation(number.first, number.second, number.third)
}

if (result !== null){
    alert(result)
}

