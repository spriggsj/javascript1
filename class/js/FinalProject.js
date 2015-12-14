

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
  console.log((todoArray.length) + "add");
}


function printListToTextOutput()
{
  var outputStr = "";
  for ( var i = 0; i<todoArray.length; i++) {
    outputStr += "<li class='noStrike'>";
    outputStr +=  todoArray[i];
    if(i <todoArray.length){

      outputStr += "<input type='checkbox' id='check' onclick='deleteCheckBox(this)'><label id='ldel'>Delete</label></input>"; 
      outputStr += "<input type='checkbox' id='edit' onclick='editLi()'><label id='ledit'>Edit</label></input>";
      outputStr += "<input type='checkbox' id='done' class='noStrike' onClick='strikethrough(this)'><label id='ldone'>Done</label></input>";
      //outputStr += "<input type='checkbox' id='strike' onclick='check(this)'>"; 
      outputStr += "</li>";
      
     }
     
}
          
document.getElementById("test").innerHTML = outputStr;

}


/////////////////////////////////////////////////////////////////////////


function deleteCheckBox() {
    var ol = document.getElementById('test');
    var li = ol.children;
    for (var i=0; i < li.length; i++) {
        while(li[i] && li[i].children[0].checked) {
            ol.removeChild(li[i]);
            var numb = ([i]);
            todoArray.splice(numb,1);
            
        }
        console.log((todoArray.length) + "sub");
    }
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



function editLi(){
   var x = prompt('enter new task');
  
  console.log(x);
  var ol = document.getElementById('test');
    var li = ol.children;
    for (var i=0; i < li.length; i++) {
        while(li[i] && li[i].children[0].checked){
          var pos = ([i]);
          console.log(pos);
          todoArray.splice(pos,1,x);
        }
}
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
