/*alert("hey");
Jason Spriggs 10/4 
var n1 = 12;
var n2 = 0x1e;
var answer = "Answer = ";
var n3 = n1 + n2;

console.log(answer +n3);
*/

function addNum (){
var n1 = 12;
var n2 = 0x1e;
var answer = "Answer = ";
var n3 = n1 + n2;
   console.log(answer + n3);
  
  var result = document.getElementById("demo1").innerHTML = (answer + n3);}


function myFunction (){
var firstName = prompt("enter your first name");
var lastName = prompt("enter your last name");
confirm(firstName);
alert(lastName);

   console.log (firstName);
  
  var lname = document.getElementById("demo").innerHTML = lastName;}

  function numFunction (){
var firstNum = prompt("enter a number", 10);
var a = parseInt(firstNum);
var secondNum = prompt("enter another number", 10);
var b = parseInt(secondNum);
  
var c = (a + b);
  
var d = alert(c);
  
var result = document.getElementById("result").innerHTML = a + " plus "+ b +" equals " + c;
  
}



function myFunction5() {
    var x;
    if (confirm("Press a button!") == true) {
        x = "You pressed OK or value true";
    } else {
        x = "You pressed Cancel or value false";
    }
    document.getElementById("confirmValue").innerHTML = x;
}

