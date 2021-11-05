'usestrict';

const downBtn = document.querySelector(".downBtn");
const display = document.querySelector(".display");
const upBtn = document.querySelector(".upBtn");

downBtn.addEventListener('click', downClick);
upBtn.addEventListener('click', upClick);

let n = parseInt(display.value, 10);

function downClick () {
   display.value -= 1;
};

function upClick () {
    display.value += 1;
};
console.log(n);