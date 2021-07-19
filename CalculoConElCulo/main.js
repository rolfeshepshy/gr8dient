var bottonMenos = document.getElementById("botton-menos");
var bodyResult = document.getElementById("body-result");
var inputCalc = document.getElementById("input-calc");
var totalResult = document.getElementById("total-print");
var bottonMas = document.getElementById("botton-mas")
var grandTotal = document.getElementById("grand-total")

var memoryCalc = 0;
var memoryDisplay = "";
var calcStr = ""


function calc (event){
    if(event.target.innerHTML === "-"){
        memoryCalc = memoryCalc + -Number(inputCalc.value);
        memoryDisplay += Number(inputCalc.value) + " " + event.target.innerHTML
        totalResult.innerHTML = memoryDisplay;
        grandTotal.innerHTML = memoryCalc;
        
        }
    if(event.target.innerHTML === "+"){
        memoryCalc = memoryCalc + Number(inputCalc.value);
        memoryDisplay += Number(inputCalc.value) + " " + event.target.innerHTML
        totalResult.innerHTML = memoryDisplay;
        grandTotal.innerHTML = memoryCalc;
        
    }

}

bottonMas.addEventListener("click", calc)
bottonMenos.addEventListener("click", calc)