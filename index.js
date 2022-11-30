var input = document.getElementById('input'), 
  number = document.querySelectorAll('.numbers div'), 
  operator = document.querySelectorAll('.operators div'), 
  result = document.getElementById('result'), 
  clear = document.getElementById('clear'), 
  resultDisplayed = false; 


for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function(e) {

    
    var currentString = input.innerHTML;
    var lastChar = currentString[currentString.length - 1];

    
    if (resultDisplayed === false) {
      input.innerHTML += e.target.innerHTML;
    } else if (resultDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
      
      
      resultDisplayed = false;
      input.innerHTML += e.target.innerHTML;
    } else {
      
      
      resultDisplayed = false;
      input.innerHTML = "";
      input.innerHTML += e.target.innerHTML;
    }

  });
}


for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function(e) {

    
    var currentString = input.innerHTML;
    var lastChar = currentString[currentString.length - 1];

    
    if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
      var newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
      input.innerHTML = newString;
    } else if (currentString.length == 0) {
      
      console.log("enter a number first");
    } else {
      
      input.innerHTML += e.target.innerHTML;
    }

  });
}


result.addEventListener("click", function() {

  
  var inputString = input.innerHTML;

if(isNaN(inputString[inputString.length-1])){
    console.log('enter valid expression')
}
else{
    input.innerHTML = eval(inputString);

    resultDisplayed = true; 
}
 // debugger;

});


clear.addEventListener("click", function() {
  input.innerHTML = "";
})