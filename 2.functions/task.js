function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let avg = 0, sum = 0;
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

	min = Math.min(...arr);
	max = Math.max(...arr);
	
	if (arr.length === 0) {
		avg = 0;
	} else {
		sum = arr.reduce(
			function (previousValue, currentValue) {
				return previousValue + currentValue
			});
		avg = sum / arr.length;
		avg = Number.parseFloat(avg.toFixed(2));
	}
	
	return { min: min, max: max, avg: avg };
}
getArrayParams(7, -54, 37, 60, -31, 29, -82);
getArrayParams(-3, 17, -6);
getArrayParams();

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
