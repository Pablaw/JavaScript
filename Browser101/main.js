console.log('a');
const outer = document.querySelector('.outer');
const inner = document.querySelector('.inner');
const doc = document.querySelector('.document');


window.addEventListener('resize', () => {
    outer.innerText = `outer W ${window.outerWidth}, H ${window.outerHeight}`;
}) 

window.addEventListener('resize', () => {
    inner.innerText = `inner W ${window.innerWidth}, H ${window.innerHeight}`
})

window.addEventListener('resize', () => {
    doc.innerText = `document W ${document.documentElement.clientWidth}, H ${document.documentElement.clientHeight}`
})




// outer.innerText = outerSize(a,b);

//  축약형
// function consoleText () {
//     outer.innerText = `outer ${window.outerWidth}`;
// }
// window.addEventListener('resize', consoleText);