const array = [1, 2, 3, 4, 5, 6, 7];

const removeElement = function (arr, deleteNumber){
    arr.splice(arr.indexOf(deleteNumber), 1)
    return arr
}

removeElement(array, 5 );
console.log(array);
