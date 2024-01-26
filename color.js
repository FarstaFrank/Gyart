// Dropdown menu for color mode choser  - variabls
var curentMode = document.getElementById("curentMode");
const choseMode = document.getElementById("choseMode");
var modeDropDown = document.getElementById("modeDropDown");

// color mode choser    - variabls
const btn603010 = document.getElementById("btn603010");
const mode2 = document.getElementById("mode2");
var mode = 1;

// colorpicer    - variabls
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var color3 = document.getElementById("color3");

//color display    - variabls
var colorDisplay1 = document.getElementById("colorDisplay1");
var colorDisplay2 = document.getElementById("colorDisplay2");
var colorDisplay3 = document.getElementById("colorDisplay3");

//set color to elements on the website    - variabls
var setOneBack = document.getElementsByClassName("setOne-back");
var setTwoBack = document.getElementsByClassName("setTwo-back");
var setTreeBack = document.getElementsByClassName("setTree-back");

// window - variabls
var windows = [document.getElementById("603010rule"), document.getElementById("window2")];

console.log(color1.value);
// Sets the default mode to window 1 (60/30/10 rule)
showWindow();

// Text color btn variabls
var textBtn = document.getElementById("textColorBtn");
var textBtnInner = document.getElementById("textColorBtnInner");
var textToColor = document.querySelectorAll('p,h1,h2,span');
var textChangeBack = document.getElementsByClassName("textChangeBack")
var textBtnState = 0;

// Sets the default colors and displays them for a example
color1.value = '#fffafb';
color2.value = '#339989';
color3.value = '#7de2d1';
colorDisplay1.innerHTML = color1.value;
colorDisplay2.innerHTML = color2.value;
colorDisplay3.innerHTML = color3.value;
setFirst();

// Dropdown menu for color mode chooser  - functions
choseMode.addEventListener("click", function () {
    if(modeDropDown.style.display == "none"){
        modeDropDown.style.display = "block";
    }else{
        modeDropDown.style.display = "none";
    }
});

// color mode chooser    - functions
btn603010.addEventListener("click", function () {
    curentMode.innerHTML = "60/30/10 Rule";
    modeDropDown.style.display = "none";
    mode = 1;
    showWindow();
});
mode2.addEventListener("click", function () {
    curentMode.innerHTML = "Mode 2";
    modeDropDown.style.display = "none";
    mode = 2;
    
    showWindow();
});

// button function and click shanges
textBtn.addEventListener("click", function () {
    if(textBtnState == 0){
        //light text color
        textBtn.style.backgroundColor = "black";
        textBtnInner.style.backgroundColor = "white";
        textBtnInner.style.margin = "0px 0px 0px 35px";

        changeTextBack("#212121");
        changeTextColor("white");

        textBtnState = 1;
    }else{
        // dark text color
        textBtn.style.backgroundColor = "white";
        textBtnInner.style.backgroundColor = "black";
        textBtnInner.style.margin = "0px 0px 0px 5px";

        changeTextBack("white");
        changeTextColor("black");

        textBtnState = 0;
    }
});

function changeTextColor(color){
    for(var i=0; i<textToColor.length; i++){
        textToColor[i].style.color = color;
    }
}
function changeTextBack(color){
    for(var i=0; i<textChangeBack.length; i++){
        textChangeBack[i].style.color = color;
    }
}





// display the right window depending on the mode
function showWindow(){
    clearWindows();
    switch(mode){
        case 1:
            windows[0].style.display = "block";
            break;
        case 2:
            windows[1].style.display = "block";
            break;
        default:
            clearWindows();
            break;
    }
}

// clears all windows
function clearWindows(){
    for(i = 0; i < windows.length; i++){
        windows[i].style.display = "none";
    }
}

// Displaying colors under color picker    - functions
color1.addEventListener("input", function () {
    colorDisplay1.innerHTML = color1.value;
    setFirst();
});
color2.addEventListener("input", function () {
    colorDisplay2.innerHTML = color2.value;
    setFirst();
});
color3.addEventListener("input", function () {
    colorDisplay3.innerHTML = color3.value;
    setFirst();
});

// set color to elements on the website    - functions
function setFirst(){
    for(i = 0; i < setOneBack.length; i++){
        setOneBack[i].style.backgroundColor = color1.value;
    }
    for(i = 0; i < setTwoBack.length; i++){
        setTwoBack[i].style.backgroundColor = color2.value;
    }
    for(i = 0; i < setTreeBack.length; i++){
        setTreeBack[i].style.backgroundColor = color3.value;
    }
}