'usestrict';

const downBtn = document.querySelector(".downBtn");
const display = document.querySelector(".display");
const upBtn = document.querySelector(".upBtn");

downBtn.addEventListener('click', downClick);
upBtn.addEventListener('click', upClick);

let n = 0;

function downClick () {
    if (n > 0) {
        n--;
        display.value = n;
    } else {
        n = 0;
    }
}

function upClick () {
        n++;
        display.value = n;
    }
