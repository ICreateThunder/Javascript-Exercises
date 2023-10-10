function addNumbers() {
  var a = parseInt(document.getElementById('numA').value);
  var b = parseInt(document.getElementById('numA').value);
  var sum = a + b;
  document.getElementById('result').innerHTML = sum;
  return sum;
}