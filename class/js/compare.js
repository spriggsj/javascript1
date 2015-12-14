              
  var input = document.createElement('input');
   input.setAttribute('id', 'input');
   input.setAttribute('style', 'display: block');
   //document.body.appendChild(input);

  var input1 = document.createElement('input');
    input1.setAttribute('id', 'input1');
    input1.setAttribute('style', 'display: block');
    //document.body.appendChild(input1);

  var button = document.createElement('button');
    button.setAttribute('Id', 'button');
    button.setAttribute('style', 'float: left');
    button.setAttribute('onclick', 'setup()');
    button.innerHTML = 'compare';
    
    //document.body.appendChild(button);

  var biggestButton = document.createElement('button');
    biggestButton.setAttribute('id', 'biggestButton');
    biggestButton.setAttribute('style', 'float: left');
    biggestButton.setAttribute('onclick', 'highestValue()');
    biggestButton.innerHTML = 'largest';
    //document.body.appendChild(biggestButton);

  var div = document.createElement('div');
    div.setAttribute('id', 'answerhold');
    div.setAttribute('style', 'clear: both');
    //document.body.appendChild(div);

  var container = document.createElement('div');
  container.style.backgroundColor = "gray";
  container.style.margin = "auto";
  container.style.display = "block";
  container.style.width = "300px";
  container.style.height = "200px";
  container.style.padding = "10px";

 var highNum =[];

  function setup(){
      var inputTop = document.getElementById('input').value;
      var inputBottom = document.getElementById('input1').value;
      var answer = compare(inputTop, inputBottom);
      div.insertAdjacentHTML('afterbegin', answer);
      document.getElementById('input').value = '';
      document.getElementById('input1').value = '';
    }

  function compare (ans1, ans2){
    if(isNaN(ans1) || isNaN(ans2)) {
    alert ('not a number');
  }else if(parseInt(ans1) > parseInt(ans2)){
   highNum.push(ans1);return "<br>" + (ans1); }else{
      highNum.push(ans2);return "<br>" + (ans2); 
    }

  }

 

  function highestValue(answerhold){
    var a = highNum.sort(function(a, b){return b-a});
    console.log (a[0]);
     document.getElementById('answerhold').innerHTML = a[0] + " is the largest number";
  }

  
  container.appendChild(input);
  container.appendChild(input1);
  container.appendChild(button);
  container.appendChild(biggestButton);
  container.appendChild(div);

  document.body.appendChild(container);


