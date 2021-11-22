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
