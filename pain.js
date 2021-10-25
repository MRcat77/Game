let notes = localStorage['score'] || '0';
document.querySelector("#counter").textContent = notes;


let combo = 1;
let limit = 5;

function Point()
{
    if(combo === limit){
        combo = 5;
        notes = combo + notes;
    }else if (left >= 45 && left <= 55){
        combo = combo + 1;
        notes = combo + notes++;
    }else {
        combo = 1;
        notes++;
    }

    localStorage['score'] = notes; // only strings
    document.querySelector("#counter").textContent = notes;

    //console.log(notes);
    //console.log(combo);
}

function clear()
{
    notes = 0;
    combo = 0;
    document.querySelector("#counter").textContent = notes;
}

let elem = document.getElementById("beat");
let left = 100;
let id = setInterval(frame, 35);

function frame() {
    if (left === 0) {
        elem.style.left = 100 + "%";
        left = 100;
        frame();
    } else {
        left--;
        elem.style.left = left + "%";
    }
}

function popup()
{
    document.querySelector("#blur").style.display="none";
}


// use the left % to check when the player should click the record to get a combo


