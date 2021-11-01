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
// let n = prompt('숫자 정수를 입력해주세요.','');
// let area = (n * n) * 3.14;
// console.log(area);
// function circle(n) {
//     let result = n * n * 3.14;
//     return result;
// }
// let r = prompt('원을 반지름을 입력하세요.', '');
// console.log(circle(r));
//Q26. 행성문제2
// const planets = {
//     '수성' : 'Mecury',
//     '금성' : 'Venus',
//     '지구' : 'Earth',
//     '화성' : 'Mars',
//     '목성' : 'Jupiter',
//     '토성' : 'Saturn',
//     '천왕성' : 'Uranus',
//     '해왕성' : 'Neptune'
// };
// let name = prompt('행성이름을 한글로 입력하세요.','');
// console.log(planets[name]);
//Q27.객체 만들기
// const name = prompt('이름(영문)을 입력하세요.', '').split(' ');
// const point = prompt('점수를 입력하세요.', '').split(' ');
// const obj = {};
// for (let i=0; i<name.length; i++) {
//     obj[name[i]] = +point[i]
// }
// console.log(obj);
//Q28. 2-gram
// let str = prompt('문자를 입력하세요.', '').slice();
// for(let i = 0; i <= str.length - 2; i++) {
//     console.log(str[i] + str[i+1]);
// }

// let str = prompt('문자를 입력하세요.', '');
// for(let i=0; i < str.length - 1; i++) {
//     console.log(str[i], str[i+1]);
// }
//Q29. 대문자 구분하기
// let chr = prompt('알파벳을 하나만 입력해주세요.', '');
// if(chr === chr.toUpperCase()) {
//     console.log('YES')
// } else { console.log('NO')};
//Q30. 문자열 속 문자 찾기
const str = prompt('문자열을 입력해주세요.','').slice();
const find = prompt('찾을 문자를 입력해주세요.','').slice();
let answer = '';
for( let i = 0; i <= str.length; i++){
if ( str[i] === find[0]) {
        if (str[i + 1] === find[1]) {
            if(str[i + 2] === find[2]){
                answer = console.log(i);
            }
        }
    }
}
console.log(str.indexOf(find));