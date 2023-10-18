let add = document.getElementById('pBtn')
let sub = document.getElementById('mBtn');
let resetBtn = document.getElementById('reset-btn');
let show = document.getElementById("show");
console.log(add, sub,resetBtn,show);


let count = 0;

add.addEventListener("click",function(){
    count++;
    show.textContent = count;
    
})

sub.addEventListener("click",function(){
   
    if(count != 0)
    {
        count--;
        show.textContent = count;
    }

});

resetBtn.addEventListener("click",function(){
    count =0;
    show.textContent = count;
})