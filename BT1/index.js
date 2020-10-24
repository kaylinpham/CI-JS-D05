var listWork = [];
var flag;
var checkList = [];
var status = "create";
const isEmpty = (currentValue) => currentValue === "";
const inputWork = document.getElementById("input__field");
const btnWork = document.getElementById("change__btn");
const contentBox = document.getElementById("content");
const works = document.getElementsByClassName("work__items");
inputWork.focus();
inputWork.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        e.preventDefault();
        btnWork.click();
    }
});
show();
console.log(Date.getDate());

function show() {
    let html = "";
    if (listWork.every(isEmpty)) {
        contentBox.innerHTML = `<p style="text-align: center;">List your work here!</p>`;
    } else {
        listWork.map((value, key) => {
            if (value !== "") {
                if (checkList.indexOf(key) > -1) {
                    html += `<div class="work__wrapper"><input onclick="check(${key})" class="check" type="checkbox" id="check__${key}" checked><div class="work__items" id="work__${key}" onclick="edit(${key})" data-value="${value}" style="text-decoration:line-through">${value}</div><img class="garbage" src="garbage.png" onclick="remove(${key})"/></div>`;
                } else {
                    html += `<div class="work__wrapper"><input onclick="check(${key})" class="check" type="checkbox" id="check__${key}"><div class="work__items" id="work__${key}" onclick="edit(${key})" data-value="${value}">${value}</div><img class="garbage" src="garbage.png" onclick="remove(${key})"/></div>`;
                }
            }
        });
        contentBox.innerHTML = html;
    }
}

function add() {
    listWork.push(inputWork.value);
    show();
    inputWork.value = "";
}

function remove(n) {
    if (confirm("Do you want to remove?") ==
        true) {
        listWork[n] = "";
        if (checkList.indexOf(n) > -1) {
            checkList.splice(checkList.indexOf(n), 1);
        }
    }
    show();
    inputWork.value = "";
}

function edit(n) {
    btnWork.innerHTML = "Edit";
    btnWork.setAttribute("onclick", "change()");
    inputWork.value = document.getElementById(`work__${n}`).getAttribute('data-value');
    flag = n;
    inputWork.focus();
}

function change() {
    listWork[flag] = inputWork.value;
    show();
    inputWork.value = "";
    btnWork.innerHTML = "Create";
    btnWork.setAttribute("onclick", "add()");
}

function check(n) {
    if (document.getElementById(`check__${n}`).checked) {
        checkList.push(n);
        document.getElementById(`work__${n}`).style.textDecoration = "line-through";
        document.getElementById(`work__${n}`).style.color = "#ad9c87";
    } else {
        checkList.splice(checkList.indexOf(n), 1);
        document.getElementById(`work__${n}`).style.textDecoration = "none";
        document.getElementById(`work__${n}`).style.color = "black";
    }
}