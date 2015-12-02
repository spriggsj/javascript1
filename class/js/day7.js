//***************************************************************//
function getItem () {
  var item = document.getElementById("inputItem").value;
  document.getElementById("inputItem").value = "";

  var list = document.getElementById("listContain");

  list.insertAdjacentHTML('afterbegin', '<p>' + item + '<p>');
}

//****************************************************************//

function submitHandler(event) {
  var textboxTable = document.getElementById("inputTable");
  var table = document.getElementById("table");
  var row = table.insertRow(0);
  var cell = row.insertCell(0);
  
  cell.innerHTML = textboxTable.value;
  textboxTable.value = "";
  
}
document.getElementById("buttonTable").onclick = submitHandler;