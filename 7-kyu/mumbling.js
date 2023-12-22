/*
DESCRIPTION:
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(s) {
	let string = '';
	let index = 0;

	for (let char of s) {
		string += char.toUpperCase();
		string += char.toLowerCase().repeat(index);
		if (index < s.length - 1) {
			string += '-';
		}
		index++;
	}

	return string;
}

console.log(accum('aBcdEfg'));
