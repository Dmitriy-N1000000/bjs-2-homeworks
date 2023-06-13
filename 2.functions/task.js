function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let avg = 0,
		sum = 0;
	/* for (let i = 0; i < arr.length; i += 1) {
		if (arr[i] < min) {
			min = arr[i];
		}

		if (arr[i] > max) {
			max = arr[i];
		}

		if (arr.length == 0) {
			avg = 0;
		} else {
			sum += arr[i];
			avg = sum / arr.length;
			avg = Number.parseFloat(avg.toFixed(2));
		}
	} */

	if (arr.length === 0) {
		avg = 0;
	} else {
		min = Math.min(...arr);
		max = Math.max(...arr);

		sum = arr.reduce(
			function (previousValue, currentValue) {
				return previousValue + currentValue
			});
		avg = sum / arr.length;
		avg = Number.parseFloat(avg.toFixed(2));
	}
	return {
		min: min,
		max: max,
		avg: avg
	};
}
getArrayParams(7, -54, 37, 60, -31, 29, -82);
getArrayParams(-3, 17, -6);
getArrayParams();

function summElementsWorker(...arr) {
	let sum = 0;
	if (!arr.length) {
		return 0;
	} else {
		sum = arr.reduce(function (previousValue, currentValue) {
			return previousValue + currentValue
		});
		return sum;
	}
}
summElementsWorker(0, 7, 63, -43, 58, -94);

function differenceMaxMinWorker(...arr) {
	let max = arr[0];
	let min = arr[0];
	let difMaxMin = 0;

	if (!arr.length) {
		return 0;
	} else {
		max = Math.max(...arr);
		min = Math.min(...arr);
		difMaxMin = max - min;
	}

	return difMaxMin;
}
differenceMaxMinWorker(6, 79, -35, 21);

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;
	let difEvenOdd = 0;

	if (!arr.length) {
		return 0;
	} else {
		for (let i = 0; i < arr.length; i += 1) {
			if (arr[i] % 2 === 0) {
				sumEvenElement += arr[i];
			} else {
				sumOddElement += arr[i];
			}
		}
		difEvenOdd = sumEvenElement - sumOddElement;
		return difEvenOdd;
	}
}
differenceEvenOddWorker(7, 43, -44, 82, 28);

function averageEvenElementsWorker(...arr) {
	let sumEvenElements = 0;
	let countEvenElements = 0;
	let avgEvenElements = 0;

	if (!arr.length) {
		return 0;
	} else {
		for (let i = 0; i < arr.length; i += 1) {
			if (arr[i] % 2 === 0) {
				sumEvenElements += arr[i];
				countEvenElements += 1;
			}
		}
		if (countEvenElements) {
			avgEvenElements = sumEvenElements / countEvenElements;
			avgEvenElements = Number.parseFloat(avgEvenElements.toFixed(2));
		} else {
			return 0;
		}
	}
	return avgEvenElements;
}
averageEvenElementsWorker(-23, 41, -33, 60, -10, 42);

function makeWork(arrOfArr, func) {
	let maxWorkerResult = func(...arrOfArr[0]);
	for (let i = 0; i < arrOfArr.length; i += 1) {
		const workerResult = func(...arrOfArr[i]);
		if (workerResult > maxWorkerResult) {
			maxWorkerResult = workerResult;
		}
	}
	return maxWorkerResult;
}
makeWork([
	[9, -43, 19, 58, -31],
	[67, -36, 52, -42, 5],
	[73, -22, 8, -2, 94],
	[-14, 42, 38, 20, -18],
	[50, -62, -57, 81, 96]
], summElementsWorker);