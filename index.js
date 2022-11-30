
let date = document.querySelector('#date');

date.addEventListener('change',(event)=>{

   
 timer(event.target.value);
})

function timer(val){

    var deadline =  new Date(val).getTime();
    var x = setInterval(function() {
    var now = new Date().getTime();
    var t = deadline - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t/ (1000 * 60 * 60) % 24));
    var minutes = Math.floor((t/ (1000 * 60) % 60));
    var seconds = Math.floor((t / 1000) % 60);
    document.getElementById("timer").innerHTML = days + "d " 
    + hours + "h " + minutes + "m " + seconds + "s ";
        if (t < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "EXPIRED";
        }
    }, 1000);
}

