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
  messageBox.innerHTML += "Array1: " + inputId1.join(", ") + "\\\n"; 
  
  // same as above except targets inputId2
  messageBox.innerHTML += "Array2: " + inputId2.join(", ") + "";
}

//*********************************************************************//
//*********************************************************************//

/* JavaScript Test Code Template
   Corey Shuman
   11/4/15
   
   This files contains some shortcut functions
   to manipulate the values for two input textboxes.
   It also sets up an event handler to handle
   button clicks on the page.
*/
/*Create an empty array at the top of the file (right after the intro comment)
Create a function that takes the text from Input 1 and pushes it into the array
Use the function domInput1() to do this
When the user clicks the “Go!” button, call your function you created that adds the Input 1 text to your array. Do this by calling for function inside handleGoButtonClick().
 You should also clear the contents of Input 1 by calling domInput1("");
Print the contents of you array to the Text Output window using domTextOutput(text);
To print an array as a string, call the .toString() function on the array.
BONUS: If you get the above to work, add a function to your script that will add the contents of Input 2 to the BEGINNING of the array
How could this be accomplished? Hint, think about using slice/splice and multiple arrays, OR, do some internet research. A function exists to do this for you that we haven’t covered here.
*/

// USER CODE - Put your code here!
/*var domInput1 = [];

            function goBtnId() {
                var str = document.getElementById("input1Id");


                domInput1.push(str.value);
                str.value = "";
                str.focus();
                var area = document.getElementById("textOutputId");
                area.value = "";
                for (var i = 0; i < domInput1.length; i++) {
                    area.value += domInput1[i] + "\n";
                }
            }
	
/*

*/


// This function is called every time the button is clicked
	//	function handleGoButtonClick(event) {
	// do events here
	//Example - set value of input 1 to "Hello JavaScript!"
	//	domInput1("Hello JavaScript!");
	//Example - get value of input 1 and alert it to user
	//	alert( domInput1() );
	//Example - put text from input 2 into text output box
	//	domTextOutput( domInput2() );
// }



// HELPER FUNCTIONS - The following code is helper functions to get you started

// This function sets and returns the value of Input 1
/*function domInput1(newval) {
	var input1Reference = document.getElementById("input1Id");
	if(newval !== undefined) {
		input1Reference.value = newval;
	}
	return input1Reference.value;
}*/

// This function sets and returns the value of Input 2
/*function domInput2(newval) {
	var input2Reference = document.getElementById("input2Id");
	if(newval !== undefined) {
		input2Reference.value = newval;
	}
	return input2Reference.value;
}

// This function sets and returns the value of Input 2
function domTextOutput(newval) {
	var textOutputReference = document.getElementById("textOutputId");
	if(newval !== undefined) {
		textOutputReference.innerHTML = newval;
	}
}

/* This is an Immediately Invoked Function Expression (IIFE)
   The code here runs immediately after the page loads.
   In this case, we are setting up an event handler for
   button presses.
*/

/*(function() {
	document.getElementById("goBtnId").onclick = handleGoButtonClick;
}());

*/