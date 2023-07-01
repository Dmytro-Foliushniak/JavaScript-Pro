const number = {
    fist: null,
    second: null,
    third: null
}
number.fist = +prompt('Введіть будь-ласка перше число')
number.second = +prompt('Введіть будь-ласка друге число')
number.third = +prompt('Введіть будь-ласка третє число')

const checkNumber = function (value){
    if (Number.isInteger(value)){
        return value
    }
    for (const key in number){
        if (isNaN(number[key])){
            number[key] = +prompt('Ви вказали не число, повторіть спробу')
            console.log(number)
            return checkNumber(number[key])
        }
    }
}

checkNumber(number.fist)
checkNumber(number.second)
checkNumber(number.third)

const quadraticEquation = function (a,b,c){
    let d = b**2 -4*a*c;

    if (a === 0){
        return alert('Рівняння не має рішень')
    }

    if (d < 0){
        return alert('D < 0 Рівняння не має рішень')
    }
    if (d === 0){
        let x = -b / (2*a);
        alert(`D = 0 Єдиний корінь рівння ${x}`)
    }
    if (d > 0){
        let x1 = (-b + Math.sqrt(d)) / (2 *a)
        let x2 = (-b - Math.sqrt(d)) / (2 *a)
        alert(`D > 0 Корені рівняння ${x1}, ${x2}`)
    }
}
quadraticEquation(number.fist, number.second, number.third)