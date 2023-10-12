var txt = "";

function message() {
  try {
    aalert("Welcome to this website");
  } catch(e) {
    text = `There was an error on this page!\n\nError description :: ${e.message}\n\nClick OK to continue viewing this page with errors\nClick Cancel to goto google.co.uk\n\n`;
    if (!confirm(text)) {
      document.location.href = "http://www.google.co.uk";
    }
  }
}

function getNumber() {
  var num = parseInt(document.getElementById('number'));

  try {
    if (num > 5) {
      throw("Number is greater than 5");
    } else if (isNaN(num)) {
      throw("You did not enter a number!");
    }
  } catch(e) {
    alert(`Error :: ${e}`);
  } finally {
    alert("You entered: " + num);
  }
}