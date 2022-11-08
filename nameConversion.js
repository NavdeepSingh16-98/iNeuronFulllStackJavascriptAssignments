let btn = document.querySelector('#convert-btn');

btn.addEventListener('click',convert)


function convert(event){

    //alert('inside event');

    let text = document.querySelector("#text");

    let camelCase1 = document.querySelector("p#camel-case");

    camelCase1.innerText = camelCase(text.value);

    let pascalCase1 = document.querySelector("p#pascal-case");

    pascalCase1.innerText = pascalCase(text.value);
    let snakeCase1 = document.querySelector("p#snake-case");

    snakeCase1.innerText = snakeCase(text.value);

    let screamingSnakeCase1 = document.querySelector("p#screaming-snake-case");

    screamingSnakeCase1.innerText = screamingSnakeCase(text.value);

    let kebabCase1 = document.querySelector("p#kebab-case");

    kebabCase1.innerText = kebabCase(text.value);

    let screamingKebabCase1 = document.querySelector("p#screaming-kebab-case");

    screamingKebabCase1.innerText = screamingKebabCase(text.value);



   // debugger;

    
}


function camelCase(val){


    let arr = val.split(" ");

    let newArr =arr.map((element,index) => {
        
if(index !=0){
        return element[0].toUpperCase()+element.slice(1);}else{

            return element[0].toLowerCase()+element.slice(1);
        }

    });

    let joined = newArr.join("");

    return joined;


}

function pascalCase(val){
    let arr = val.split(" ");

    let newArr =arr.map((element,index) => {
        

        return element[0].toUpperCase()+element.slice(1);
    });

    let joined = newArr.join("");

    return joined;

    
}

function snakeCase(val){

    let arr = val.split(" ");

    let newArr =arr.map((element,index) => {
        

        return element[0].toLowerCase()+element.slice(1);
    });

    let joined = newArr.join("_");

    return joined;

    
}
function screamingSnakeCase(val){
    let arr = val.split(" ");

    let newArr =arr.map((element,index) => {
        

        return element.toUpperCase();
    });

    let joined = newArr.join("_");

    return joined;
    
}

function kebabCase(val){


    let arr = val.split(" ");

    let newArr =arr.map((element,index) => {
        

        return element[0].toLowerCase()+element.slice(1);
    });

    let joined = newArr.join("-");

    return joined;

    
}
function screamingKebabCase(val){


    let arr = val.split(" ");

    let newArr =arr.map((element,index) => {
        

        return element.toUpperCase();
    });

    let joined = newArr.join("-");

    return joined;

    
}