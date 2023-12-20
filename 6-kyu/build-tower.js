/*
DESCRIPTION:
Build Tower
Build a pyramid-shaped tower, as an array/list of strings, 
given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/

function towerBuilder(nFloors) {
	let tower = [];
	for (let floor = 1; floor <= nFloors; floor++) {
		let stars = 2 * floor - 1;
		let spaces = nFloors - floor;
		tower.push(' '.repeat(spaces) + '*'.repeat(stars) + ' '.repeat(spaces));
	}

	return tower;
}

console.log(towerBuilder(6));
