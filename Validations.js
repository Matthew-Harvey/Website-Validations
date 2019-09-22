<!DOCTYPE HTML>
<html>
<body>

<h2>JavaScript Validations</h2>

<p>Please input a number between 1 and 10:</p>

<input id="numb">

<button type="button" onclick="myFunction()">Submit</button>

<p id="demo"></p>

<p>Please input a number between 20 and 30:</p>

<input id="nothing">

<button type="button" onclick="myFunction2()">Submit</button>

<p id="demo2"></p>

<script>
function myFunction() {
  var x, text;

  // Get the value of the input field with id="numb"
  x = document.getElementById("numb").value;

  // If x is Not a Number or less than one or greater than 10
  if (isNaN(x) || x < 1 || x > 10) {
    text = "Input invalid";
  } else {
    text = "Input valid";hu z
  }
  document.getElementById("demo").innerHTML = text;
}

function myFunction2() {
  var x, text;

  // Get the value of the input field with id="numb"
  x = document.getElementById("nothing").value;

  // If x is Not a Number or less than 20 or greater than 30
  if (isNaN(x) || x < 20 || x > 30) {
    text = "Input invalid";
  } else {
    text = "Input valid";
  }
  document.getElementById("demo2").innerHTML = text;
}
</script>

</body>
</html> 
