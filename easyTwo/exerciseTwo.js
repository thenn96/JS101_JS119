const readline = require('readline-sync'); 

console.log("Hello! What is your name?");
let name = readline.question(); 

if (name.includes('!')) {
	name = name.slice(0, -1); 
	console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`)
}
else {
	console.log(`Hello ${name}`);
}