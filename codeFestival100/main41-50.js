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
// const a = prompt('몇 월인지 입력하세요.', '');
// const b = prompt('몇 일인지 입력하세요.', '');
// // 31 29(28) 31 30 31 30 31 31 30 31 30 31

// let arrMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// let day = 0;

// for(let i=0; i < a-1; i++) {
//     day += +arrMonth[i];
// }

// day = day + +b;

// if(day % 7 === 1) {
//     console.log('WED')
// } else if (day % 7 === 2) {
//     console.log('THU')
// } else if (day % 7 === 3) {
//     console.log('FRI')
// } else if (day % 7 === 4) {
//     console.log('SAT')
// } else if (day % 7 === 5) {
//     console.log('SUN')
// } else if (day % 7 === 6) {
//     console.log('MON')
// } else {
//     console.log('TUE')
// }

// const month = prompt('월을 입력하세요.', '');
// const date = prompt('일을 입력하세요', '');

// function solution(a,b) {
//     const day = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    
//     const x = new Date('2020'+'-'+a+'-'+b);
//     return day[x.getDay()];
// }
// console.log(solution(month, date));
// Q43. 10진수를 2진수로
// const num = prompt('숫자를 입력해주세요.', '');
// let convertNum = parseInt(num, 10);
// let answer = convertNum.toString(2);

// console.log(answer);
// // Q44. 각 자리수의 합
// const num = prompt('숫자를 입력해주세요.', '');
// const arr = num.split('');
// let sum = 0;
// for(let i=0; i < arr.length; i++) {
//     sum += Number(arr[i]);
// }
// console.log(sum);

// let n = prompt('숫자를 입력하세요.');
// let sum = 0;

// while(n !== 0){
//   sum += (n % 10);
//   n = Math.floor(n/10);
// }

// console.log(sum);

// Q45. getTime()함수 사용하기
const now = Date.now(); // 1970 1월 1일부터 millis(1000분의 1초)단위로 누적된 수
const secondInt = now / 1000;
const minutes = secondInt / 60;
const hour = minutes / 60;
const day = hour / 24;
const year = Math.floor(day / 365);
const nowYear = year + 1970;

console.log(nowYear);


// const now = new Date();
// let year = now.getTime();
// year = Math.floor(year / (1000 * 60 * 60 * 24 * 365)) + 1970;
// console.log(year);