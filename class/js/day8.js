var dinosaurs = [];


function initPrompt(){
  
var dino = prompt("How many dinosaurs will be added?");
  var dinos = parseInt(dino);
  

  
  for (i=0; i < dinos; i++){
    var type = prompt("What type of dinosaur?"); 
    var era = prompt("What era did it live in?"); 
    var eat = prompt("What does it eat?");
   
     var dinoArray = ["Type " + type, " Era " + era, " Eating habbits " + eat];
     var dv = dinosaurs.push(dinoArray);
    
    console.log(dinosaurs[0]);
  }
 
  for (j = 0; j < dinosaurs.length; j++) {
    document.getElementById("res").insertAdjacentHTML("afterbegin", dinosaurs[j] + "<br>");
  }
}



// for loop process number entered and for each prompt three times for type, era,  and eating habits

 /*function dinoCall(){
   
   
   }*/
   //document.getElementById("res").innerHTML = dinosaurs.toString();
   //document.getElementById(res).innerHTML = dinosaurs[1[]];


document.getElementById("start").onclick = initPrompt;

// create x amount of arrays for each dinosaur entered inside of dinosaur array
// multi dimensional array

// push results into arrays

//print array with properties to the screen


