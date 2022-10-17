let choices = document.querySelectorAll('.choice');
let user = document.querySelector('#result-user-stat');
let computer = document.querySelector('#result-comp-stat');
let winner = document.querySelector('#result-final-stat');
let userScoreValue = document.querySelector('#userScoreVal');
let compScoreValue = document.querySelector('#compScoreVal');

const userCount = 0;
const computerCount = 0;

let imagesArr =[];

choices.forEach((m)=>{

    console.log(m);
// imagesArr.push({ [m.id]:m.firstElementChild});
imagesArr.push(m.firstElementChild);

    m.addEventListener('click',(event)=>{

console.log(event);

let el = event.target;
let cloned = el.cloneNode(true);

if(user.firstElementChild){
    user.removeChild(user.firstElementChild);
}

user.appendChild(cloned);

let elComputer = imagesArr[Math.floor(Math.random()*3)];

let elClonedComputer = elComputer.cloneNode(true);


if(computer.firstElementChild){
    computer.removeChild(computer.firstElementChild);
}

computer.appendChild(elClonedComputer);

if(winner.firstElementChild){
    winner.removeChild(winner.firstElementChild);
}
let result = comparing(cloned,elClonedComputer);

let tag = document.createElement('span');

if(typeof result == 'boolean'){
    if(result){
        tag.innerHTML = 'User';
userScoreValue.innerHTML = Number(userScoreValue.innerHTML)+1;
    }else{

        tag.innerHTML = 'Computer';
        compScoreValue.innerHTML = Number(compScoreValue.innerHTML)+1;

    }
   // tag.innerHTML = result ? 'User' : 'Computer'
}else{
    tag.innerHTML = 'Tie';
}
winner.appendChild(tag);
//computer.appendChild(elClonedComputer);

console.log(user.firstElementChild);

    })
});


// function winner(user,computer){




// }

function comparing(user,computer){
let altUser = user.alt;
let altComputer = computer.alt;

if(altUser =="paper" && altComputer == "rock"){
    return true;
}else if(altUser =="scissors" && altComputer == "paper"){
return true;
}else if(altUser =="rock" && altComputer == "scissors"){
return true;
}else if(altUser == altComputer){
    return 'neutral'
}else{
    return false;
}

}

//console.log(imagesArr);