const readline = require('readline-sync');  

function findSum(givenNum) {
	let total = 0; 
	for (let num = 0; num <= givenNum; num++){
		total += num; 
}
	return total; 
	}

function findProduct(givenNum) {
	let total = 1;
	for (let num = 1; num <= givenNum; num++){
		total *= num;
	}
	return total; 
}
		

console.log(`Please enter an integer greater than 0:`);
let number = readline.question(); 

if(number <= 0){
	console.log(`ERROR Pleasr enter an integer GREATER than 0:`)
	let number = readline.question(); 
}

console.log('Enter "s" to compute the sum, or "p" to compute the product.');
let operation = readline.question(); 

if (operation === "s"){
	let sum = findSum(number);
	console.log(`The sum of the numbers between 1 and ${number} is ${sum}`);
}
else if (operation === "p"){
	let product = findProduct(number);
	console.log(`The product of the numbers between 1 and ${number} is ${product}`);
}

else {
	console.log('please enter a "p" or "s"')
	console.log('Error unknown command');
}


