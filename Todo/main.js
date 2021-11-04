'use strict';

const input = document.querySelector(".todo_input");
const btn = document.querySelector(".todo_btn");
const ctn = document.querySelector("#toDoCont");

btn.addEventListener('click', toDoList);

function toDoList () {
    let inputValue = input.value;
    let newDiv = document.createElement("div");
    newDiv.innerText = inputValue;
    ctn.prepend(newDiv);
    input.value = '';
}
