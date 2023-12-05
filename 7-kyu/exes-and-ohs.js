/*
DESCRIPTION:
Check to see if a string has the same amount of 'x's and 'o's. 
The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

function XO(str) {
	let numOfX = 0;
	let numOfO = 0;
	let strLower = str.toLowerCase();

	for (let char of strLower) {
		if (char === 'x') {
			numOfX += 1;
		} else if (char === 'o') {
			numOfO += 1;
		}
	}

	return numOfX === numOfO;
}
