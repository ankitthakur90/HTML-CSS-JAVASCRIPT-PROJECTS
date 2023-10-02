
function isPalidrome(str){
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g,'');
   

    const revrseStr = cleanStr.split('').reverse().join('');
    
    return cleanStr === revrseStr;
}


function palindromeChecker(){
    const inputText = document.getElementById('inputText');
    const result = document.getElementById('result');

    if(isPalidrome(inputText.value)){
        result.textContent = `"${inputText.value}" is a Palindrome `;
    }
    else{
        result.textContent = `"${inputText.value}" is not a Palindrome `
    }

    result.classList.add('fadeIn');

    inputText.value = '';
}


document.getElementById('checkButton').addEventListener('click', palindromeChecker);