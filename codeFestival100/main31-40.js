//Q31. 자바스크립트 자료형의 복잡도
// 내장함수의 시간 복잡도가 O(1)이 아닌 것은? 2), 5)?? X -> 3), 5)
// 1) arr[i], 2) arr.push(5), 3) arr.slice(), 4) arr.pop() 5)arr.includes(5)
//Q32. 문자열 만들기
// const str = prompt('문자열을 입력해주세요.', '').split(' ');
// console.log(str.length);
//Q33. 거꾸로 출력하기
// const num1 = prompt('여러개 숫자를 입력해주세요.','').split(' ');
// console.log(num1.reverse().join(' '));
// const num2 = prompt('여러개 숫자를 입력해주세요.', '').split(' ');
// console.log(num2.reverse().join(' '));
//Q34. sort 구현하기
// let height = prompt('키를 공백으로 구분해서 입력하세요.', '').split(' ');
// for(let i = 0; i <= height.length - 2; i++){
//     if(height[i] < height[i+1]) {
//         console.log('YES');
//     } else {
//         console.log('NO');
//     }
// }
// const height = prompt('키를 입력하세요.', '');
// let sorted = '';
// sorted = height.split(' ')
// .sort(function(a, b) { return a - b})
// .join(' ');
// if(height === sorted) {
//     console.log('Yes');
// } else { 
//     console.log('No');
// }
//Q35. Factory 함수 사용하기
// /2제곱, 3제곱, 4제곱을 할 수 있는 Factory 함수를 만들려고 합니다.
function one(n){
    function two(value){
        const sq = Math.pow(value, n);
        return sq;
    }
    return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));

