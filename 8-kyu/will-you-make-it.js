const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
	return fuelLeft * mpg >= distanceToPump;
};

console.log(zeroFuel(50, 25, 2));
console.log(zeroFuel(75, 25, 1));
