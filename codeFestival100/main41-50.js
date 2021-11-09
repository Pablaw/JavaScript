'use strict'
// Q41. 소수판별
// let n = prompt('숫자를 입력해주세요', '');
// let arr = [];
// for (let i=1; i < n; i++){
//     if(n % i === 0) {
//         arr.push(i);
//     }
// }
// if (arr.length > 1 || n === '1') {
//     console.log('NO')
// } else {console.log('YES')}

// Q42. 2020년 요일 세기
const a = prompt('몇 월인지 입력하세요.', '');
const b = prompt('몇 일인지 입력하세요.', '');
// 31 29(28) 31 30 31 30 31 31 30 31 30 31

let arrMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


