let btn = document.querySelector('#submit');

let input = document.querySelector('#input');


btn.addEventListener('click',()=>{

    let text = input.value;

    if(text){
        new QRCode(document.getElementById("qrcode"), text);
    }

})