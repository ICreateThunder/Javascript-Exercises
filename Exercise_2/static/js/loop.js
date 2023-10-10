function loop() {
  var iterations = document.getElementById('iterations').value;
  var n = parseInt(iterations);

  for (var i = 0; i < n; i++) {
    var line = `The counter is currently: ${i} <br />`
    document.getElementById('output').innerHTML += line;
  }
}

function reset() {
  document.getElementById('output').innerHTML = "";
}