let isCancelFlag = false;

const cancelInput = function (){
    alert('Шкода')
}

const openAlert = function ()
{
    alert('Будемо знаходить рішення квадратного рівняння виду: ax^2 + bx + c = 0')
}

const inputNumber = function () {
    openAlert()
    const first = prompt('Введіть будь-ласка число A')
    if (first === null) {
        isCancelFlag = true
        cancelInput()
        return isCancelFlag
    }
    const second = prompt('Введіть будь-ласка число B')
    if (second === null){
        isCancelFlag = true
        cancelInput()
        return isCancelFlag
    }
    const third = prompt('Введіть будь-ласка число C')
    if (third === null) {
        isCancelFlag = true
        cancelInput()
        return isCancelFlag
    }
    return {first, second , third}
}

const number = inputNumber()

const checkNumber = function (value){
    if (Number.isInteger(value)){
        return value
    }
    for (const key in number){
            if (isNaN(number[key])){
                number[key] = prompt('Ви вказали не число, повторіть спробу')
                console.log(number)
                return checkNumber(number[key])
            }
            if (number[key] === null) {
                isCancelFlag = true
                cancelInput()
                return isCancelFlag
            }
    }
    return isCancelFlag
}

checkNumber(number)

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

alert(result)
