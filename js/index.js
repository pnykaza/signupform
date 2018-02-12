/*
Here is the dream:

if (isEmpty(username)) 
  return showAlert(usernameError, 'danger', 'Username is required')

// we passed validation, cleanup...
hideEl(usernameError)
*/
//CREATE ACCOUNT FORM
newAccountForm.addEventListener("input", function (event) {
  event.preventDefault();

  let userName = username.value;
  let choosePw = choosePassword.value;
  let confirmPw = confirmPassword.value;

  let emptyName = "Username required";
  let nameLength = "Username must be 6-20 characters";
  let emailSymbol = "Username must be an email address";
  let emailArray = [
    "jsmith@gmail.com",
    "pbuffay@gmail.com",
    "jtribbiani@gmail.com",
    "rgeller@gmail.com",
    "mgeller@gmail.com",
    "rgreen@gmail.com",
    "cbing@gmail.com"
  ];

  function unErrorAlert(message) {
    unError.classList.remove("hidden");
    unError.textContent = message;
  }

  if (userName === "") {
    unErrorAlert(emptyName);
    return;
  }

  if (userName.length < 6 || userName.length > 20) {
    unErrorAlert(nameLength);
    return;
  }

  if (userName.indexOf("@") === -1) {
    unErrorAlert(emailSymbol);
    return;
  }
  if (emailArray.includes(userName)) {
    acctExists.classList.remove("hidden");
    return
  }
  unError.classList.add("hidden");
  acctExists.classList.add("hidden");
///////////////////////////////////////////////////////////////////////////////
let empty = "Password required";
let length = "Password must be at least 8 characters"
let special = "Password must contain a special character"
let number = "Password must contain a number"
let upper = "Password must contain uppercase character"

function pwErrorAlert(message) {
    pwError.classList.remove("hidden");
    pwError.textContent = message;
}

  if (choosePw === "") {
    pwErrorAlert(empty)
    return;
  }

  if (choosePw.length < 8) {
    pwErrorAlert(length) 
    return;
  }

  if (!choosePw.match(/[A-Z]+/)) {
    pwErrorAlert(upper)
    return;
  }

  if (!choosePw.match(/\W/)) {
    pwErrorAlert(special)
    return;
  }

  if (!choosePw.match(/\d/)) {
    pwErrorAlert(number)
    return;
  }
  pwError.classList.add("hidden");

  if(confirmPw !== choosePw) {
    confirmError.classList.remove("hidden");
    confirmError.textContent = "Passwords must match"
  }
  confirmError.classList.add("hidden");

})

//LOGIN FORM
loginForm.addEventListener("input", function(event) {
  event.preventDefault();
  console.log("running nao")

  let email = inputEmail.value;
  let password = inputPassword.value;
  let emptyEmail = "Email required";
  let lengthReq = "Email cannot be less than 6 characters";
  let symbol = "Email must contain @";

  function emailErrorAlert(message) {
    emailError.classList.remove("hidden");
    emailError.textContent = message;
  }

  if (email === "") {
    emailErrorAlert(emptyEmail);
    return;
  }

  if (email.length < 6) {
    emailErrorAlert(lengthReq);
    return;
  }

  if (email.indexOf("@") === -1) {
    emailErrorAlert(symbol);
    return;
  }
 
  emailError.classList.add("hidden");

let empty = "Password required";
let length = "Password must be at least 8 characters"
let special = "Password must contain a special character"
let number = "Password must contain a number"
let upper = "Password must contain uppercase character"

  function pwErrorAlert(message) {
    passwordError.classList.remove("hidden");
    passwordError.textContent = message;
  }

  if (password === "") {
    pwErrorAlert(empty);
    return;
  }

  if (password.length < 8) {
    pwErrorAlert(length);
    return;
  }

  if (!password.match(/[A-Z]+/)) {
    pwErrorAlert(upper)
    return;
  }

  if (!password.match(/\W/)) {
    pwErrorAlert(special)
    return;
  }

  if (!password.match(/\d/)) {
    pwErrorAlert(number)
    return;
  }
  passwordError.classList.add("hidden");
});