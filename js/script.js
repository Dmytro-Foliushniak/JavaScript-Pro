let inputNumber = {
    a: null,
    b: null,
    c: null
}
const askNumber = function (){
    let isNull = true
    alert('Будемо знаходити рішення квадратного рівняння виду: ax^2 + bx + c = 0')
        for (const key in inputNumber){
            inputNumber[key] = prompt('Введіть будь-ласка число')
            while (isNaN(inputNumber[key])) {
                inputNumber[key] = prompt('Ви вказали не число, повторіть спробу')
            }
            isNull = Boolean(inputNumber[key])
        }
        console.log(isNull)
    console.log(inputNumber)
    return inputNumber
}
askNumber()
const invalidNumber = function (){
    alert('Рівняння не має рішень')
}
const quadraticEquation = function (a,b,c,ifInvalid){
    let d = b**2 -4*a*c;
    if (+a === 0){
        ifInvalid();
        return null
    }
    if (d < 0){
        alert(`{d:${d}, x1:null, x2:null} D < 0 Рівняння не має рішень`)
    }
    if (d === 0){
        let x = -b / (2*a);
        alert(`D = 0 Єдиний корінь рівння ${x}`)
    }
    if (d > 0){
        let x1 = (-b + Math.sqrt(d)) / (2 *a)
        let x2 = (-b - Math.sqrt(d)) / (2 *a)
        alert(`{D:${d}, x1:${x1}, x2:${x2}} D >= 0`)
    }
}
quadraticEquation(inputNumber.a, inputNumber.b, inputNumber.c, invalidNumber)