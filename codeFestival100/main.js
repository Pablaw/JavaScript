'use strict';
// Q1. 배열의 삭제 O
var nums = [100, 200, 300, 400, 500];
// nums.pop();
// nums.pop();
for(let i = 0; i <= 1; i++){
    nums.pop();
}
console.log(nums);
// Q2. 배열의 내장함수 X
var arr = [200, 100, 300]; 
// -> [200, 100, 10000, 300]
// arr.pop();
// arr.push(10000);
// arr.push(300);
// splice(인덱스값, 제거개수, 추가 값)
arr.splice(2, 0, 10000);
console.log(arr);
// Q3.변수의 타입 O
var arr1 = [100, 200, 300];
console.log(typeof(arr1));
// 4) object ?
// Q4.변수의 타입2 O
// 2) 입력: a = 2.22, 출력: boolean ? -> number
let a = 2.22
console.log(typeof(a));
// Q5. for문 계산 O
var a1 = 10;
var b1 = 2;
for(var i = 1; i < 5; i += 2) {
    a1 += i;
}
console.log(a1 + b1);
// 4) 16
