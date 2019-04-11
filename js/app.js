// console.log("working")


// add button 
let x = document.getElementById("input");
let y = document.getElementById("display").innerText

// const sum = (total, x) =>{
//   return total + x;  
// };

document.getElementById("add").addEventListener("click", function(){
    
    let currentValue = y
    let number = parseInt(currentValue)
    let inputNumber = parseInt(x.value)
    document.getElementById("display").innerText = number + inputNumber
});



// minus button 
document.getElementById("minus").addEventListener("click", function(){
    let currentValue = y;
    let newNumber = parseInt(currentValue);
    let newInputNumber = parseInt(x.value)
    document.getElementById('display').innerText =newNumber - newInputNumber;
});