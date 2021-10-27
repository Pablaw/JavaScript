'use strict';

// Q11. For를 이용한 기본 활용
let s = 0;
for(let i = 1; i <= 100; i++){
    s += i;  
} console.log(s);

// Q12. 캐릭터 클래스 만들기
const Wizard = class Wizard {
    constructor (health, mana, armor) {
        this.health = health;
        this.mana = mana;
        this.armor = armor;
    }
    attack() {
        console.log('파이어볼');
    }
}
const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();

// Q.13 몇 번째 행성인지 구하기.

let n = prompt('1~8 중에서 숫자를 입력하세요','');
let SolarSystem = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];

console.log(`입력한 순서에 해당하는 태양계 해성은 ${SolarSystem[n - 1]}입니다.`);
// Q.14 3의 배수 인가요?
let n2 = prompt('숫자를 입력하세요','');
if(n % 3 == 0) {
    console.log("짝");
} else {console.log(`${n2}`)}
// Q.15 자기소개
let name = prompt('이름을 입력하세요.', '');
console.log(`안녕하세요. 저는 ${name}입니다.`);
//Q.16 로꾸거 -> split / reverse / join
let n3 = prompt('단어를 입력하세요.', '');
const reverse = n3.split('').reverse().join('');
console.log(reverse);



