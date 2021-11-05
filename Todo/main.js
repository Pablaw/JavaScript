const input = document.querySelector('.toDoInput');
const btn = document.querySelector('.toDoBtn');
const cont = document.querySelector('.toDoCont');

btn.addEventListener('click', toDoList);

function toDoList () {
    const inputValue = input.value;
    let newDiv = document.createElement("div");
    newDiv.innerText = inputValue;

    let editBtn = document.createElement("button");
    let delBtn = document.createElement("button");
    let checkBox = document.createElement("input");

    editBtn.innerText = "edit";
    delBtn.innerText = "X"
    checkBox.type = "checkbox";

    newDiv.append(editBtn, delBtn, checkBox);
    cont.prepend(newDiv);

    input.value = '';
}