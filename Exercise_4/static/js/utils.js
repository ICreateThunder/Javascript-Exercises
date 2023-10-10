function clickAbout() {
  alert('You clicked on about');
}

function clickArticle() {
  alert('you clicked on article!');
}
function clickCopy() {
  alert('you clicked on copyright!');
}

var element1 = document.getElementById("about");
var element2 = document.getElementById("article");
var element3 = document.getElementById("copy");

element1.addEventListener('click', clickAbout, false);
element2.addEventListener('click', clickArticle, false);
element3.addEventListener('click', clickCopy, false);