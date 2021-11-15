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
// const now = Date.now(); // 1970 1월 1일부터 millis(1000분의 1초)단위로 누적된 수
// const secondInt = now / 1000;
// const minutes = secondInt / 60;
// const hour = minutes / 60;
// const day = hour / 24;
// const year = Math.floor(day / 365);
// const nowYear = year + 1970;

// console.log(nowYear);


// const now = new Date();
// let year = now.getTime();
// year = Math.floor(year / (1000 * 60 * 60 * 24 * 365)) + 1970;
// console.log(year);

// Q46. 각 자리수의 합 2
// const startNum = prompt('1~20까지 중 시작 숫자를 입력하세요', '');
// const endNum = prompt('1~20까지 중 끝 숫자를 입력하세요', '');
// let strSum = '';
// for(let i = startNum; i <= endNum; i++){
//     strSum += i;
// }

// strSum.split('');
// let numSum = 0;
// for (let j=0; j < strSum.length; j++){
//     numSum += Number(strSum[j]);
// }
// console.log(numSum);

// let arr = [];
// let sum = 0;

// for (let i=0; i<20; i++){
//   arr[i] = i+1;
// }

// arr.forEach((n) => {
//   while(n !== 0){
//     sum += (n % 10);
//     n = Math.floor(n/10);
//   }
// })

// console.log(sum);

//Q47. set 자료형의 응용
// const people = {
//     이호준: "01050442903",
//     이호상: "01051442904",
//     이준호: "01050342904",
//     이호준: "01050442903",
//     이준: "01050412904",
//     이호: "01050443904",
//     이호준: "01050442903"
//   };
// let result = new Set();
// for (let p1 in people) {
//     result.add(people[p1]);
// }
// console.log(result.size);

// let nameSet = new Set([Object.values(people)]);
// let setName = nameSet.values();
// let setValues = setName.next().value;
// console.log(setValues.length);
// Q48. 대소문자 바꿔서 출력하기
// const input = prompt('문자열을 입력하세요', ''); //'AAABBBcccddd';
// const arr = [];
// let result = '';
// let inputSplit = input.split('');

// for(let i=0; i < inputSplit.length; i++) {
//     if(inputSplit[i] === inputSplit[i].toUpperCase()){
//         let lower = '';
//         lower = inputSplit[i].toLowerCase();
//         arr.push(lower);
//     } else {
//         let upper = '';
//         upper = inputSplit[i].toUpperCase();
//         arr.push(upper);
//     }    
// }
// for (let j=0; j < arr.length; j++){
//     result += arr[j];
// }
// console.log(result);
// // Q49. 최대값 구하기
// const num = prompt('숫자를 공백으로 구분해서 입력하세요.', '');   
// // 10 9 8 7 6 5 4 3 2 1
// const numArr = num.split(' '); // ...n 배열 요소 값 가져오기
// console.log(Math.max(...numArr));

// let num = prompt('숫자를 공백으로 구분해서 입력하세요.', '').split(' ').map((n) => { return parseInt(n, 10);})

// num.sort((a,b) => {
//     return a - b;
// });
// console.log(num[num.length - 1]);

// Q50. 버블정렬 구현하기
function bubble(arr) {
  let result = arr.slice(); 

  for (let i = 0; i < result.length - 1; i++) {
    for (let j=0; j < result.length - i; j++) {
      if (result[j] > result[j + 1]) {
         let temp = result[j];
         result[j] = result[j + 1];
         result[j + 1] = temp;
      }
    }
  }
  return result;
}

const items = prompt('입력해주세요.').split(' ').map((n) => {
  return parseInt(n, 10);
});

console.log(bubble(items));
