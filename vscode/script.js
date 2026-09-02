const buttonYes = document.getElementById("Yes");
const buttonNo = document.getElementById("No");
const text = document.getElementById("text");

function sayHi(){
     window.location.href = "Aliah.html"

}
function sayNo(){
    window.location.href = "index.html"

}

buttonYes.addEventListener("click", sayHi);
buttonNo.addEventListener("click", sayNo);