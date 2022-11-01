// const arrangeArr = (arr) => {
// 	const pivot = arr[0];
//   let pivotIndex = 0

// 	const greater = [];
// 	const less = [];

// 	for (let i = 1; i < arr.length; i++) {
// 		if (pivot > arr[i]) {
// 			less.push(arr[i]);
// 		} else if (pivot < arr[i]) {
// 			greater.push(arr[i]);
// 		} else {
// 			less.push(arr[i]);
// 		}
// 	}
// 	return less.length, [...less, pivot, ...greater];
// };

// console.log(arrangeArr([5, 2, 1, 8, 4, 7, 6, 3]));

// sol-2
const swap = (arr, idx1, idx2) => {
	[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
	return arr;
};
const pivotHelper = (arr, start = 0, end = arr.length - 1) => {
	const pivot = arr[start];
	let pivotIndex = 0;

	let greater = null;

	for (let i = start + 1; i <= end; i++) {
		if (pivot > arr[i]) {
			pivotIndex += 1;
			if (greater) {
				swap(arr, i, greater);
				greater = null;
			}
		} else if (pivot < arr[i]) {
			greater = i;
		} else {
			pivotIndex += 1;
			if (greater) {
				swap(arr, i, greater);
				greater = null;
			}
		}
	}
	const sorted = swap(arr, 0, pivotIndex);
	return pivotIndex;
	// return { pivotIndex, sorted };
};

// console.log(pivotHelper([7, 8, 3]));

module.exports = {
	pivotHelper,
	swap,
};
