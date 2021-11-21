


let combo = 1;
let limit = 10;

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
        }
    }else if (left >= 45 && left <= 55){
        combo = combo + 1;
        notes = combo + notes++;
        left = 100;
    }else {
        combo = 1;
        notes++;
    }

    localStorage['score'] = notes; // only strings
    document.querySelector("#numbers").textContent = notes;

    document.querySelector("#combo").textContent = combo + "X";

    console.log(notes);
    console.log(combo);
}


let beat = document.querySelector("#beat");
let left = 100;
let speed = 60; // amount of milliseconds between every call of frame()



function frame() {
    if (left === 0) {
        combo = 1;
        beat.style.left = 100 + "%";
        left = 100;
        //frame();
        document.querySelector("#combo").textContent = combo + "X";
    } else {
        left--;
        beat.style.left = left + "%";
        //setTimeout(speed), 2000;
    }

    setTimeout(function () {
        frame()
    }, speed)
}

frame()


function popup() {
    if (name === "") {
        openName();
    }
}
popup();

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

function setName() {
    document.querySelector("#studio_name").innerHTML = document.querySelector("#name").value;
    name = document.querySelector("#name").value;

    localStorage['name'] = name;
    document.querySelector("#studio_name").textContent = name;

    if (name === "") {
        document.querySelector("#name_missing").style.opacity = "1";
        document.querySelector("#name_missing").style.height = "auto";
    }else {
        closeName();
        document.querySelector("#name_missing").style.opacity = "0";
        document.querySelector("#name_missing").style.height = "0";
    }
}

function discCheck(){
    greenCheck();
    blueCheck();
    pinkCheck();
    grayCheck();
    brokenCheck();
}
discCheck();

///////////////////////////////
//    Red record disk       //
//////////////////////////////

function red() {

    activeDisc = "1";
    localStorage['disc'] = activeDisc;
    setRed();
}

function setRed(){
    document.querySelector("#record").style.filter = "none";
    limit = 10;
    speed = 60;
}

///////////////////////////////
//    Green record disk     //
//////////////////////////////
let greenPrice = document.querySelector("#green_text").textContent;

function green() {

    if (greenDisc === "true") {
        activeDisc = "2";
        localStorage['disc'] = activeDisc;
        setGreen();
    }
    else {
        if (greenPrice <= notes) {
            notes -= greenPrice;
            localStorage['score'] = notes;
            document.querySelector("#numbers").textContent = notes;
            document.querySelector("#green_text").style.opacity = "0";
            greenDisc = "true";
            localStorage['green'] = greenDisc;
            setGreen();
            activeDisc = "2";
            localStorage['disc'] = activeDisc;
        }
    }
}

function greenCheck() {
    if (greenDisc === "true"){
        document.querySelector("#green_text").style.opacity = "0";
    }
}

function setGreen(){
    document.querySelector("#record").style.filter = "hue-rotate(140deg)";
    limit = 15;
    speed = 55;
}

///////////////////////////////
//    Blue record disk      //
//////////////////////////////

let bluePrice = document.querySelector("#blue_text").textContent;

function blue() {

    if (blueDisc === "true") {
        activeDisc = "3";
        localStorage['disc'] =activeDisc;
        setBlue();
    }
    else {
        if (bluePrice <= notes) {
            notes -= bluePrice;
            localStorage['score'] = notes;
            document.querySelector("#numbers").textContent = notes;
            document.querySelector("#blue_text").style.opacity = "0";
            blueDisc = "true";
            localStorage['blue'] = blueDisc;
            setBlue();
            activeDisc = "3";
            localStorage['disc'] =activeDisc;
        }
    }
}

function blueCheck() {
    if (blueDisc === "true"){
        document.querySelector("#blue_text").style.opacity = "0";
    }
}

function setBlue(){
    document.querySelector("#record").style.filter = "hue-rotate(240deg)";
    limit = 25;
    speed = 45;
}

///////////////////////////////
//    Pink record disk      //
//////////////////////////////
let pinkPrice = document.querySelector("#pink_text").textContent;

function pink() {

    if (pinkDisc === "true") {
        activeDisc = "4";
        localStorage['disc'] =activeDisc;
        setPink();
    }
    else {
        if (pinkPrice <= notes) {
            notes -= pinkPrice;
            localStorage['score'] = notes;
            document.querySelector("#numbers").textContent = notes;
            document.querySelector("#pink_text").style.opacity = "0";
            pinkDisc = "true";
            localStorage['pink'] = pinkDisc;
            setPink();
            activeDisc = "4";
            localStorage['disc'] =activeDisc;
        }
    }
}

function pinkCheck() {
    if (pinkDisc === "true") {
        document.querySelector("#pink_text").style.opacity = "0";
    }

}

function setPink(){
    document.querySelector("#record").style.filter = "hue-rotate(310deg)";
    limit = 50;
    speed = 35;
}

///////////////////////////////
//    Gray record disk      //
//////////////////////////////
let grayPrice = document.querySelector("#gray_text").textContent;

function gray() {

    if (grayDisc === "true") {
        activeDisc = "5";
        localStorage['disc'] =activeDisc;
        setGray();
    }
    else {
        if (grayPrice <= notes) {
            notes -= grayPrice;
            localStorage['score'] = notes;
            document.querySelector("#numbers").textContent = notes;
            document.querySelector("#gray_text").style.opacity = "0";
            grayDisc = "true";
            localStorage['gray'] = grayDisc;
            setGray();
            activeDisc = "5";
            localStorage['disc'] = activeDisc;
        }
    }
}

function grayCheck() {
    if (grayDisc === "true") {
        document.querySelector("#gray_text").style.opacity = "0";
    }
}

function setGray(){
    document.querySelector("#record").style.filter = "grayscale(100%)";
    limit = 75;
    speed = 25;
}


///////////////////////////////
//    Broken record disk    //
//////////////////////////////
let brokenPrice = document.querySelector("#broken_text").textContent;

function broken() {

    if (brokenDisc === "true") {
        activeDisc = "6";
        localStorage['disc'] =activeDisc;
        setBroken();
    }
    else {
        if (brokenPrice <= notes) {
            notes -= brokenPrice;
            localStorage['score'] = notes;
            document.querySelector("#numbers").textContent = notes;
            document.querySelector("#broken_text").style.opacity = "0";
            brokenDisc = "true";
            localStorage['broken'] = brokenDisc;
            setBroken();
            activeDisc = "6";
            localStorage['disc'] = activeDisc;
        }
    }
}

function brokenCheck() {
    if (brokenDisc === "true") {
        document.querySelector("#broken_text").style.opacity = "0";
    }
}

function setBroken(){
    document.querySelector("#record").style.filter = "invert(75%)";
    limit = 99;
    speed = 10;

}

function whatDisc() {
    activeDisc = localStorage['disc'] || '1';
    if (activeDisc === '1') {
        setRed();
    }
    if (activeDisc === '2') {
        setGreen();
    }
    if (activeDisc === '3') {
        setBlue();
    }
    if (activeDisc === '4') {
        setPink();
    }
    if (activeDisc === '5') {
        setGray();
    }
    if (activeDisc === '6') {
        setBroken();
    }
}
whatDisc();

function item_buy(){

}