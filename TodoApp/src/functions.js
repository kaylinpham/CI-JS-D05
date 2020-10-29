export const isEmpty = (currentValue) => currentValue === "";

export function show() {
    let html = "";
    if (listWork.every(isEmpty)) {
        $("#content").html(`<p style="text-align: center;">List your work here!</p>`);
    } else {
        listWork.map((value, key) => {
            if (value !== "") {
                if (checkList.indexOf(key) > -1) {
                    html += `<div class="work__wrapper">
                                <input class="check" type="checkbox" id="check__${key}" checked>
                                <div class="work__items" id="work__${key}" data-value="${value}" style="text-decoration:line-through; color: #ad9c87">
                                    ${value}
                                </div>
                                <img class="garbage" src="garbage.png" id="delete__${key}" />
                            </div>`;
                } else {
                    html += `<div class="work__wrapper">
                                <input class="check" type="checkbox" id="check__${key}">
                                <div class="work__items" id="work__${key}"  data-value="${value}">
                                    ${value}
                                </div>
                                <img class="garbage" src="garbage.png" id="delete__${key}"/>
                            </div>`;
                }
            }
        });
        $("#content").html(`${html}`);
    }
    $(".work__items").on("click", edit);
    $(".check").on('click', check);
    $(".garbage").on('click', remove);
}

export function add() {
    listWork.push($("#input__field").val());
    $("#input__field").val("");
    show();
}

export function edit() {
    let id = $(this)[0].id;
    $("#change__btn").text("Edit");
    status = "edit";
    let val = $(`#${id}`).text().trim();
    $("#input__field").val(val);
    flag = Number(id.substring(id.lastIndexOf("_") + 1, id.length));
    $("#input__field").focus();
}

export function change() {
    listWork[flag] = $("#input__field").val();
    $("#input__field").val("");
    $("#change__btn").text("Create");
    status = 'create';
    show();
}
export function toggleStatus() {
    if (status === 'create') {
        add();
    } else if (status === 'edit') {
        change();
    }
}

export function check() {
    let id = $(this)[0].id;
    let i = Number(id.substring(id.lastIndexOf("_") + 1, id.length));
    if (document.getElementById(`check__${i}`).checked) {
        console.log("1");
        checkList.push(i);
        $(`#work__${i}`).css({ "text-decoration": "line-through", "color": "#ad9c87" });
    } else {
        console.log("2");
        checkList.splice(checkList.indexOf(i), 1);
        $(`#work__${i}`).css({ "text-decoration": "none", "color": "black" });
    }
}

export function remove() {
    let id = $(this)[0].id;
    let i = Number(id.substring(id.lastIndexOf("_") + 1, id.length));
    if (confirm("Do you want to remove?") ==
        true) {
        listWork[i] = "";
        if (checkList.indexOf(i) > -1) {
            checkList.splice(checkList.indexOf(i), 1);
        }
    }
    show();
    $("#input__field").val("");
}