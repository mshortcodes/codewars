# Sort Numbers - 7 kyu (Bubble Sort 🫧)

In this challenge I implemented bubble sort by using two pointers (i and j), comparing them, and swapping via destructuring when necessary. I'm just learning sorting algorithms and this is about the only one I can recall and do on my own.

DESCRIPTION: <br/>
Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

`solution([1, 2, 10, 50, 5]);` should return `[1,2,5,10,50]`
`solution(null);` should return `[]`.

```js
function solution(nums) {
	if (nums === null || nums.length === 0) {
		return [];
	}

	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[j] < nums[i]) {
				[nums[i], nums[j]] = [nums[j], nums[i]];
			}
		}
	}

	return nums;
}

console.log(solution([1, 2, 3, 10, 5]));
```
