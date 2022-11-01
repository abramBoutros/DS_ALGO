function biSearch(sortedArr, target) {
	let left = 0;
	let right = sortedArr.length - 1;
	let middle = ((left + right) / 2).toFixed(0);
	for (; left <= right; ) {
		// console.log(left, right, middle);
		// if (right - left === 1) {
		// 	if (sortedArr[right] === target) {
		// 		return +right;
		// 	}
		// 	if (sortedArr[left] === target) {
		// 		return +left;
		// 	}
		// }
		if (sortedArr[middle] === target) {
			return +middle;
		} else if (sortedArr[middle] < target) {
			left = +middle + 1;
			// console.log(left);
			middle = ((left + right) / 2).toFixed(0);
		} else {
			right = +middle - 1;
			middle = ((left + right) / 2).toFixed(0);
		}
	}
	// not found
	return -1;
}

// subject should return the correct index if the value is found

// Expected -1 to be 16, 'binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95) should be 16.'.

console.log(
	biSearch(
		[
			5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
			99,
		],
		95
	)
);
