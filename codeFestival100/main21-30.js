//Q20. set은 어떻게 만드나요?
// 4) var x = new Set(range(5);)??
// 정답: var x = new Set('javscript');
//      var x = new Set();
//Q22. 배수인지 확인하기
// i가 6의 배수인지 확인하기
// i % 6 == 0 ?? 
//Q23. OX 문제
// console.log(Math.floor(10/3));
// //Q24. 대문자로 바꾸기
// let name = prompt('영문이름을 입력해주세요','');
// let upper = name.toUpperCase();
// console.log(upper);
//Q25. 원의 넓이 구하기.
// 원의 넓이 = 반지름 * 반지름 * 3.14
let n = prompt('숫자 정수를 입력해주세요.','');
let area = (n ** n) * 3.14;
console.log(area);