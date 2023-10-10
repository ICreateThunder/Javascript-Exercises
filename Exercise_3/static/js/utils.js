/* Function to sum two or up to 25 numbers from relevant IDs numA - numZ
 * Input: Input fields with id "num{LETTER}" where letter is A-Z (capital)
 * Limitation: 25 numbers max
 * Output: Returns sum and writes to document element "output"
*/
function addNumbers(n) {
  var a = parseInt(document.getElementById('numA').value);
  var b = parseInt(document.getElementById('numB').value);
  var remaining = n - 2;
  if (remaining > 23) {
    console.error("Limit of 25 integers can be added!")
    return;
  }
  var sum = a + b;
  for (remaining; remaining > 0; remaining--) {
    sum += parseInt(document.getElementById(`num${String.fromCharCode(66 + remaining)}`).value);
  }
  document.getElementById('result').innerHTML = sum;
  return sum;
}

/* Function to subtract two or up to 25 numbers from relevant IDs numA - numZ
 * Input: Input fields with id "num{LETTER}" where letter is A-Z (capital)
 * Limitation: 25 numbers max
 * Output: Returns sum and writes to document element "output"
*/
function subNumbers(n) {
  var a = parseInt(document.getElementById('numA').value);
  var b = parseInt(document.getElementById('numB').value);
  var remaining = n - 2;
  if (remaining > 23) {
    console.error("Limit of 25 integers can be added!")
    return;
  }
  var sum = a - b;
  for (remaining; remaining > 0; remaining--) {
    sum -= parseInt(document.getElementById(`num${String.fromCharCode(66 + remaining)}`).value);
  }
  document.getElementById('result').innerHTML = sum;
  return sum;
}