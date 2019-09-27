/*
  Author: Charles Tiriamai
  Date: 2019/2/22
 */

/* Functions: */
function getInput() {
  var name = document.getElementById("name").value;
  var message = document.getElementById("message").value;
  var email = document.getElementById("email").value;

  var nameValid = isValidInput(name, "name", 12);

  var messageValid = isValidInput(message, "message", 40);

  var emailValid = isValidInput(email, "email", 15);

  if (nameValid && messageValid && emailValid) {
    alert("Thanks for your feedback! \nRedirecting you to the home page...");
    window.location.href = "index.html";
  }

  if(email.indexOf("@") = 0){
    alert("You've entered an invalid email.")
  }
}


function isValidInput(value, id, maxLength) {
  if (value && value.length <= maxLength && value.length > 0) {
    showValidInput(id);
    return true;
  } else {
    showInvalidInput(id);
    return false;
  }
}

function showInvalidInput(id) {
  var element = document.getElementById(id);
  var statusMsg = document.getElementById("status-msg");

  element.style.border = "1px solid red";
  element.style.color = "red";

  statusMsg.innerHTML = "Some input is invalid!";
  statusMsg.style.color = "red";
}

function showValidInput(id) {
  var element = document.getElementById(id);
  var statusMsg = document.getElementById("status-msg");

  element.style.border = "1px solid green";
  element.style.color = "green";

  statusMsg.innerHTML = "";
}