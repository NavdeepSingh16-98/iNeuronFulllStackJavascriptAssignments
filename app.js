let canvas = document.querySelector('#canvas');


let button = document.querySelector("#button");

let arr = [0,1,2,3,4,5,6,7,8,9,10,'A','B','C','D','E'];

button.addEventListener('click',()=>{


    let str = "";

    for(let i=0; i<6;i++){


        str += arr[Math.floor(Math.random()*16)];

    }

    canvas.style.backgroundColor="#"+str;


})