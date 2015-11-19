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



var squareNumber = function(){
  var digitalInput = document.getElementById('digit'),
      v = digitalInput.value;
  
  if (!isNaN(v)) {
    document.getElementById('output').innerHTML = v * v;
  }
  else {
    document.getElementById('output').innerHTML = 'please use a number';
  }
  digitalInput.value = '';
};



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
  
  if(isNaN(text[0])) {
    textOutputId2.innerHTML += text[0].toUpperCase() + text.slice(1) + ".";
  }else {
    textOutputId2.innerHTML += "error use alphanumeric characters only";
  } 
 }



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
  
  
  /*var ave = [];
for(var i = 0; i < 10; i++)
   ave.push(prompt("Enter a number"));
alert (ave);*/

  






