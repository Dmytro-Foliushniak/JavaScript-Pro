//Вивести на сторінку в один рядок через кому числа від 10 до 20.
let value = '';
for (let i = 10; i <= 20; i++) {
    value += i + ', ';
}
console.log(value);

//Вивести квадрати чисел від 10 до 20.
for (let i = 10; i <= 20; i++ ){
    console.log(i ** 2)
}

//Вивести таблицю множення на 7.
for (let i = 0; i <=10; i++){
    console.log(`${i} * 7 = ${i * 7}`)
}

//Знайти суму всіх цілих чисел від 1 до 15.
let sumOfNumber = 0
for (let i = 1; i <=15; i++){
    sumOfNumber += i;
}
console.log(sumOfNumber)

//Знайти добуток усіх цілих чисел від 15 до 35.
let productOfNumber = 1n
for (let i = 15n; i <=35; i++){
    productOfNumber *= i;
}
console.log(productOfNumber)

//Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
const length = 500
let totalSum = 0;
for (let i = 1; i <= length; i++){
    totalSum += i
}
const average = totalSum / length;

console.log(average)

//Вивести суму лише парних чисел в діапазоні від 30 до 80.
let pairSum = null;
for (let i = 30; i <= 80; i++){
    if (i % 2 === 0){
        pairSum += i
    }
}

//Вивести всі числа в діапазоні від 100 до 200 кратні 3.
for (let i = 100; i <=200; i++){
    if (i % 3 === 0) {
        console.log(i)
    }
}

// //Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
let number = prompt('Введіть число')
let sum = 0
let count = 0
for (let i = 1; i <= number; i ++){
    const divider = number / i;
    if (number % i === 0){
        console.log(`${number} / ${i} = ${divider}`)
    }
    if (divider % 2 === 0){
        //Визначити кількість його парних дільників.
        count++
        //Знайти суму його парних дільників.
        sum += divider
    }

}
console.log(`Кількість його парних дільників ${count}`)
console.log(`Сумма парних дільників ${sum}`)

//Надрукувати повну таблицю множення від 1 до 10.
for (let i = 1; i <=10; i++){
    let result;
    for (let j = 1; j<=10; j++){
        result = i * j
        console.log(`${i} * ${j} = ${result}`)
    }
}