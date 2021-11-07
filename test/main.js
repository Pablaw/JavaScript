'usestrict';
const downBtn = document.querySelector('.downBtn');
const upBtn = document.querySelector('.upBtn');
const display = document.querySelector('.display');

let n = 0;

downBtn.addEventListener('click', downClick);
upBtn.addEventListener('click', upClick);

function upClick () {
    n++;
    display.value = n;
}
function downClick () {
    if(n > 0) {
        n--;
    } else {
        n = 0;
    }
    display.value = n;
}
