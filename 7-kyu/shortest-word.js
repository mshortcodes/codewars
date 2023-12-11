/*
DESCRIPTION:
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s) {
	let array = s.split(' ');
	let wordLength = array[0].length;

	for (let word of array) {
		if (word.length < wordLength) {
			wordLength = word.length;
		}
	}

	return wordLength;
}

console.log(findShort('Happy New Year'));
