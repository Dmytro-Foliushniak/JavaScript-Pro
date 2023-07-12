let inputNumber = {
    a: 0,
    b: 0,
    c: 0
}

const cancelInput = function (){
    alert('Шкода. Сподіваюсь ще побачимось')
}

const askNumber = function (){
    let isTrueAskNumber = true
    inputNumber.a = prompt('Будемо знаходити рішення квадратного рівняння виду: ax^2 + bx + c = 0' + '\n' + 'Введіть a')
        for (const key in inputNumber){
            while (inputNumber[key] === 0 || isNaN(inputNumber[key])) {
                inputNumber[key] = prompt(`Введіть будь-ласка число ${[key]}`);
            }
            if (inputNumber[key] === null){
                    isTrueAskNumber = false
                    cancelInput()
                    break;
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

if (Boolean(result) === true){
    alert(result)
}
