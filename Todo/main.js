'use strict';

const input = document.querySelector(".todo_input");
const btn = document.querySelector(".todo_btn");
const ctn = document.querySelector("#toDoCont");

btn.addEventListener('click', toDoList);

function toDoList () {
    let inputValue = input.value;
    let newDiv = document.createElement("div");
    let delBtn = document.createElement("button");
    let editBtn = document.createElement("button");
    let checkBox = document.createElement("input");

    newDiv.innerText = inputValue;

    checkBox.type = "checkbox";
    editBtn.innerText = 'Edit';
    delBtn.innerText = 'X';

    newDiv.append(editBtn, delBtn, checkBox);

    ctn.prepend(newDiv);

    input.value = '';
}
