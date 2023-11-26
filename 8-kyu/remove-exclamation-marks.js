/*
DESCRIPTION:
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/

function removeExclamationMarks(s) {
	let filtered = '';

	for (let i = 0; i < s.length; i++) {
		if (s[i] !== '!') {
			filtered += s[i];
		}
	}

	return filtered;
}
