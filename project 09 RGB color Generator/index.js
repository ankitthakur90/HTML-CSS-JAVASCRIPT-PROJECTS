
const redSlider = document.getElementById('redSlider');
const greenSlider = document.getElementById('greenSlider');
const blueSlider = document.getElementById('blueSlider');

const redValue = document.getElementById('redValue');
const greenValue = document.getElementById('greenValue');
const blueValue = document.getElementById('blueValue');

const colorBox = document.getElementById('color-box');
const copyBtn = document.getElementById('copyButton');
const rgbInputValue = document.getElementById('inputType');


redSlider.addEventListener('input',updateColor);
greenSlider.addEventListener('input',updateColor);
blueSlider.addEventListener('input',updateColor);

/* 
const updateColor = ()=>{

} */


function updateColor(){
    const redSliderValue = redSlider.value;
    const greenSliderValue = greenSlider.value;
    const blueSliderValue = blueSlider.value;

    // console.log(`rgb(${redSliderValue},${greenSliderValue},${blueSliderValue})`);
    const rgbColor = `rgb(${redSliderValue},${greenSliderValue},${blueSliderValue})`;
    // console.log(rgbColor);

    colorBox.style.backgroundColor = rgbColor;

    redValue.textContent = redSliderValue;
    greenValue.textContent = greenSliderValue;
    blueValue.textContent =  blueSliderValue;

    rgbInputValue.textContent = rgbColor;
    
}

updateColor();

copyBtn.addEventListener('click' , copyRgbValue);

function copyRgbValue(){

    const redSliderValue = redSlider.value;
    const greenSliderValue = greenSlider.value;
    const blueSliderValue = blueSlider.value;

    const rgbColor = `rgb(${redSliderValue},${greenSliderValue},${blueSliderValue})`;

   navigator.clipboard.writeText(rgbColor)
       .then(()=>{
        alert("RGB value copied to clipboard : "+rgbColor);
       })
       .catch((error)=>{
        console.error("Failed to copy RGB value :",error);
       });
}
