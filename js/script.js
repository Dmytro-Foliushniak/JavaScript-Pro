//Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length. span>

const inputLength = +prompt('Введіть довижу')
const randomChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
const generateKey = function (length, characters){
    let result = '';
    for (let i =0; i < length; i++){
        result += characters.charAt(Math.random() * length);
        console.log(result)
    }
    return result
}

console.log(generateKey(inputLength, randomChar))