function saveNumber (){
    let num = 0;
     return  function getSum (x){
         return  num += x
     }
}

const sum = saveNumber()

console.log(sum(3))
console.log(sum(5))
console.log(sum(20))