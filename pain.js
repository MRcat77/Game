let notes = localStorage['score'] || '0';
document.querySelector("#counter").textContent = notes;

function Point()
{
    notes++
    localStorage['score'] = notes; // only strings
    console.log(notes)
    document.querySelector("#counter").textContent = notes;
}

function Beat()
{
    document.querySelector("#beat").style.opacity = "1";
}
