const btn = document.querySelector('.todo_btn');
const input = document.querySelector('.todo_input');
const body = document.querySelector('body');

let inputValue;


btn.addEventListener('click', function event() {
    inputValue = input.value;
    let newDiv = document.createElement("div");
    newDiv.innerText = inputValue;
    let toDoContent = document.querySelector('#toDoContent')
    toDoContent.prepend(newDiv)
    // document.toDoContent.prepend(newDiv);
    } 
) 


