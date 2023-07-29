const changeNumber = function (number){
    return number.match(/380/) === null ? null : number.replace(/\D/g, '').replace(/^38/, '')
}

console.log(`Phone number was "380 44 364 83 65" became ${changeNumber('380 44 364 83 65')}`)
console.log(`Phone number was "+380 44 364 83 65" became ${changeNumber('+380 44 364 83 65')}`)
console.log(`Phone number was "380-44-364-83-65" became ${changeNumber('380-44-364-83-65')}`)
console.log(`Phone number was "+380-44-364-83-65" became ${changeNumber('+380-44-364-83-65')}`)
console.log(`Phone number was "+38 044 364 83 65" became ${changeNumber('+38 044 364 83 65')}`)