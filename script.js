const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
   menu.classList.toggle("active");
});
//text font-weight change
const button = document.getElementById("toggle");
const yearBill = document.getElementById("billing-two");
const monthBill = document.getElementById("billing-one");

button.addEventListener("click", () => {
   yearBill.classList.toggle("selected");
   monthBill.classList.toggle("selected");
});
