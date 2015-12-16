var count = 0;

function myClickHandler(event){
   count ++;
  document.getElementById("myCount").innerHTML = count;
  
  pyramidAdd();
}

document.getElementById("myButton").onclick = myClickHandler;



//document.getElementById("myButton2").onclick = myClickHandler2;

 
function pyramidAdd(){
  var outputStr = "";
  for ( i = 0; i < count; i++) {
    outputStr += "<li>";
    outputStr += count;
    outputStr += "<input type='checkbox' id='check' onclick='deleteCheckBox(this)'><label id='ldel'>Delete</label></input>"; 
      outputStr += "</li>";
    }
  document.getElementById("my").innerHTML = outputStr;
}

function deleteCheckBox(event) {
    var ol = document.getElementById('test');
    var li = ol.children;
    for (var i=0; i < li.length; i++) {
        while(li[i] && li[i].children[0].checked) {
            ol.removeChild(li[i]);
            
            }
        }
        
    }

/*

function deleteOnClick(event) {
  if(event.target.nodeName.toUpperCase() === "li")
{
  var test = document.getElementById("test");
  test.removeChild(this);
}}


*/