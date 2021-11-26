/* --------------------------------
Local storage stuff
 ----------------------------------*/
let notes = localStorage['score'] || '0';
document.querySelector("#numbers").textContent = notes;
let name = localStorage['name'] || '';
document.querySelector("#name").textContent = name;

//Discs
let activeDisc = localStorage['disc'] || '1';
let greenDisc = localStorage['green'] || 'false';
let blueDisc = localStorage['blue'] || 'false';
let pinkDisc = localStorage['pink'] || 'false';
let grayDisc = localStorage['gray'] || 'false';
let brokenDisc = localStorage['broken'] || 'false';

let greenUnlocked = localStorage['greenLock'] || 'false';
let blueUnlocked = localStorage['blueLock'] || 'false';
let pinkUnlocked = localStorage['pinkLock'] || 'false';
let grayUnlocked = localStorage['grayLock'] || 'false';
let brokenUnlocked = localStorage['brokenLock'] || 'false';

//Upgrades
let garage = localStorage['garage'] || 'false';
let equipment = localStorage['equipment'] || 'false';
let equipmentUpgrade = localStorage['equipment_upgrade'] || 'false';
let studio = localStorage['studio'] || 'false';

let garageUnlocked = localStorage['garageLock'] || 'false';
let equipmentUnlocked = localStorage['equipmentLock'] || 'false';
let equipmentUpgradeUnlocked = localStorage['equipmentUpgradeLock'] || 'false';
let studioUnlocked = localStorage['studioLock'] || 'false';

let micUnlocked = localStorage['micLock'] || 'false';
let turntableUnlocked = localStorage['turntableLock'] || 'false';
let radioUnlocked = localStorage['radioLock'] || 'false';
let speakerUnlocked = localStorage['speakerLock'] || 'false';
let albumUnlocked = localStorage['albumLock'] || 'false';

let mic =localStorage['mic'] || '0';
let turntable = localStorage['turntable'] || '0';
let radio = localStorage['radio'] || '0';
let speaker = localStorage['speaker'] || '0';
let album = localStorage['album'] || '0';

let micPrice = localStorage['micPrice'] || '250';
let turntablePrice = localStorage['turntablePrice'] || '750';
let radioPrice = localStorage['radioPrice'] || '1150';
let speakerPrice = localStorage['speakerPrice'] || '2250';
let albumPrice = localStorage['albumPrice'] || '5000';

/* --------------------------------
Checks an loads
 ----------------------------------*/

/*
This checks of what items has been unlocked
*/
function unlocks(upgrade, upgradeLocal){
    let item = localStorage[upgradeLocal];
    if(item === "true"){
        document.querySelector(upgrade).style.opacity = "1";
        document.querySelector(upgrade).style.zIndex = "10";
    }
}
//upgrades
unlocks('#garage', 'garageLock');
unlocks('#equipment', 'equipmentLock');
unlocks('#equipment_upgrade', 'equipmentUpgradeLock');
unlocks('#studio', 'studioLock');
//discs
unlocks('#green', 'greenLock');
unlocks('#blue', 'blueLock');
unlocks('#pink', 'pinkLock');
unlocks('#gray', 'grayLock');
unlocks('#broken', 'brokenLock');


/*
This checks of what upgrades hve been bought
*/
function upgradeBought(upgrade, upgradeLocal){
    let item = localStorage[upgradeLocal];
    if(item === "true"){
        document.querySelector(upgrade).style.opacity = "0";
        document.querySelector(upgrade).style.width = "0";
        document.querySelector(upgrade).style.height = "0";
    }
}
upgradeBought('#garage', 'garage');
upgradeBought('#equipment', 'equipment');
upgradeBought('#equipment_upgrade', 'equipmentUpgrade');
upgradeBought('#studio', 'studio');


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
This checks which disc the player has bought
*/
function diskBought(checkColor, text) {
    if (checkColor === "true") {
        document.querySelector(text).style.opacity = "0";
    }
}
diskBought(greenDisc, '#green_text');
diskBought(blueDisc, '#blue_text');
diskBought(pinkDisc, '#pink_text');
diskBought(grayDisc, '#gray_text');
diskBought(brokenDisc, '#broken_text');

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

function unlockedDisc(unlockColor, color) {
    if (unlockColor === "true") {
        document.querySelector(color).style.opacity = "0";
        document.querySelector(color).style.zIndex = "10";
    }
}

/* --------------------------------
Upgrade buying and loading
 ----------------------------------*/

function upgrade(upgrade, upgradeLocal, price, item1, local1, item2, local2, item3, local3){
   let item = localStorage[upgradeLocal]
    if(item === "true"){
    }else{
        if(price <= notes){
            notes -= price;
            localStorage['score'] = notes;
            document.querySelector("#numbers").textContent = notes;
            upgradeBuy(item1, local1);
            upgradeBuy(item2, local2);
            upgradeBuy(item3, local3);
            localStorage[upgradeLocal] = "true";
            upgradeBought(upgrade ,upgradeLocal);
        }
    }
}

function upgradeBuy(item, local) {
    document.querySelector(item).style.opacity = "1";
    document.querySelector(item).style.zIndex = "1000";
    localStorage[local] = "true";
}

/* --------------------------------
Building checks and buying
 ----------------------------------*/

function nps(){

}



function buildingBuy(buildingPrice, buildingAmount, buildingLocal, buildingPriceLocal){
    let amount = localStorage[buildingLocal];
    let price = localStorage[buildingPriceLocal] ;
    if(price <= notes){
        notes -= price;
        localStorage['score'] = notes;
        document.querySelector("#numbers").textContent = notes;
        price = 1.25 * price;
        price = Math.round(price);
        localStorage[buildingPriceLocal] = price
        amount++;
        localStorage[buildingLocal] = amount;
        document.querySelector(buildingAmount).textContent = amount;
        document.querySelector(buildingPrice).textContent = price;
    }
}

function buildingLoad(buildingAmount, buildingPrice, buildingAmountLocal, buildingPriceLocal){
    document.querySelector(buildingAmount).textContent = localStorage[buildingAmountLocal];
    document.querySelector(buildingPrice).textContent = localStorage[buildingPriceLocal];
}
buildingLoad('#mic_amount', '#mic_price', 'mic', 'micPrice')
buildingLoad('#turntable_amount', '#turntable_price', 'turntable', 'turntablePrice')
buildingLoad('#radio_amount', '#radio_price', 'radio', 'radioPrice')
buildingLoad('#speaker_amount', '#speaker_price', 'speaker', 'speakerPrice')
buildingLoad('#album_amount', '#album_price', 'album', 'albumPrice')


function ERROR() {
    document.querySelector("#broken").style.opacity = "1";
    document.querySelector("#broken").style.zIndex = "10";
    localStorage['brokenLock'] = "true";
}