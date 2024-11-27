const textBox = document.getElementById('textBox');
const toFahrenheit = document.getElementById('toFahrenheit');
const toCelsius = document.getElementById('toCelsius');
const results = document.getElementById('results');
let temp;


function convert(){

    if(toFahrenheit.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        results.textContent = temp.toFixed(1) + 'f'; 
    } 
    else if(toCelsius.checked) {
       temp = Number(textBox.value);
        temp = (temp - 32) * (5 / 9);
        results.textContent = temp.toFixed(1) + 'c'; 
    } 
    else{
        results.textContent = "Select a unit";
    }
}