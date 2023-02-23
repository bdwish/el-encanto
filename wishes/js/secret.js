var answer;

function check(){
  answer = document.getElementById("input").value;

  if (answer === "amigo" || answer === "Amigo" || answer === "AMIGO"){
    window.location.href = "wishjs.html";
  }else{
    alert("Wrong Answer!\n Hint:Nickname")
  }
}
