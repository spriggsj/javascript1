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

function newFunction (){
var favMovie = prompt("enter your favorite movie");
var favFood = prompt("enter your favorite food");
var petName = prompt("enter the name of your favorite pet");
var con = (favMovie + ' ' + favFood + ' ' + petName);

console.log(  favMovie + ", " + favFood + ", " + petName);
 document.getElementById("pet").innerHTML = con;
}

var myLogic = 0;
var a = 1;
var b = 1;
if(a < b){
  console.log("true");
} else {
  console.log("false")
}

var myLogic = 0;
var a = 1;
var b = 3;
var c = false;
if((a < b) && c){
  console.log("true");
} else {
  console.log("false")
}

var myLogic = 0;
var a = 1;
var b = 3;
var c = false;
var d = true;
if((a < b) && c || d){
  console.log("true");
} else {
  console.log("false")
}

var myLogic = 0;
var a = 1;
var b = 3;
var c = false;
var d = true;
if((a < b) && (c || d)){
  console.log("true");
} else {
  console.log("false")
}

/*function ageFunction () {
var yBorn = prompt("enter year born 1973");
var  age = 2015 - yBorn;
if (age < 18){
  console.log("you are a teen")
} else (age > 18){
  console.log("you are old")

alert(age);}*/


function ageFunction (){
var yBorn = prompt("enter year born 1973");
var  age = 2015 - yBorn;
if (age < 18){
  console.log("you are a teen");
} else (age > 18);
  console.log("you are old");

alert(age);
document.getElementById("old").innerHTML = (age);
}

function switcheroo (){
var character = prompt("enter a, b, c");
var characterLowerCase = character.toLowerCase();
if(!isNaN(character)){

  alert('only numbers please');
} else {
switch (character) {
  case "a":
    alert("you entered 'a'");
    break;
  case "b":
    alert("you entered 'b'");
    break;
  case "c":
    alert("you entered 'c'");
    break;
  default:
    alert("I said a b or c");  
}
}
}

/*Prompt the user for something that they would like to do.
Make sure that the user actually types something.
If the user has not typed anything, alert them that they need to type something and then terminate the program.
If they have input a to-do item, alert the user with the item and console log it.
*/

function doit (){
var a = prompt("What would you like to do?");
  if (a == null || a == "") {
  console.log("please enter something to do");
      
  }else{
  console.log(a);
  }
}

