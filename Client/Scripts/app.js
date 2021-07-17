"use strict";
(function () {
    function Start() {
        console.log("App Started");
    }
    window.addEventListener("load", Start);
})();
function deleteConfirmation(id) {
    console.log(id);
    let userAction = confirm("Are you sure that you want to delete this survey ?\nWarning: All associated responses will also be deleted!");
    if (userAction == true) {
        window.location.replace("/survey-list/delete/" + id);
        return true;
    }
    else {
        return false;
    }
}
//# sourceMappingURL=app.js.map