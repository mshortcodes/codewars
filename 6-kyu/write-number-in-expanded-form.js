/*
DESCRIPTION:
The main idea is to count all the occurring characters in a string. 
If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.


*/

function count(string) {
	const obj = {};

	for (char of string) {
		obj[char] ? obj[char]++ : (obj[char] = 1);
	}

	return obj;
}

console.log(count('hello'));
