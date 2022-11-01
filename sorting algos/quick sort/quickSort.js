const { pivotHelper, swap } = require("./pivotHelper");

// const quickSort = (arr) => {
// 	if (arr.length <= 2) {
// 		if (arr[0] > arr[1] && arr[1] != undefined) return swap(arr, 0, 1);
// 		return arr;
// 	}

// 	const result = pivotHelper(arr);
// 	const pivot = result.pivotIndex;
// 	const sorted = result.sorted;

// 	console.log(
// 		sorted.slice(0, pivot - 1),
// 		"\n",
// 		sorted.slice(pivot + 1, sorted.length - 1)
// 	);

// 	return [
// 		...quickSort(sorted.slice(0, pivot - 1)),
// 		sorted[pivot],
// 		...quickSort(sorted.slice(pivot + 1, sorted.length - 1)),
// 	];
// };

// console.log(quickSort([5, 2, 1, 8, 4, 7, 6, 3]));

function quickSort(arr, left = 0, right = arr.length - 1) {
	if (left < right) {
		let pivotIndex = pivotHelper(arr, left, right); //3
		//left
		quickSort(arr, left, pivotIndex - 1);
		//right
		quickSort(arr, pivotIndex + 1, right);
	}
	return arr;
}

console.log(quickSort([5, 2, 1, 8, 4, 7, 6, 3]));
