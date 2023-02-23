var name;
var password;

function valueUser(){
  name = document.getElementById("userName").value;
  console.log(name);
  name = document.getElementById("userName").value;
  password = document.getElementById("pass").value;
  console.log(name);
  console.log(password);
  if (name === "Joyline" && password === "joyline"){
    window.location.href = "secret.html";
  }else {
    alert("Wrong UserName or Password!!")
  }

}
