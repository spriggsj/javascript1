

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


function addItem1ToList() {
    if(domInput1() !== "") {
      todoArray.push(domInput1());
  }
}


function addItem2ToBeginningOfList(){
    if(domInput2() !== "") {
      todoArray.unshift(domInput2());
  }
  console.log((todoArray.length) + "add");
}


function printListToTextOutput(){
    var outputStr = "";
      for ( var i = 0; i<todoArray.length; i++) {
        outputStr += "<li class='noStrike'>";
        outputStr +=  '<span class ="thetext">' + todoArray[i] + '</span>';
      if(i <todoArray.length){
        outputStr += "<input type='checkbox' id='check' onclick='deleteCheckBox(this)'><label id='ldel'>Delete</label></input>"; 
        outputStr += "<input type='checkbox'  id='done' onclick='ledit(this)'><label id='ledit'>Edit</label></input>";
        outputStr += "<input type='checkbox' id='done' class='noStrike' onClick='strikethrough(this)'><label id='ldone'>Done</label></input>";
        outputStr += "</li>";
      
     }
     
}
          
document.getElementById("test").innerHTML = outputStr;

}


/////////////////////////////////////////////////////////////////////////


function deleteCheckBox(element) {
    var li = element.parentNode;
    var ol = li.parentNode;
    var index = findRowInOl(li);
    ol.removeChild(li);
    todoArray.splice(index, 1);
}

// Toggles strike through for items in list
function strikethrough(element) {
    var parent = element.parentNode;

    if (parent.classList.contains("noStrike")) {
        parent.setAttribute("class", "strike");
    }
    else {
        parent.setAttribute("class", "noStrike");
    }

}

function findRowInOl(li) {
    var ol = li.parentNode;

      for (var i = 0; i < ol.children.length; i++) {
        if (li === ol.children[i]) {
      return i;
    }
  }
}

function ledit(element) {
    var li = element.parentNode;
    var input = prompt('Enter task to be completed.');
    li.getElementsByClassName('thetext')[0].innerHTML = input;

    console.log(findRowInOl(li));
           //todoArray.splice(#,1, input);
    var index = findRowInOl(li);
    todoArray[index] = input;
    console.log(todoArray);
        }
   

var myVar = setInterval(myTimer, 1000);

function myTimer() {
    var d = new Date();
    document.getElementById("time").innerHTML = d.toLocaleTimeString();
}
///////////////////////////////////////////////////////////////////////////
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
