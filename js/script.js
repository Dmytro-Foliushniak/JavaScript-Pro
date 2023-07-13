const arrLong = +prompt('Введіть довижну массиву')

let newArr = []

for (let i = 0; i < arrLong; i++){
    newArr.push(+prompt(`Введіть число ${i+1}`))
    newArr.sort((a,b) => a - b);
    console.log(newArr)
}
newArr.splice(1,3)
console.log(newArr)
