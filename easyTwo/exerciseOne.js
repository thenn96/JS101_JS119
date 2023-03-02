function greetings(title, occupation) {
	return `Hello, ${title.join(' ')}! Nice to have a ${occupation.title} ${occupation.occupation} around. `; 
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);