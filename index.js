
let meter = 3.281 //feet
let liter = 0.264 //gallon
let kilogram = 2.204 //pound

let btnConvert = document.getElementById('btn-convert');
let meterFeetEl = document.getElementById('meter-feet');
let literGallonEl = document.getElementById('liter-gallon')
let kgPoundEl = document.getElementById('kilogram-pound')
let inputEl = document.querySelector('input');

btnConvert.addEventListener('click', function(){
    let inputValue = inputEl.value
    meterFeetEl.textContent =  `${inputValue} m = ${inputValue * Number(meter).toFixed(2)} feet `
    literGallonEl.textContent =  `${inputValue} l = ${inputValue * Number(liter).toFixed(2)} gallon`
    kgPoundEl.textContent =  `${inputValue} kg = ${inputValue * Number(kilogram).toFixed(2)} pound`
})