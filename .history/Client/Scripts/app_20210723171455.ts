/*  File Descripton : - app.ts File
    Website Name :- Survey Ninjas
      Team Name :- CodingNinjas

        Anureet Kaur - 301174444
        Mridula Ramakrishnan - 301145813
        Muhammad Hassan - 301178235
        Nilam Keshwala - 301042029
        Raghuveer Manam - 300715775
        Roshna Raju - 301174285

        Date: 16th July 2021
*/

//IIFE -- Immediately Invoked Function Expression
"use strict";

(function () {
  function Start(): void {
    console.log("App Started");
  }
  window.addEventListener("load", Start);
})();

//Event Listener for delete button on survey list
function deleteConfirmation(id: string) {
  let userAction = confirm(
    "Are you sure that you want to delete this survey ?\nWarning: All associated responses will also be deleted!"
  );
  if (userAction == true) {
    window.location.replace("/survey-list/delete/" + id);
    return true;
  } else {
    return false;
  }
}

function changeVisibility(id: string) {
  window.location.replace("/survey-list/visibility/" + id);
}
