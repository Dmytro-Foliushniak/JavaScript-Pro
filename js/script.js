const arr =  [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

//Знайти суму та кількість позитивних елементів.
const positiveArr = arr.filter(item => item > 0)

let sum = 0;
positiveArr.forEach(item => sum +=item)

console.log(`Сума: ${sum} \nКількість позитивних елементів: ${positiveArr.length}`)

//Знайти мінімальний елемент масиву та його порядковий номер.
const minNumber = Math.min(...arr)
const minNumberIndex = arr.indexOf(Math.min(...arr))

console.log(`Мінімальне число ${minNumber}`)
console.log(`Індекс мінімального числа ${minNumberIndex}`)

//Знайти максимальний елемент масиву та його порядковий номер.
const maxNumber = Math.max(...arr)
const maxNumberIndex = arr.indexOf(Math.max(...arr))

console.log(`Максимальне число ${maxNumber}`)
console.log(`Індекс максимального числа ${maxNumberIndex}`)

//Знайти кількість непарних позитивних елементів.
const oddNumber = arr.filter(item => item > 0 && item % 2 !== 0)

console.log(`Кількість непарних позитивних елементів: ${oddNumber.length}`)

//Знайти кількість парних позитивних елементів.
const pairNumber = arr.filter(item => item > 0 && item % 2 === 0)

console.log(`Кількість парних позитивних елементів: ${pairNumber.length}`)

//Знайти суму парних позитивних елементів.
let sumPairNumber = 0;

pairNumber.forEach(item => sumPairNumber += item)

console.log(`Сума парних позитивних чисел ${sumPairNumber}`)

//Знайти суму непарних позитивних елементів.
let sumOddNumber = 0;

oddNumber.forEach(item => sumOddNumber += item)

console.log(`Сума непарних позитивних чисел ${sumOddNumber}`)

//Знайти добуток позитивних елементів.
let productPositiveElement = BigInt(1);

positiveArr.forEach(item => productPositiveElement *= BigInt(item))

console.log(`Добуток парних елементів: ${productPositiveElement}`)

//Знайти найбільший серед елементів масиву, ост альні обнулити.
let maxArr = null
maxArr = arr.map(item => item === maxNumber ? maxArr = item : maxArr = 0)

console.log(`Массив елементів де залишився тільки максимальний: [${maxArr}]`)
