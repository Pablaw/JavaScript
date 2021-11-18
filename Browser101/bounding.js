'use strict';

const div = document.querySelectorAll('div');
console.log(div);

// for(let i=0; i < div.length; i++) {
div[0].addEventListener('click', () => {
    div[0] = div.getBoundingClientRect();
});



// div.addEventListener('click', () => {
//     div.getBoundingClientRect();
// })

