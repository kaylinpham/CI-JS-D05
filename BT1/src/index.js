import { add, show, remove, edit, change, check, isEmpty } from './functions';
var flag;

var checkList = [];
const inputWork = document.getElementById("input__field");
const btnWork = document.getElementById("change__btn");
const contentBox = document.getElementById("content");
const works = document.getElementsByClassName("work__items");

inputWork.focus();
inputWork.addEventListener("keyup", (e) => {
    if (e.code === 13) {
        e.preventDefault();
        btnWork.click();
    }
});
btnWork.addEventListener("click", add);
show();