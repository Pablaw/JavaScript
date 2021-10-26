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
// Q6. False O
// NaN, 1, "", 0, undefined 중 Falthy가 아닌 것은? 1
// null, undefined, 0, 빈 문자열, NaN, false를 제외한 것은 모두 truthy
// Q7. 변수명으로 사용할 수 없는 것 X
// age, &age, let, _age, 1age -> &age, let? X -> let, 1age
// JS 식별자는 문자, 밑줄(_), 달러기호($)로 시작해야 한다. let은 예약어로 사용불가.
// Q8. 객체의 키 이름 중복 X
// 78, 84? -> 중복 시 가장 나중(아래값)값이 출력 됨.
var d = {
    'height':180,
    'weight':78,
    'weight':84,
    'weight':92,
    'temperature':36,
    'eyesight':1
};
console.log(d['weight']);

// Q9. concat을 활용한 출력 방법
var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';
var result = year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second);

console.log(result);
// 출력 목표값 2019/04/26 11:34:27
// concat() 메서드는 매개변수로 전달된 문자열을 메서드를 호출한 문자열에 붙여 새로운 문자열로 반환.
// Q10. 별찍기
// 입력 값: 5, 별찍기로 5단 트리만들기

let n2 = 5;
for(let j = 1; j <= n2; j++){
    for( let k = n2; ; k--) {
        console.log('*'.)
    }
}

// for(let j = 1; j <= 10; j += 2){
// console.log(' '.repeat((10-j)/2) + '*'.repeat(j));
// }

