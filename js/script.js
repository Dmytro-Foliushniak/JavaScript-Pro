const array = [1, 2, 3, 4, 5, 6, 7];

const removeElement = function (arr, deleteNumber){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === deleteNumber){
            arr.splice(arr.indexOf(arr[i]), 1)
        }
    }
}

removeElement(array, 5 );
console.log(array);