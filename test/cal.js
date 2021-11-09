'use strict';

const add = document.querySelector('.addBtn');
const subtract = document.querySelector('.subtractBtn');
const multiply = document.querySelector('.multiplyBtn');
const divide = document.querySelector('.divideBtn');
const result = document.querySelector('.resultBtn');
const reset = document.querySelector('.resetBtn');

const num1 = document.querySelector('.num1Btn');
const num2 = document.querySelector('.num2Btn');
const num3 = document.querySelector('.num3Btn');
const num4 = document.querySelector('.num4Btn');
const num5 = document.querySelector('.num5Btn');
const num6 = document.querySelector('.num6Btn');
const num7 = document.querySelector('.num7Btn');
const num8 = document.querySelector('.num8Btn');
const num9 = document.querySelector('.num9Btn');
const num0 = document.querySelector('.num0Btn');

const display = document.querySelector('.displayBtn');

const inputValue = display.value;

let n = '';

let arr = [];
let lastArr = [];
let answer = 0;

num1.addEventListener('click', num1Value);
num2.addEventListener('click', num2Value);
num3.addEventListener('click', num3Value);
num4.addEventListener('click', num4Value);
num5.addEventListener('click', num5Value);
num6.addEventListener('click', num6Value);
num7.addEventListener('click', num7Value);
num8.addEventListener('click', num8Value);
num9.addEventListener('click', num9Value);
num0.addEventListener('click', num0Value);
reset.addEventListener('click', clear);

add.addEventListener('click', addFn);

result.addEventListener('click', resultValue);


function resultValue () {
    display.value = answer;
} 

function addFn () {
    let arrSum = 0;
    for(let i=0; i < arr.length; i++){
        arrSum += arr[i];
    }
    console.log(arrSum);
} //arr에 넣어서 한번에 더하기 (for)

function clear () {
    n = '';
    answer = 0;
    arr = [];
    lastArr = [];
    display.value = n;
}

function num1Value () {
    arr.push('1');
    n += 1;
    display.value = n;
}
function num2Value () {
    arr.push('2');
    n += 2;
    display.value = n;
}
function num3Value () {
    arr.push('3');
    n += 3;
    display.value = n;
}
function num4Value () {
    arr.push('4');
    n += 4;
    display.value = n;
}
function num5Value () {
    arr.push('5');
    n += 5;
    display.value = n;
}
function num6Value () {
    arr.push('6');
    n += 6;
    display.value = n;
}
function num7Value () {
    arr.push('7');
    n += 7;
    display.value = n;
}
function num8Value () {
    arr.push('8');
    n += 8;
    display.value = n;
}
function num9Value () {
    arr.push('9');
    n += 9;
    display.value = n;
}
function num0Value () {
    arr.push('0');
    n += 0;
    display.value = n;
}






console.log(display);
