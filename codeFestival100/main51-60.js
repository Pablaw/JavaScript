// Q51. merge sort 만들기
// function mergeSort(arr){
//     if (arr.length <= 1){
//       return arr;
//     }
  
//     const mid = Math.floor(arr.length / 2);
//     const left = arr.slice(0,mid);
//     const right = arr.slice(mid);
  
//     return merge(mergeSort(left), mergeSort(right));
//   }
  
//   function merge(left, right){
//     let result = [];
  
//     while (left.length && right.length){
//       if (left[0] < right[0]){
//         result.push(left.shift());
//       } else {
//         result.push(right.shift());
//       }
//     }
//     while (left.length) {
//       result.push(left.shift());
//     }
//     while (right.length) {
//       result.push(right.shift());
//     }
  
//     return result;
//   }
  
//   const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));
  
//   console.log(mergeSort(array));

// Q52. quick sort
// function quickSort(arr){
//   if (arr.length <= 1){
//     return arr;
//   }

//   const pivot = arr[0];
//   const left = [];
//   const right = [];

//   for (let i=1; i<arr.length; i++){
//     if(arr[i] < pivot){
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return quickSort(left).concat(pivot, quickSort(right));
// }

// const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));

// console.log(quickSort(array));

//Q53. 괄호 문자열 // '(',')'
/* const str = prompt('괄호 문자열을 입력하세요.', '').split('');

function solution () {
  let a = '(';
  let b = ')';
  let countA = str.filter(element => a === element).length;
  let countB = str.filter(element => b === element).length;
  let indexA = str.indexOf(a, 0);
  let indexB = str.indexOf(b, 0);
 
  if(countA === countB && indexA < indexB) {
        return true;
  } else {
    return false;
  }
}
if(solution() === true) {
  console.log('YES');
} else {
  console.log('NO');
} */
//Q54. 연속되는 수
/* let n = prompt('공백으로 구분하여 숫자들을 입력하세요.', '').split(' ').map(n => parseInt(n, 10));

let answer = '';

function solution () {
for(let i=1; i < n.length; i++) {
    if(n[i] !== n[i - 1] + 1) {
      answer = 'NO';
      break;
    } else {
      answer = 'YES';
    }
  } return answer;
}
console.log(solution()); */
//Q55. 하노이의 탑
// const route = [];

// function hanoi(num, start, end, temp){
//   //원판이 한 개일 때에는 바로 옮기면 됩니다.
//   if (num === 1) {
//     route.push([start, end]);
//     return NaN;
//   }

//   //원반이 n-1개를 경유기둥으로 옮기고
//   hanoi(num-1, start, temp, end);
//   //가장 큰 원반은 목표기둥으로
//   route.push([start, end]);
//   //경유기둥과 시작기둥을 바꿉니다.
//   hanoi(num-1, temp, end, start);
// }

// hanoi(6, 'A', 'B', 'C', 'D', 'E', 'F');
// console.log(route);
// console.log(route.length);

//Q56. 객체의 함수 응용
// nationWidth = {
//        'korea': 220877,
//        'Rusia': 17098242,
//        'China': 9596961,
//        'France': 543965,
//        'Japan': 377915,
//        'England' : 242900,
//   }
// let arrKeys = Object.keys(nationWidth);
// let arrValues = Object.values(nationWidth);
// let arrResult = [];

// for(let i=1; i <= arrValues.length - 1; i++) {
//   arrResult.push(Math.abs(arrValues[0] - arrValues[i]));
// }

// let min = Math.min(...arrResult);
// let answer= arrResult.indexOf(min);

// console.log(`${arrKeys[answer + 1]} ${min}`);

//Q57. 1의 개수
// let n = prompt('최대값 숫자를 입력해주세요.', '');
// let sum = '';
// for(let i=0; i <= n; i++) {
//   sum += i;
// }
// let arr = sum.split('');
// let answer = arr.filter(element => '1' ===element).length;
// console.log(answer);

//Q58. 콤마 찍기 // 123456789
let n = prompt('숫자를 입력해주세요.', '').split('');
let arr = [];

for (let i=0; i < n.length; i++) {
  if(i > 1 && i % 3 === 0) {
    arr.unshift(',');
    arr.unshift(n[n.length - (i+1)]);
  } else{
      arr.unshift(n[n.length - (i+1)]);
  }
}
let answer = arr.join('');

console.log(answer);
