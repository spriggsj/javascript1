var todoArray = [];

function addItem1ToList()
{
	if(domInput1() !== "") {
		todoArray.push(domInput1());
	}
}


function addItem2ToBeginningOfList()
{

	if(domInput2() !== "") {
		todoArray.unshift(domInput2());}
}

function handleGoButtonClick(event) {
	addItem1ToList();	
	domInput1("");
	addItem2ToBeginningOfList();	
	domInput2("");	
    assignment();
    assignment2();
}

 function assignment () {
  for (var i = 0; i < todoArray.length; i++) {
    //console.log(todoArray[i]);
   
  textOutputId.innerHTML = (todoArray.join(", "));}
  
}

/*function assignment2 () {
  for (var i = 0; i < todoArray.length; i++) {
    
   var e = todoArray.toString();
  textOutputId2.innerHTML = (e) + '\n';}
  
}*/

function assignment2 () {
    var index;
    var text = "<ul>";
    
    for (i = 0; i < todoArray.length; i++) {
        text += "<li>" + todoArray[index] + "</li>";
    }
    text += "</ul>";
    textOutputId2.innerHTML = text;
}

function domInput1(newval) {
	var input1Reference = document.getElementById("input1Id");
	if(newval !== undefined) {
		input1Reference.value = newval;
	}
	return input1Reference.value;
}

function domInput2(newval) {
	var input2Reference = document.getElementById("input2Id");
	if(newval !== undefined) {
		input2Reference.value = newval;
	}
	return input2Reference.value;
}

function domTextOutput(newval) {
	var textOutputReference = document.getElementById("textOutputId");
	if(newval !== undefined) {
		textOutputReference.innerHTML = newval;
	}
}

(function() {
	document.getElementById("goBtnId").onclick = handleGoButtonClick;
}());