'use strict';

// quiz
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder
const a = prompt('숫자를 입력하세요.', '');
const b = prompt('숫자를 입력하세요.', '');
const command = prompt('영문으로 연산자를 입력하세요.','');

function add(a, b) {
    return a + b;
}
function substract(a, b) {
    return a - b;
}

console.log(command(a, b));




