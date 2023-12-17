function disemvowel(str) {
	return str.replaceAll(/[aeiou]/gi, '');
}

console.log(
	disemvowel("No offense, but your writing is among the worst I've ever read")
);
