function roll() {
  var totals = [0, 0, 0, 0, 0, 0];

  var iterations = document.getElementById('iterations').value;
  var n = parseInt(iterations);

  for (var i = 0; i < n; i++) {
    roll = Math.floor(1 + Math.random() * 6);
    switch (roll) {
      case 1:
        ++totals[0];
        document.getElementById('frequency-one').innerHTML = totals[0];
        break;
      case 2:
        ++totals[1];
        document.getElementById('frequency-two').innerHTML = totals[1];
        break;
      case 3:
        ++totals[2];
        document.getElementById('frequency-three').innerHTML = totals[2];
        break;
      case 4:
        ++totals[3];
        document.getElementById('frequency-four').innerHTML = totals[3];
        break;
      case 5:
        ++totals[4];
        document.getElementById('frequency-five').innerHTML = totals[4];
        break;
      case 6:
        ++totals[5];
        document.getElementById('frequency-six').innerHTML = totals[5];
        break;
    }
  }
}