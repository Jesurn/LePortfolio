let curGmap = 0;
const gmapCanvas = document.getElementById("gmap_canvas");
const gNext = document.getElementById("gmap-next");
const gPrev = document.getElementById("gmap-prev");
const gmapsArr = ["https://maps.google.com/maps?q=Ge'ula%20Street,%20Pardes%20Hanna-Karkur,%20Israel&t=&z=13&ie=UTF8&iwloc=&output=embed",
    "https://maps.google.com/maps?q=paris&t=&z=13&ie=UTF8&iwloc=&output=embed",
    "https://maps.google.com/maps?q=tel%20aviv&t=&z=13&ie=UTF8&iwloc=&output=embed",
    "https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed",
    "https://maps.google.com/maps?q=Lawrence%20Kansas%20%20USA&t=&z=13&ie=UTF8&iwloc=&output=embed"];

displayCurrentGmap(0);

function displayCurrentGmap(gmap) {
    gmapCanvas.src = gmapsArr[gmap];

    if (curGmap === 0) {
        gPrev.classList.add("gmap-btn-disabled");
        gPrev.classList.remove("gmap-btn-activated");
    } else {
        gPrev.classList.remove("gmap-btn-disabled");
        gPrev.classList.add("gmap-btn-activated");
    }

    if (curGmap === gmapsArr.length - 1) {
        gNext.classList.add("gmap-btn-disabled");
        gNext.classList.remove("gmap-btn-activated");
    } else {
        gNext.classList.remove("gmap-btn-disabled");
        gNext.classList.add("gmap-btn-activated");
    }
}

function gmapPrevBtn() {
    if (curGmap === 0) return;
    curGmap--;
    displayCurrentGmap(curGmap);
}

function gmapNextBtn() {
    if (curGmap === gmapsArr.length - 1) return;
    curGmap++;
    displayCurrentGmap(curGmap);
}