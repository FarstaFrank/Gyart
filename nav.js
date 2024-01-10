var home = document.getElementById("home");
var textBilde = document.getElementById("textBild");

var openHome = document.getElementById("openHome");
var openTextBild = document.getElementById("openTextBild");

var curentWindow = "home";
open;

openHome.addEventListener("click", function () {
    curentWindow = "home";
    open();
});
openTextBild.addEventListener("click", function () {
    curentWindow = "textBild";
    open();
});



function open(){
    switch(curentWindow){
        case "home":
            home.style.display = "block";
            textBilde.style.display = "none";
            break;
        case "textBild":
            textBilde.style.display = "block";
            home.style.display = "none";
            break;
        default:
            home.style.display = "block";
            textBilde.style.display = "none";
            break;
    }
}