const readline = require('readline-sync'); 

function prompt(msg) {
	console.log(`==> ${msg}`);
}

prompt('What is the first number: ');
let number1 = readline.question();

prompt('What is the second number: ');
let number2 = readline.question();

let sum = Number(number1) + Number(number2);
let difference = Number(number1) - Number(number2);
let product = Number(number1) * Number(number2); 
let quotient = Number(number1) / Number(number2); 
let remainder = Number(number1) % Number(number2); 
let power = Number(number1) ** Number(number2); 

prompt(`${number1} + ${number2} = ${sum}`);
prompt(`${number1} - ${number2} = ${difference}`);
prompt(`${number1} * ${number2} = ${product}`);
prompt(`${number1} / ${number2} = ${quotient.toFixed(0)}`);
prompt(`${number1} % ${number2} = ${remainder}`);
prompt(`${number1} - ${number2} = ${power}`);