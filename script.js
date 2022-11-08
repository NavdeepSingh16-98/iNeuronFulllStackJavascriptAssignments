let jbtn = document.querySelector('#jokeBtn');
let jdiv = document.querySelector('#joke');
const api_url = 'https://backend-omega-seven.vercel.app/api/getjoke';

//curl --location --request GET 'https://backend-omega-seven.vercel.app/api/getjoke'

 jbtn.addEventListener('click',async ()=>{

    const response = await fetch(api_url);
   let data = await response.json();
   
    console.log(data);
   
   // return data.value;
jdiv.innerHTML = data[0]['question'];

setTimeout(()=>{

    let pTag = document.createElement('span');
    pTag.innerHTML = data[0]['punchline'];
    pTag.style.color = 'red';
    let BR = document.createElement('br');

    if(jdiv.firstElementChild){
        jdiv.removeChild(jdiv.firstElementChild);
    }

    jdiv.appendChild(BR);
    jdiv.appendChild(pTag);

},3000);

 })



//let data ;

// async function getJokes(){

// const response = await fetch(api_url);
//  data = await response.json();

//  console.log(data);

//  return data.value;




// }

// getJokes();