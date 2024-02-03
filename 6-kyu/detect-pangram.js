/*
DESCRIPTION:

A pangram is a sentence that contains every single letter of the alphabet at least once. 
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. 
Ignore numbers and punctuation.
*/

function isPangram(string) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	const alphabetArr = [];

	for (let letter of string.toLowerCase()) {
		if (!alphabetArr[letter]) {
			alphabetArr.push(letter);
		}
	}

	let result = true;

	for (let letter of alphabet) {
		if (!alphabetArr.includes(letter)) {
			result = false;
		}
	}

	return result;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog.'));
console.log(isPangram('This is not a pangram.'));
