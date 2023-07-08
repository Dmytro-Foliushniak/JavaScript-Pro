let inputNumber = {
    a: null,
    b: null,
    c: null
}

const cancelInput = function (){
    alert('Шкода. Сподіваюсь ще побачимось')
}

const openAlert = function () {
    alert('Будемо знаходить рішення квадратного рівняння виду: ax^2 + bx + c = 0')
}

const askNumber = function (){
    let isTrueAskNumber = true
    alert('Будемо знаходити рішення квадратного рівняння виду: ax^2 + bx + c = 0')
        for (const key in inputNumber){
            inputNumber[key] = prompt('Введіть будь-ласка число')
            if (inputNumber[key] === null){
                isTrueAskNumber = false
                cancelInput()
                break;
            } else {
                while (isNaN(inputNumber[key])) {
                    inputNumber[key] = prompt('Ви вказали не число, повторіть спробу')
                }
                if (inputNumber[key] === null){
                    isTrueAskNumber = false
                    cancelInput()
                    break;
                }
            }
        }
        return isTrueAskNumber
}

const invalidNumber = function (){
    alert('Рівняння не має рішень')
}

const quadraticEquation = function (a,b,c,ifInvalid){
    let d = b**2 -4*a*c;
    if (+a === 0){
        return ifInvalid();

    }
    if (d < 0){
        return `{d:${d}, x1: null, x2: null}`;
    }
    if (d === 0){
        let x = -b / (2*a);
        return `D = 0 Єдиний корінь рівння ${x}`;
    }
    if (d > 0){
        let x1 = (-b + Math.sqrt(d)) / (2 *a);
        let x2 = (-b - Math.sqrt(d)) / (2 *a);
        return `{D: ${d}, x1: ${x1}, x2: ${x2}}`;
    }
}

let result = null;

if (askNumber() === true){
    result = quadraticEquation(inputNumber.a, inputNumber.b, inputNumber.c, invalidNumber);
}

if (result !== null){
    alert(result)
}
