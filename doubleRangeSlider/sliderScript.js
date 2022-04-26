window.onload = function () {
  slideOne();
  slideTwo();
  slideThree();
  slideFour();
}

//slide one
let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 0;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;

function slideOne() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderOne.value = parseInt(sliderTwo.value) - minGap;
  }
  displayValOne.textContent = sliderOne.value;
  fillColor();
}
function slideTwo() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderTwo.value = parseInt(sliderOne.value) + minGap;
  }
  displayValTwo.textContent = sliderTwo.value;
  fillColor();
}
function fillColor() {
  percent1 = (sliderOne.value / sliderMaxValue) * 100;
  percent2 = (sliderTwo.value / sliderMaxValue) * 100;
  sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
}
//slide one end

/*slide two - breaks the code for slide one and is nonfunctioning for slide two

let sliderThree = document.getElementById("slider-3");
let sliderFour = document.getElementById("slider-4");
let displayValThree = document.getElementById("range3");
let displayValFour = document.getElementById("range4");
let minGap = 0;
let sliderTrack2 = document.querySelector(".slider-track2");
let sliderMaxValue = document.getElementById("slider-3").max;

function slideThree() {
  if (parseInt(sliderFour.value) - parseInt(sliderThree.value) <= minGap) {
    sliderThree.value = parseInt(sliderFour.value) - minGap;
  }
  displayValThree.textContent = sliderThree.value;
  fillColor();
}
function slideFour() {
  if (parseInt(sliderFour.value) - parseInt(sliderThree.value) <= minGap) {
    sliderFour.value = parseInt(sliderThree.value) + minGap;
  }
  displayValFour.textContent = sliderFour.value;
  fillColor();
}
function fillColor() {
  percent1 = (sliderThree.value / sliderMaxValue) * 100;
  percent2 = (sliderFour.value / sliderMaxValue) * 100;
  sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
*/
