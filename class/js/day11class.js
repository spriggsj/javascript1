

document.getElementById("myul").addEventListener("click", function (evt) {
     alert(evt.target.textContent);
   });
    

    
var myCup = new Object();
myCup.color = "black";
myCup.type = "mug";
myCup.status = "full";
myCup.content = "coffee"; 
  
var myCup2 = {};
myCup2["color"] = "black";
myCup2["type"] = "mug";
myCup2["status"] = "full";
myCup2["content"] = "coffee";

var myCup3 = {color: "black", type: "mug", status: "full", content: "coffee"};

myCup.pour = function pour() {
	if(this.status === "full") {
		this.status = "half-full";
	} else {
		this.status = "empty";
		this.content = "none";
	}
	return this.status;
}

myCup.wash = function() {
	this.clean = true;
	this.status = "empty";
	this.content = "none";
}

myCup.fill = function(drink){
	this.clean = false;
	this.status = "full";
	this.content = "drink";
}

var arr = [myCup, 'b', 'c'];
        arr.forEach(function (item) {
        console.log(item);
        });
    
