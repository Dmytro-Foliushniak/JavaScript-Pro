const firstNumber = +prompt('Ender your first number, please');
const secondNumber = +prompt('Ender your second number, please');

const add  = firstNumber + secondNumber;
const subtract  = firstNumber - secondNumber;
const multiply = firstNumber * secondNumber;
const division = firstNumber / secondNumber;

// long decision
// alert(firstNumber + '+' + secondNumber + '=' + add  +'\n'+ firstNumber + '-' + secondNumber +'='+ subtract  +'\n'+ firstNumber + '*' + secondNumber +'='+ multiply +'\n'+ firstNumber + '/' + secondNumber +'='+ division)

// short decision
alert(`//Користувач ввів ${firstNumber} і ${secondNumber}:
${firstNumber} + ${secondNumber} = ${add}
${firstNumber} - ${secondNumber} = ${subtract}
${firstNumber} * ${secondNumber} = ${multiply}
${firstNumber} / ${secondNumber} = ${division}`);

