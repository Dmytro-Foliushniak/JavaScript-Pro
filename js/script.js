//Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length. span>

const inputLength = +prompt('Введіть довижу')
const randomChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
const generateKey = function (length, characters){
    let result = '';
    for (let i =0; i < length; i++){
        result += characters.charAt(Math.floor(Math.random() * length));
    }
    return result
}

console.log(generateKey(inputLength, randomChar))