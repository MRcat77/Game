let notes = localStorage['score'] || '0';
document.querySelector("#counter").textContent = notes;

function Point()
{
    notes++
    localStorage['score'] = notes; // only strings
    console.log(notes)
    document.querySelector("#counter").textContent = notes;
}

let elem = document.querySelector("#beat")
let pos = 100;

function Beat()
{
    document.querySelector("#beat").style.opacity = "1";
    if (pos === 0)
    {
        document.querySelector("#beat").style.opacity = "0";
        pos = 100;
    }else{
        pos--;
        elem.style.left = pos + "%";
    }
}

//use the left % to check when the player should click the record to get a combo


