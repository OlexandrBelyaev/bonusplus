var i=0;
function openSearch() {
if (i===0){
  document.getElementById("myOverlay").style.display = "block";i=1;
  document.getElementById("myTopnav").style.display = "none";
  }
else{closeSearch();i=0;}
}
function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
  document.getElementById("myTopnav").style.display = "block"; 
}
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}