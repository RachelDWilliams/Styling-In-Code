
var modal = document.getElementsByClassName("modalContainer");

var img = document.getElementsByClassName("modalThumb");

var scn = document.getElementsByClassName("screen");


img[0].onclick = function() {
  modal[0].style.display = "flex";
  scn[0].style.display = "block";
}

img[1].onclick = function() {
    modal[1].style.display = "flex";
    scn[0].style.display = "block";
}

  img[2].onclick = function() {
    modal[2].style.display = "flex";
    scn[0].style.display = "block";
}

img[3].onclick = function() {
    modal[3].style.display = "flex";
    scn[0].style.display = "block";
}

img[4].onclick = function() {
    modal[4].style.display = "flex";
    scn[0].style.display = "block";
}

window.onclick = function(event) {
    console.log(event.target);
  if (event.target == scn[0]) {
    modal[0].style.display = "none";
    modal[1].style.display = "none";
    modal[2].style.display = "none";
    modal[3].style.display = "none";
    modal[4].style.display = "none";
    scn[0].style.display = "none";
    console.log("sex");
  }
}