		// section for iphone style button and hidden display of text area

function toggleState(item){
    if(item.className == "on") {
        item.className="off";
    } else {
        item.className="on";
         	}
}
          	

function checkAddress(checkbox){
    if (checkbox.checked){
        	inputDisplay();
    		getfocus1();


    	}else {
    		inputDisplayVisible();
    		getfocus();
    }
}



		document.getElementById("input2Id").style.display = "none";
    	document.getElementById("input2Idlabel").style.display = "none";

    	document.getElementById("input1Id").style.display = "none";
    	document.getElementById("input1Idlabel").style.display = "none";


function inputDisplay() {
    document.getElementById("input1Id").style.display = "none";
	document.getElementById("input1Idlabel").style.display = "none";

	document.getElementById("input2Id").style.display = "inline";
    document.getElementById("input2Idlabel").style.display = "inline";
}

function inputDisplayVisible(){
	

    document.getElementById("input1Id").style.display = "inline";
    document.getElementById("input1Idlabel").style.display = "inline";

    document.getElementById("input2Id").style.display = "none";
	document.getElementById("input2Idlabel").style.display = "none";

}

        function getfocus() {
    document.getElementById("input1Id").focus();
}

		function getfocus1() {
    document.getElementById("input2Id").focus();
}

/////////////////////////////////////////////////////////////

   /*  
  something foud online that has cool functionality
      (function(){

  var todo = document.querySelector( '#todolist' ),
      form = document.querySelector( 'form' ),
      field = document.querySelector( '#newitem' );

    
  form.addEventListener( 'submit', function( ev ) {
    todo.innerHTML += '<li>' + field.value + '</li>';
    field.value = '';
    field.focus();
    ev.preventDefault();
  }, false);

  todo.addEventListener( 'click', function( ev ) {
    var t = ev.target;
    if ( t.tagName === 'LI' ) {
      if ( t.classList.contains( 'done' ) ) {
        t.parentNode.removeChild( t );
      } else {  
        t.classList.add( 'done' );
      }
    };
    ev.preventDefault();
  }, false);

})();*/
///////////////////////////////////////////////////////////////////////////////////////////
var todoArray = [];

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


function addItem1ToList()
{
	if(domInput1() !== "") {
		todoArray.push(domInput1());
	}
}


function addItem2ToBeginningOfList()
{
	if(domInput2() !== "") {
		todoArray.unshift(domInput2());
	}
	
}


function printListToTextOutput()
{
  var outputStr = "";
  for ( var i = 0; i<todoArray.length; i++) {
  	outputStr += "<li>";
  	outputStr += todoArray[i];
  	if(i <todoArray.length){
      outputStr += "</li>";
     }

}
      
    
document.getElementById("test").innerHTML = outputStr;
}



// This function is called every time the button is clicked
function handleGoButtonClick(event) {
	
	addItem1ToList();
	
	domInput1("");

	addItem2ToBeginningOfList();
			
	domInput2("");
		
	printListToTextOutput();

}



(function() {
	document.getElementById("goBtnId").onclick = handleGoButtonClick;
}());
