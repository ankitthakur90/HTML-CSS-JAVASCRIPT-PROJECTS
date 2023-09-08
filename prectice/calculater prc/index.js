
let sum = 0;
let num1 = 0 ;
let num2  = 0;

let sumEl = document.getElementById("sum-el");
function startIsClick(){
let st = document.getElementById("start");

  num1 = +prompt("Enter Number 1st : ");
  num2 = +prompt("Enter Number 2ns : ");

let isNumber1 = document.getElementById("num1-el");
let isNumber2 = document.getElementById("num2-el");

isNumber1.innerHTML = num1;
isNumber2.innerHTML = num2;


}

function isAdd(){

    let sum = num1 + num2;
    sumEl.textContent = sum;


}

function isSub(){

    let sum = num1 - num2;
    sumEl.textContent = sum;


}

function isMulti(){

    let sum = num1 *num2;
    sumEl.textContent = sum;
    
    

}

function isDivide(){

    let sum = num1 / num2;
    sumEl.textContent = sum;


}