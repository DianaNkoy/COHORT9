console.log("Hi")
function add() {

    /** storing html elements to a new variable */
    let number1 = document.getElementById("calcInput").value
    console.log(number1)
    let number2 = document.getElementById("calcInputTwo").value
    console.log(number2)
    /** Tranforming above values from strings into numbers */
    let a = parseInt(number1) 
    let b = parseInt(number2)
    console.log(a,b)
    /** passing the variables a and b down to the next function to do the sum */
    let answer= addition(a,b)
    console.log(answer)
    let result = document.getElementById("answ")
    /** returning the value to HTML page */
    result.innerText=answer
}
function addition(a,b){
    return a+b 
}
function sub(){

    let number1 = document.getElementById("calcInput").value
    console.log(number1)
    let number2 = document.getElementById("calcInputTwo").value
    console.log(number2)
    /** Tranforming above value from strings into numbers */
    let a = parseInt(number1)
    let b = parseInt(number2)
    console.log(a,b)
    /** passing the variables a and b down to the next function to do the sum */
    let answer = subtract(a,b)
    console.log(answer)
    let result = document.getElementById("answ")
    /** returning value to HTML page */
    result.innerText=answer
}
function subtract(a,b){
    return a-b
}
function mult(){
    let number1 = document.getElementById("calcInput").value
    console.log(number1)
    let number2 = document.getElementById("calcInputTwo").value
    console.log(number2)
    /**Transforming above value from strings into numbers */
    let a = parseInt(number1)
    let b = parseInt(number2)
    console.log(a,b)
    /** passing the variables a and b down to the next function to do the sum */
    let answer = Multiply(a,b)
    console.log(answer)
    let result = document.getElementById("answ")
    /** returning value to HTML page */
    result.innerText=answer
}

function Multiply(a,b){
    return a+b
}
function divide() {

    /** storing html elements to a new variable */
    let number1 = document.getElementById("calcInput").value
    console.log(number1)
    let number2 = document.getElementById("calcInputTwo").value
    console.log(number2)
    /** Tranforming above values from strings into numbers */
    let a = parseInt(number1) 
    let b = parseInt(number2)
    console.log(a,b)
    /** passing the variables a and b down to the next function to do the sum */
    let answer= divide(a,b)
    console.log(answer)
    let result = document.getElementById("answ")
    /** returning the value to HTML page */
    result.innerText=answer
}
function divide(a,b){

}