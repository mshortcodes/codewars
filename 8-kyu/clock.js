/*
DESCRIPTION:
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000
Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59
*/

function past(h, m, s) {
	const convert = {
		hour: h * 3600000,
		minute: m * 60000,
		second: s * 1000,
	};

	const result = convert.hour + convert.minute + convert.second;

	return result;
}

// console.log(past(23, 50, 30));
