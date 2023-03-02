const readline = require('readline-sync');  

console.log('What is the Bill?')
let bill = readline.question(); 

console.log('What is the tip percentage?')
let percent = readline.question();

let tip = Number(bill)  * (Number(percent) / 100); 

console.log(Number(tip));

let total = tip + Number(bill); 

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);