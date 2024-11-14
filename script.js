const DO = new Audio("./sound/do.mp3");
const RE = new Audio("./sound/re.mp3");
const MI = new Audio("./sound/mi.mp3");
const FA = new Audio("./sound/fa.mp3");
const SOL = new Audio("./sound/sol.mp3");
const LA = new Audio("./sound/la.mp3");
const SI = new Audio("./sound/si.mp3");

document.getElementById("do").addEventListener("click", function () {
  DO.play();
});
document.getElementById("ré").addEventListener("click", function () {
  RE.play();
});
document.getElementById("mi").addEventListener("click", function () {
  MI.play();
});
document.getElementById("fa").addEventListener("click", function () {
  FA.play();
});
document.getElementById("sol").addEventListener("click", function () {
  SOL.play();
});
document.getElementById("la").addEventListener("click", function () {
  LA.play();
});
document.getElementById("si").addEventListener("click", function () {
  SI.play();
});
