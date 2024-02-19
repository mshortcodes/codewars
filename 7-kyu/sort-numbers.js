/*
DESCRIPTION:
Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []
*/

function solution(nums) {
	if (nums === null || nums.length === 0) {
		return [];
	}

	for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < nums.length - 1; j++) {
			if (nums[j] > nums[j + 1]) {
				[nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
			}
		}
	}

	return nums;
}

console.log(solution([1, 2, 10, 50, 5]));
