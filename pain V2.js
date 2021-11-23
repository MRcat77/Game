/* --------------------------------
Local storage stuff
 ----------------------------------*/
let notes = localStorage['score'] || '0';
document.querySelector("#numbers").textContent = notes;
let name = localStorage['name'] || '';
document.querySelector("#name").textContent = name;
let activeDisc = localStorage['disc'] || '1';
let greenDisc = localStorage['green'] || 'false';
let blueDisc = localStorage['blue'] || 'false';
let pinkDisc = localStorage['pink'] || 'false';
let grayDisc = localStorage['gray'] || 'false';
let brokenDisc = localStorage['broken'] || 'false';

/* --------------------------------
The click function (gives points)
 ----------------------------------*/
let combo = 1;
let limit = 10;

/*
This gives and stores one point to the counter, also it gives more points depending on the combo amount
*/
function Point()
{
    if(combo >= limit){
        if(left >= 45 && left <= 55){
            combo = limit;
            notes = combo + notes++;
            left = 100;
        }else{
            combo = 1;
            notes = combo + notes++;
            document.querySelector("#combo").style.opacity = "0";
        }
    }else if (left >= 45 && left <= 55){
        combo = combo + 1;
        notes = combo + notes++;
        left = 100;
        document.querySelector("#combo").style.opacity = "1";
    }else {
        combo = 1;
        notes++;
        document.querySelector("#combo").style.opacity = "0";
    }
    localStorage['score'] = notes;
    document.querySelector("#numbers").textContent = notes;
    document.querySelector("#combo").textContent = combo + "X";
}

/*
This makes the beat bar move and display what the combo is
*/
let beat = document.querySelector("#beat");
let left = 100;
let speed = 60;

function frame() {
    if (left === 0) {
        combo = 1;
        beat.style.left = 100 + "%";
        left = 100;
        document.querySelector("#combo").textContent = combo + "X";
        document.querySelector("#combo").style.opacity = "0";
    } else {
        left--;
        beat.style.left = left + "%";
    }
    setTimeout(function () {frame()}, speed)
}
frame()

/* --------------------------------
Name popup
 ----------------------------------*/

/*
This checks if there is a name, if not then the name popup gets triggered
*/
function popup() {
    if (name === "") {
        openName();
    }
}
popup();

/*
This is used to open and close the name popup
*/
function closeName() {
    document.querySelector("#blur").style.opacity = "0";
    document.querySelector("#blur").style.zIndex = "-1";
    document.querySelector("#name_box").style.opacity = "0";
    document.querySelector("#name_box").style.zIndex = "-2";
}

function openName() {
    document.querySelector("#blur").style.opacity = "1";
    document.querySelector("#blur").style.zIndex = "10";
    document.querySelector("#name_box").style.opacity = "1";
    document.querySelector("#name_box").style.zIndex = "11";
}

/*
This is used to set the name of the player
*/
function setName() {
    document.querySelector("#name").innerHTML = document.querySelector("#set_name").value;
    name = document.querySelector("#set_name").value;

    localStorage['name'] = name;
    document.querySelector("#name").textContent = name;

    if (name === "") {
        document.querySelector("#name_missing").style.opacity = "1";
        document.querySelector("#name_missing").style.height = "auto";
    }else {
        closeName();
        document.querySelector("#name_missing").style.opacity = "0";
        document.querySelector("#name_missing").style.height = "0";
    }
}

/* --------------------------------
Disc switching and buying
 ----------------------------------*/

/*
This is used to switch to the red disc (its madle like this because of how it the starting record and that u dont need to buy it)
*/
function red() {

    activeDisc = "1";
    localStorage['disc'] = activeDisc;
    setDisc("none", 10, 60);
}

/*
All this is used to check which disc you are selecting or trying to buy
*/
function disc(discColor, discNumber, price, discText, color, hue, discLimit, discSpeed){

    discColor = localStorage[color];

    if(discColor === 'true'){
        activeDisc = discNumber;
        localStorage['disc'] = activeDisc;
        setDisc(hue, discLimit, discSpeed);
    }
    else{
        if (price <= notes){
            notes -= price;
            localStorage['score'] = notes;
            document.querySelector("#numbers").textContent = notes;
            document.querySelector(discText).style.opacity = "0";
            discColor = 'true';
            localStorage[color] = discColor;
            setDisc(hue, discLimit, discSpeed)
            activeDisc = discNumber;
            localStorage['disc'] = activeDisc;
        }
    }
}

/*
This checks and switches the active disc
*/
function setDisc(setHue, setDiscLimit, setDiscSpeed){
    document.querySelector("#record").style.filter = setHue;
    limit = setDiscLimit;
    speed = setDiscSpeed;
}

/*
This checks on start which disc the player has unlocked
*/
function Check(checkColor, text) {
    if (checkColor === "true") {
        document.querySelector(text).style.opacity = "0";
    }
}
Check(greenDisc, '#green_text');
Check(blueDisc, '#blue_text');
Check(pinkDisc, '#pink_text');
Check(grayDisc, '#gray_text');
Check(brokenDisc, '#broken_text');

/*
This checks what the last active disc was and switches to it on start
*/
function whatDisc(){
    activeDisc = localStorage['disc'] || '1';
    if (activeDisc === '1') {
        setDisc('none', 10, 60);
    }
    if (activeDisc === '2') {
        setDisc('hue-rotate(140deg)', 15, 55);
    }
    if (activeDisc === '3') {
        setDisc('hue-rotate(240deg)', 25, 45);
    }
    if (activeDisc === '4') {
       setDisc('hue-rotate(310deg)', 50, 35);
    }
    if (activeDisc === '5') {
        setDisc('grayscale(100%)', 75, 25);
    }
    if (activeDisc === '6') {
        setDisc('invert(75%)', 99, 10);
    }
}
whatDisc();

/* --------------------------------
Items and buildings buying
 ----------------------------------*/