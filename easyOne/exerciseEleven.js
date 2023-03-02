function utf16Value(word) {
	let sum = 0;
	for(index = 0; index < word.length; index ++) {
		sum += word.charCodeAt(index);
	}
	console.log(sum);
}


utf16Value('Four score');         // 984
utf16Value('Launch School');