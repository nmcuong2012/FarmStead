//switch theme button
document.getElementById("switchButton").onclick = function () {
    document.getElementById("myBody").classList.toggle("dark");
    document.getElementById("site-header").classList.toggle("dark");
};

//scroll header
var className = "inverted";
var scrollTrigger = 60;

window.onscroll = function() {
// We add pageYOffset for compatibility with IE.
if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
document.getElementsByTagName("header")[0].classList.add(className);
} else {
document.getElementsByTagName("header")[0].classList.remove(className);
}
};