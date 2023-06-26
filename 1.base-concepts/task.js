"use strict"
function solveEquation(a, b, c) {
	let arr = [];
	let diskriminant = Math.pow(b, 2) - 4 * a * c;

	if (diskriminant < 0) {
		return arr;
	} else if (diskriminant === 0) {
		arr.push(- b / (2 * a));
		return arr;
	} else {
		arr.push((- b + Math.sqrt(diskriminant)) / (2 * a), (- b - Math.sqrt(diskriminant)) / (2 * a));
		return arr;
	}
}
solveEquation(-5, 7, 3);

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	
}