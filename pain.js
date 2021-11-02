let notes = localStorage['score'] || '0';
document.querySelector("#numbers").textContent = notes;
let name = localStorage['name'] || '';
document.querySelector("#studio_name").textContent = name;
let greenDisc = localStorage[`green`] || 'false';
let blueDisc = localStorage[`blue`] || 'false';
let pinkDisc = localStorage[`pink`] || 'false';
let grayDisc = localStorage[`gray`] || 'false';
let brokenDisc = localStorage[`broken`] || 'false';



let combo = 1;
let limit = 5;

function Point()
{
    if(combo === limit){
        if(left >= 45 && left <= 55){
            combo = 5;
            notes = combo + notes;
            left = 0;
        }else{
            combo = 1;
            notes = combo + notes;
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
setInterval(frame, 35);

function frame() {
    if (left === 0) {
        beat.style.left = 100 + "%";
        left = 100;
        frame();
        combo = 1;
        document.querySelector("#combo").textContent = combo + "X";
    } else {
        left--;
        beat.style.left = left + "%";
    }
}



window.onload = function popup() {
    if (name === "") {
        openName();
    } else {
    }
}

function closeName(){
    document.querySelector("#blur").style.opacity = "0";
    document.querySelector("#blur").style.zIndex = "-1";
    document.querySelector("#name_box").style.opacity = "0";
    document.querySelector("#name_box").style.zIndex = "-2";
}

function openName(){
    document.querySelector("#blur").style.opacity = "1";
    document.querySelector("#blur").style.zIndex = "10";
    document.querySelector("#name_box").style.opacity = "1";
    document.querySelector("#name_box").style.zIndex = "11";
}

function setName(){
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

window.onload = function discCheck(){
    greenCheck();
    blueCheck();
    pinkCheck();
}

let activeDisc = "1";

///////////////////////////////
//    Green record disk     //
//////////////////////////////
let greenPrice = document.querySelector("#green_text").textContent;

function green(){

    if (greenDisc === "true") {
        activeDisc = "2";
    }
    else {
        if (greenPrice <= notes) {
            notes -= greenPrice;
            localStorage['score'] = notes;
            document.querySelector("#numbers").textContent = notes;
            document.querySelector("#green_text").style.opacity = "0";
            greenDisc = "true";
            localStorage['green'] = greenDisc;
        }
    }
}

function greenCheck(){
    if (greenDisc === "true"){
        document.querySelector("#green_text").style.opacity = "0";
    }
}

///////////////////////////////
//    Blue record disk      //
//////////////////////////////

let bluePrice = document.querySelector("#blue_text").textContent;

function blue(){

    if (blueDisc === "true") {
        activeDisc = "3";
    }
    else {
        if (bluePrice <= notes) {
            notes -= bluePrice;
            localStorage['score'] = notes;
            document.querySelector("#numbers").textContent = notes;
            document.querySelector("#blue_text").style.opacity = "0";
            blueDisc = "true";
            localStorage['blue'] = blueDisc;
        }
    }
}

function blueCheck(){
    if (blueDisc === "true"){
        document.querySelector("#blue_text").style.opacity = "0";
    }
}

///////////////////////////////
//    Pink record disk      //
//////////////////////////////
let pinkPrice = document.querySelector("#pink_text").textContent;

function pink(){

    if (pinkDisc === "true") {
        activeDisc = "4";
    }
    else {
        if (pinkPrice <= notes) {
            notes -= pinkPrice;
            localStorage['score'] = notes;
            document.querySelector("#numbers").textContent = notes;
            document.querySelector("#pink_text").style.opacity = "0";
            pinkDisc = "true";
            localStorage['pink'] = pinkDisc;
        }
    }
}

function pinkCheck(){
    if (pinkDisc === "true"){
        document.querySelector("#pink_text").style.opacity = "0";
    }
}