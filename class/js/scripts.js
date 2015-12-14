//Empty array called inputId1
var inputId1  = [];

//Empty array called inputId2
var inputId2  = [];

// Variable inputId1Input that targets the element ID of inputId1(array1)
var inputId1Input  = document.getElementById("inputId1");

// Variable inputId2Input that targets the element ID of inputId2(array2)
var inputId2Input  = document.getElementById("inputId2");

// Variable messageBox that targets the element ID of textOutputId(textarea)
var messageBox  = document.getElementById("textOutputId");


  // function insert called by the button attribute onclick
function insert ( ) {
	// inputId1 with . operator .push that adds to end of array inputId1 
	// The value property sets or returns the value of inputId1Input 
 inputId1.push( inputId1Input.value );

 	// inputId2 with . operator .unshift that adds to the beginning of array inputId2
 	// The value property sets or returns the value of inputId2Input
 inputId2.unshift( inputId2Input.value );
 
  // clearAndShow(); calls the function "clearAndShow"
 clearAndShow();
}

	//function clearAndShow called above at the end of function insert
function clearAndShow () {
  // inputId1Input.value = ""; Clear out fields by setting the value to mt quotes("")
  inputId1Input.value = "";
  // inputId2Input.value = ""; Clear out fields by setting the value to mt quotes("")
  inputId2Input.value = "";
 
  
  // Shows the output
  //var  messageBox then . operator innerHTML asigned empty quotes
  //The innerHTML property sets or returns the HTML content (inner HTML) of an element.
  messageBox.innerHTML = "";
  
  //var  messageBox then . operator innerHTML property sets or returns the HTML content
  // += Assignment operators assign values to JavaScript variables.
  //"Array1: " is a text string, could say anything
  // +  inputId1 concatenates text string to value of inputId1
  // (.join )The join() method joins all elements of an array into a string.
  // (", ")the array elements are separated with a comma and a space. 
  // The "\\\n" was my attempt to start a new line but still kinda wonkey
  messageBox.innerHTML += "Array1: " + inputId1.join(", ") + "\n"; 
  
  // same as above except targets inputId2
  messageBox.innerHTML += "Array2: " + inputId2.join(", ") + "";
}

//*********************************************************************//
//*********************************************************************//

//need to add edge casing

var squareNumber = function(v){
  var digitalInput = document.getElementById('digit');
  var v = digitalInput.value;
  //var c = parseInt(v) ;
  console.log(typeof (v.value));
  digitalInput.value = '';
  if (isNaN (v)|| ""===(v)) {
        alert(NaN);
    }else
	alert(("your number is: ") + (v * v));
	  
};
//*********************************************************************//
//*********************************************************************//
//need to add edge casing

var capId = [];
var capIdInput = document.getElementById("capId");

function insert2 ( ) {
 capId.push( capIdInput.value );
 clearAndShow2();
}

function clearAndShow2 () {
  capIdInput.value = "";
  textOutputId2.innerHTML = "";
  var text = capId[0];
  
  if(isNaN(text[0]) && (text[text.length-1] === ".")) {
    textOutputId2.innerHTML += text[0].toUpperCase() + text.slice(1);}
  
  if(isNaN(text[0]) && (text[text.length-1] !== ".")){
     textOutputId2.innerHTML += text[0].toUpperCase() + text.slice(1) + ".";}
  else if(!isNaN(text[0])) {
    textOutputId2.innerHTML += "Error use alphanumeric characters only";
  } 
 }


//*********************************************************************//
//*********************************************************************//
//need to add edge casing
var silly = [];
var sillyInput = document.getElementById("sillyString");

var word = function(){
 silly.push( sillyInput.value );
 clearAndShow3();
};


function clearAndShow3 () {
  sillyInput.value = "";
  result.innerHTML = "";
  var s = silly[0];
  var s1 = s.length;
  var s2 = Math.floor(s.length / 2);
  var s3 = (s2 * 2);
  var s4 = s.slice(s2,s3 +1);
  var b1 = (s2 );
  var b2 = s.slice(0,b1);
  console.log (s1);
  if(s.length < 2) {
    result.innerHTML += "error please try again";}else {
    
      result.innerHTML += (s4 + b2);
  } 
 }
  
  //********************************************************************//
  var numbers = [];

var numbersInput1 = document.getElementById("one");

var numbersInput2 = document.getElementById("two");

var numbersInput3 = document.getElementById("three");

var numbersInput4 = document.getElementById("four");


function clearAndShow4 () {
  numbersInput1.value = "";
  numbersInput2.value = "";
  numbersInput3.value = "";
  numbersInput4.value = "";
  numbers = [];
}

function combine () {
  numbers.push( numbersInput1.value );
  numbers.push( numbersInput2.value );
  numbers.push( numbersInput3.value );
  numbers.push( numbersInput4.value );
  averageOf4Numbers.innerHTML = "";
  
  if(numbers[0].length !== 1 || numbers[1].length !== 1 || numbers[2].length !== 1 || numbers[3].length !== 1){
    averageOf4Numbers.innerHTML += ( "Please enter 4 positive numbers" );
  }
  else {
    var sum = 0;
    for( var i = 0; i < numbers.length; i++ ){
      sum += parseInt( numbers[i], 10 ); //don't forget to add the base
    }

    var avg = sum/numbers.length;

    averageOf4Numbers.innerHTML += ( "The sum of all the elements is: " + sum + " The average is: " + avg );
  }

  clearAndShow4();
}

  //********************************************************************//



  /*var ave = [];
for(var i = 0; i < 10; i++)
   ave.push(prompt("Enter a number"));
alert (ave);*/

  
//practice substring
function practice(str,num){
  
  if(typeof  str !== "string") {
    return str;
  }
  if(typeof num !== "number"){
    return str;
  }
return str.substring(num, str.length)+ str.substring(0, num);
}
practice("taco", 2);

//*********************************************************************//

//assignment for day 5
/*function averageOf4Numbers(numbers) {
	if (!numbers || typeof numbers !== "object" || numbers.length !== 4) {
        return NaN;
    }
	
	if(typeof numbers[0] !== "number" || typeof numbers[1] !== "number" || typeof numbers[2] !== "number" || typeof numbers[3] !== "number") {
		return NaN;
	}
	
	if(isNaN(numbers[0]) || isNaN(numbers[1]) || isNaN(numbers[2]) || isNaN(numbers[3])) {
		return NaN;
	}
	
	return (numbers[0] + numbers[1] + numbers[2] + numbers[3]) / 4;
} */

//************************************************************************//
//************************************************************************//
var count = 0;

function myClickHandler(event){
   count ++;
  document.getElementById("myCount").innerHTML = count;
  
  pyramidAdd();
}

document.getElementById("myButton").onclick = myClickHandler;

function myClickHandler2(event){
  if (count === 0){
    return 0;
  }else{
   count --;
  document.getElementById("myCount").innerHTML = count;
 pyramidAdd();
}
  
}

document.getElementById("myButton2").onclick = myClickHandler2;

 
function pyramidAdd(){
  var outputStr = "";
  for ( i = 0; i < count; i++) {
    outputStr += "<p>";
    for (var k =0; k<=i; k++){
      outputStr += "#";
    }
      outputStr += "</p>";
    }
  document.getElementById("myPyramid").innerHTML = outputStr;
}

/*
print p tag
print #    1
close p tag

print p tag
print ##   2
close p tag

start loop 
  print p tag
    start loop 2
      print #
    end loop 2
  close p tag
end loop*/

//***************************************************************//
