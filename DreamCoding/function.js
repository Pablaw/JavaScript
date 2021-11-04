'use strict';

// quiz
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder
const a = prompt('숫자를 입력하세요.', '');
const b = prompt('숫자를 입력하세요.', '');
const command = prompt('연산자를 입력하세요.','');

// function calculate(command, a, b){
// switch (command) {
//     case '+':
//         return a + b;
//     case '-':
//         return a - b;
//     case '/':
//         return a / b;
//     case '*':
//         return a * b;
//     case '%':
//         return a % b;
    
//     default:
//         throw Error ('unknown command');
//     }
// }
function calculate(command, a, b){
    if(command === 'add') {
        return a + b;
    } else if(command === 'substract') {
        return a - b;
    } else if(command === 'divide') {
        return a / b;
    } else if (command === 'multiply') {
        return a * b;
    } else if (command === 'remainder') {
        return a % b;
    } else { throw Error ('unknown command')}
}
console.log(calculate(command, +a, +b));


