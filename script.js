var prev = document.getElementById("prev");
var next = document.getElementById("next");
var hero = document.getElementById("hero")
var thumbnail = document.getElementsByClassName("thumbnail")

var backgroundimg = new Array(
    "images/i1.png",
    "images/i2.png",
    "images/i3.jpg",
    "images/i4.jpg",
    "images/i5.png",
    "images/i6.jpg",
    "images/i8.jpg",
);
let i = 0;
next.onclick = function () {
    if (i < 6) {
        hero.style.backgroundImage = 'url("' + backgroundimg[i + 1] + '")';
        thumbnail[i+1].classList.add("active");
        thumbnail[i].classList.remove("active");
        i++;
    }
};
prev.onclick = function () {
    if (i > 0) {
        hero.style.backgroundImage = 'url("' + backgroundimg[i - 1] + '")';
        thumbnail[i-1].classList.add("active");
        thumbnail[i].classList.remove("active");
        i--;
    }
};