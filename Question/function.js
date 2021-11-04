//변화가 있을까?
console.log(`Q1의 답은 No`);
// 2. ?나 ||를 사용하여 함수 작성
// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('보호자의 동의를 받으셨나요?');
//     }
//   }
function checkAge(age) { 
    age > 18 ? true : confirm('보호자 동의를 받으셨나요?');
}