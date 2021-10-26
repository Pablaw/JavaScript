// 1. Use strict
// added in ES 5
// use this for Vanila Javascript.
'use strict';

// 2. Variable
// let (added in ES6)
// global scope / block scope
// var hoisting(move declaration from bottom to top)
// variable declaration -> constant - immutable / let - mutable

// 3.constant
// favor immutable data type always for a few reasons:
// - Security
// - thread safety
// - reduce human mistakes

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

// number
// const infinity = 1 / 0;
// const negativeInfinity = -1 / 0;
// const nAn = 'not a number' / 2;
// console.log(infinity);
// console.log(negativeInfinity)
// console.log(nAn);
// bigInt (fairly new, don't use it yet)
// const bigInt = 123249329872358925982349823n; // over ((-2**53) ~ 2*53)

// string 
// template literals - (string) ` ${i} `

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
// console.log(`${symbol1}`); -> error
console.log(`${symbol1.description}`);