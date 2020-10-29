var listWork = [];
var flag;
var checkList = [];
var status = 'create';
import { show, toggleStatus } from './functions';
$(document).ready(function() {
    $('#change__btn').click(function() {
        toggleStatus();
    });
    $("#input__field").focus();
    $("#input__field").keyup((e) => {
        if (e.keyCode === 13) {
            toggleStatus();
        }
    });
    show();
});