var name;
var password;

function valueUser(){
  name = document.getElementById("userName").value;
  name = document.getElementById("userName").value;
  password = document.getElementById("pass").value;
  if (name === "Joyline" && password === "joyline"){
    window.location.href = "secret.html";
  }else {
    alert("Wrong UserName or Password!!\n Ask the User for password!!")
  }

}
