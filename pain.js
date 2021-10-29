let notes = localStorage['score'] || '0';
document.querySelector("#numbers").textContent = notes;
let name = localStorage['name'] || '';
document.querySelector("#studio_name").textContent = name;



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
        left = 0;
    }else {
        combo = 1;
        notes++;
    }

    localStorage['score'] = notes; // only strings
    document.querySelector("#numbers").textContent = notes;

    console.log(notes);
    console.log(combo);
}

function clear()
{
    name = "none";
    notes = 0;
    combo = 0;
    document.querySelector("#numbers").textContent = notes;
    document.querySelector("#studio_name").textContent = name;
}

let beat = document.querySelector("#beat");
let left = 100;
let id = setInterval(frame, 35);

function frame() {
    if (left === 0) {
        beat.style.left = 100 + "%";
        left = 100;
        frame();
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
