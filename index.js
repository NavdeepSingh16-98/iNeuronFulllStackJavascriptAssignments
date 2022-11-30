function check(){  
    var ishtra =document.querySelector("#input").value;  
   
    var smallstring = ishtra.toLowerCase(); 
    var reversed = smallstring.split("").reverse().join("");  
    if (reversed === smallstring){  
     document.querySelector("#prog").innerHTML =  
     " It is a palindrome. ";  
    }  
    else{  
     document.querySelector("#prog").innerHTML =  
     " It is not a palindrome. ";  
    }  
   }  