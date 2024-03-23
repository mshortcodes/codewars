function oddOrEven(arr) {
	let sum = 0;

	if (arr.length === 0) {
		return 'even';
	}

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}

	return sum % 2 === 0 ? 'even' : 'odd';
}

console.log(oddOrEven([1, 2, 3]));
