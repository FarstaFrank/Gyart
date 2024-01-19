var home = document.getElementById("home");
var textBilde = document.getElementById("textBild");
var chat = document.getElementById("chat");

var openHome = document.getElementById("openHome");
var openTextBild = document.getElementById("openTextBild");
var openchat = document.getElementById("openChat");

var curentWindow = "chat";
open();

openHome.addEventListener("click", function () {
    curentWindow = "home";
    open();
});
openTextBild.addEventListener("click", function () {
    curentWindow = "textBild";
    open();
});
openChat.addEventListener("click", function () {
    curentWindow = "chat";
    open();
});



function open(){
    switch(curentWindow){
        case "home":
            home.style.display = "block";
            textBilde.style.display = "none";
            chat.style.display = "none";
            break;
        case "textBild":
            textBilde.style.display = "block";
            home.style.display = "none";
            chat.style.display = "none";
            break;
        case "chat":
            textBilde.style.display = "none";
            home.style.display = "none";
            chat.style.display = "block";
            break;
        default:
            home.style.display = "block";
            textBilde.style.display = "none";
            home.style.display = "none";
            break;
    }
}