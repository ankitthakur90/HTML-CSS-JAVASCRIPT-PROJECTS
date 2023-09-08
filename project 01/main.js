<<<<<<< HEAD


// document.getElementByIde('count-el').innerHTML = 5;
let saveEl = document.getElementById("save-el");
let countPeople = document.getElementById("count-el");

let count = 0 ;
function increment(){
    
    count = count + 1;
    // countPeople.innerHTML = count;
    countPeople.textContent = count;
}

function save(){
    if(count != 0){

    let counter =count + " - ";
    // saveEl.innerHTML += counter;
    saveEl.textContent += counter;

    // if(saveEl.click){
    //     count = 0;
    // }
    countPeople.textContent = 0 ;
    count = 0 ;
    
    }
}
=======


// document.getElementByIde('count-el').innerHTML = 5;
let saveEl = document.getElementById("save-el");
let countPeople = document.getElementById("count-el");

let count = 0 ;
function increment(){
    
    count = count + 1;
    // countPeople.innerHTML = count;
    countPeople.textContent = count;
}

function save(){
    if(count != 0){

    let counter =count + " - ";
    // saveEl.innerHTML += counter;
    saveEl.textContent += counter;

    // if(saveEl.click){
    //     count = 0;
    // }
    countPeople.textContent = 0 ;
    count = 0 ;
    
    }
}
>>>>>>> c929a8c (first commit)
