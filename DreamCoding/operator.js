'use strict';

// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);
// 특수문자열 \n, \t ...
//2. Numeric operators
// +, -, /, *, %, **
//3. Increment and decrement operators
// const preIncrement = ++counter;
//counter = counter + 1;
//preIncrement = counter;
//4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

//5. Comparison operators
// <, <=, >, >=
//6. Logical operators: || (or), && (and), ! (not)
//7. Equality
// == loose equality, with type conversion
// === strict equality, no type conversion

//8. Conditional operators: if
//if, else if, else
//9. Ternary operators: ?
let name = 'df';
console.log(name === 'ellie' ? 'yes' : 'no'); // condition ? value1 : value2;
//10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
let browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
        console.log('love you!');
        break;
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

//11. Loops
// while loop, while the condition is truthy,
//body code is executed.
// for loop, for(begin; condition; step)
//  for (let i = 3; i > 0; i = i - 2) {
//     inline variable declaration
//     console.log(`inline variable for: ${i}`);
// }
//nested loops

//Q1.
for(let i = 0; i <= 10; i++) {
    if(i % 2 == 0) {
        console.log(`짝수는 ${i}`);
    }
}
//Q2.
for(let j = 0; j <= 10; j++) {
    if(j > 8) {
        break;
    } console.log(`${j}`);
} 