const reisesOfDegree = function (num, degree) {
    if (degree > 1){
        return num * reisesOfDegree(num, degree-1)
    } else {
        return num
    }

}

console.log(reisesOfDegree(5,2))