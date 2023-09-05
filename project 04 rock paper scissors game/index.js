<<<<<<< HEAD

let isStart = false;
let playerChoose ;
let computerChoose;

let playerScoreEl ;
playerScoreEl =  document.getElementById("playerScore");

let computerScoreEl;
computerScoreEl = document.getElementById("computerScore");


let computerImgEl ;
computerImgEl = document.getElementById("computerImg");

let playerImg; 
playerImg = document.getElementById("playerDivImg");



let ChooseParaEl = document.getElementById("choosePara");
function btnClick(){
    isStart = true;
    ChooseParaEl.textContent = "Choose Any One -> "
    playerScoreEl.textContent = "You:";
    computerScoreEl.textContent  ="Computer:";
    playerImg.src =" img/Black.jpg";
    computerImgEl.src =" img/Black.jpg";
}




function changeOne(){
    if(isStart)
    {
    playerImg.src = "img/rock.jpg";
    playerChoose = 1;
     randomOne();
    }
}

function changeSecond(){
    if(isStart){
    playerImg.src = "img/paper.jpg";
    playerChoose = 2;
    randomSecond();
    }
}

function changeThird(){
    if(isStart){

    playerImg.src = "img/scissors.jpg";
    randomThird();

    }
}






function randomOne(){
    computerChoose =  Math.floor(Math.random()*3)+1;

    if(computerChoose == 1){

        computerImgEl.src = "img/rock.jpg";
        playerScoreEl.textContent += " Tie";
        computerScoreEl.textContent += "Tie";

    }else if(computerChoose == 2){

        computerImgEl.src = "img/paper.jpg";
        playerScoreEl.textContent += "Loose";
        computerScoreEl.textContent += "Win";

    }else if(computerChoose == 3){

        computerImgEl.src =  "img/scissors.jpg";
        playerScoreEl.textContent += " Win";
        computerScoreEl.textContent += "Loose";
    }
    
    isStart = false;

}


function randomSecond(){
    computerChoose =  Math.floor(Math.random()*3)+1;

    if(computerChoose == 1){

        computerImgEl.src = "img/rock.jpg";
        playerScoreEl.textContent += " Win";
        computerScoreEl.textContent += "Loose";

    }else if(computerChoose == 2){

        computerImgEl.src = "img/paper.jpg";
        playerScoreEl.textContent += "Tie";
        computerScoreEl.textContent += "Tie";

    }else if(computerChoose == 3){

        computerImgEl.src =  "img/scissors.jpg";
        playerScoreEl.textContent += "Loose";
        computerScoreEl.textContent += "Win";
    }
    
    isStart = false;

}

function randomThird(){
    computerChoose =  Math.floor(Math.random()*3)+1;

    if(computerChoose == 1){

        computerImgEl.src = "img/rock.jpg";
        playerScoreEl.textContent += "Loose";
        computerScoreEl.textContent += "Win";

    }else if(computerChoose == 2){

        computerImgEl.src = "img/paper.jpg";
        playerScoreEl.textContent += "Win";
        computerScoreEl.textContent += "Loose";

    }else if(computerChoose == 3){

        computerImgEl.src =  "img/scissors.jpg";
        playerScoreEl.textContent += "Tie";
        computerScoreEl.textContent += "Tie";
    }
    
    isStart = false;

}
=======

let isStart = false;
let playerChoose ;
let computerChoose;

let playerScoreEl ;
playerScoreEl =  document.getElementById("playerScore");

let computerScoreEl;
computerScoreEl = document.getElementById("computerScore");


let computerImgEl ;
computerImgEl = document.getElementById("computerImg");

let playerImg; 
playerImg = document.getElementById("playerDivImg");



let ChooseParaEl = document.getElementById("choosePara");
function btnClick(){
    isStart = true;
    ChooseParaEl.textContent = "Choose Any One -> "
    playerScoreEl.textContent = "You:";
    computerScoreEl.textContent  ="Computer:";
    playerImg.src =" img/Black.jpg";
    computerImgEl.src =" img/Black.jpg";
}




function changeOne(){
    if(isStart)
    {
    playerImg.src = "img/rock.jpg";
    playerChoose = 1;
     randomOne();
    }
}

function changeSecond(){
    if(isStart){
    playerImg.src = "img/paper.jpg";
    playerChoose = 2;
    randomSecond();
    }
}

function changeThird(){
    if(isStart){

    playerImg.src = "img/scissors.jpg";
    randomThird();

    }
}






function randomOne(){
    computerChoose =  Math.floor(Math.random()*3)+1;

    if(computerChoose == 1){

        computerImgEl.src = "img/rock.jpg";
        playerScoreEl.textContent += " Tie";
        computerScoreEl.textContent += "Tie";

    }else if(computerChoose == 2){

        computerImgEl.src = "img/paper.jpg";
        playerScoreEl.textContent += "Loose";
        computerScoreEl.textContent += "Win";

    }else if(computerChoose == 3){

        computerImgEl.src =  "img/scissors.jpg";
        playerScoreEl.textContent += " Win";
        computerScoreEl.textContent += "Loose";
    }
    
    isStart = false;

}


function randomSecond(){
    computerChoose =  Math.floor(Math.random()*3)+1;

    if(computerChoose == 1){

        computerImgEl.src = "img/rock.jpg";
        playerScoreEl.textContent += " Win";
        computerScoreEl.textContent += "Loose";

    }else if(computerChoose == 2){

        computerImgEl.src = "img/paper.jpg";
        playerScoreEl.textContent += "Tie";
        computerScoreEl.textContent += "Tie";

    }else if(computerChoose == 3){

        computerImgEl.src =  "img/scissors.jpg";
        playerScoreEl.textContent += "Loose";
        computerScoreEl.textContent += "Win";
    }
    
    isStart = false;

}

function randomThird(){
    computerChoose =  Math.floor(Math.random()*3)+1;

    if(computerChoose == 1){

        computerImgEl.src = "img/rock.jpg";
        playerScoreEl.textContent += "Loose";
        computerScoreEl.textContent += "Win";

    }else if(computerChoose == 2){

        computerImgEl.src = "img/paper.jpg";
        playerScoreEl.textContent += "Win";
        computerScoreEl.textContent += "Loose";

    }else if(computerChoose == 3){

        computerImgEl.src =  "img/scissors.jpg";
        playerScoreEl.textContent += "Tie";
        computerScoreEl.textContent += "Tie";
    }
    
    isStart = false;

}
>>>>>>> ee4e1a5 (adding project)
