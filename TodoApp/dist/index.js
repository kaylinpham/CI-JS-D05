/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/*! namespace exports */
/*! export add [provided] [no usage info] [missing usage info prevents renaming] */
/*! export change [provided] [no usage info] [missing usage info prevents renaming] */
/*! export check [provided] [no usage info] [missing usage info prevents renaming] */
/*! export edit [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isEmpty [provided] [no usage info] [missing usage info prevents renaming] */
/*! export remove [provided] [no usage info] [missing usage info prevents renaming] */
/*! export show [provided] [no usage info] [missing usage info prevents renaming] */
/*! export toggleStatus [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isEmpty": () => /* binding */ isEmpty,
/* harmony export */   "show": () => /* binding */ show,
/* harmony export */   "add": () => /* binding */ add,
/* harmony export */   "edit": () => /* binding */ edit,
/* harmony export */   "change": () => /* binding */ change,
/* harmony export */   "toggleStatus": () => /* binding */ toggleStatus,
/* harmony export */   "check": () => /* binding */ check,
/* harmony export */   "remove": () => /* binding */ remove
/* harmony export */ });
const isEmpty = (currentValue) => currentValue === "";
var listWork = [];
var flag;
var checkList = [];
var status = 'create';
function show() {
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

function add() {
    listWork.push($("#input__field").val());
    $("#input__field").val("");
    show();
}

function edit() {
    let id = $(this)[0].id;
    $("#change__btn").text("Edit");
    status = "edit";
    let val = $(`#${id}`).text().trim();
    $("#input__field").val(val);
    flag = Number(id.substring(id.lastIndexOf("_") + 1, id.length));
    $("#input__field").focus();
}

function change() {
    listWork[flag] = $("#input__field").val();
    $("#input__field").val("");
    $("#change__btn").text("Create");
    status = 'create';
    show();
}
function toggleStatus() {
    if (status === 'create') {
        add();
    } else if (status === 'edit') {
        change();
    }
}

function check() {
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

function remove() {
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

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/functions.js");


$(document).ready(function() {
    $('#change__btn').click(function() {
        (0,_functions__WEBPACK_IMPORTED_MODULE_0__.toggleStatus)();
    });
    $("#input__field").focus();
    $("#input__field").keyup((e) => {
        if (e.keyCode === 13) {
            (0,_functions__WEBPACK_IMPORTED_MODULE_0__.toggleStatus)();
        }
    });
    (0,_functions__WEBPACK_IMPORTED_MODULE_0__.show)();
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/script.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=index.js.map