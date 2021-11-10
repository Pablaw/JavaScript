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
//all 
const display = document.querySelector('.displayBtn');

const inputValue = display.value;

let n = '';

let arr = [];

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
    arr.push(n);
    n = '';
    display.value = n;
} // 배열 모두 더하기 (for)

function clear () {
    n = '';
    display.value = n;
}

function num1Value () {
    n += '1';
    display.value = n;
}
function num2Value () {
    n += '2';
    display.value = n;
}
function num3Value () {
    n += '3';
    display.value = n;
}
function num4Value () {
    n += '4';
    display.value = n;
}
function num5Value () {
    n += '5';
    display.value = n;
}
function num6Value () {
    n += '6';
    display.value = n;
}
function num7Value () {
    n += '7';
    display.value = n;
}
function num8Value () {
    n += '8';
    display.value = n;
}
function num9Value () {
    n += '9';
    display.value = n;
}
function num0Value () {
    n += '0';
    display.value = n;
}






console.log(display);
