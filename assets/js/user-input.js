let username = document.querySelector("#username");
let password = document.querySelector("#password");
let email = document.querySelector("#email");
let errorBox = document.querySelector(".error-box");

function registration(){
  localStorage.setItem("username", username.value.toString());
  localStorage.setItem("password", password.value.toString());
  localStorage.setItem("email", email.value.toString());
  console.log(localStorage.getItem("email"));
  window.location.href = './redirect.html';
}

function checkInput(){
  if(username.value === ""){
    errorBox.innerHTML = "<p>You cannot leave the username field empty.</p>";
  }
  
  if(password.value === ""){
    errorBox.innerHTML = "<p>You cannot leave the password field empty.</p>";
  }
  
  if(email.value === ""){
    errorBox.innerHTML = "<p>You cannot leave the email field empty.</p>";
  }
  
  if(username.value !== "" && password.value !== "" && email.value !== ""){
    if(password.value.length >= 8){
      registration();
    }
    else{
      errorBox.innerHTML = "<p>Password must be 8 characters or longer.</p>";
    }
  }
}

if(localStorage.getItem("email") !== "" && localStorage.getItem("username") !== "" && localStorage.getItem("password") !== ""){
  document.querySelector('#displayUsername').innerHTML = localStorage.getItem("username");
  document.querySelector('#displayPassword').innerHTML = localStorage.getItem("password");
  document.querySelector('#displayEmail').innerHTML = localStorage.getItem("email");
}