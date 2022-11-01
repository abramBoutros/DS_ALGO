const mergeArr = (arr1, arr2) => {
	let mergedArr = [];
	let loops = arr1.length + arr2.length;
	let i = 0;
	let j = 0;

	while (loops !== 0) {
		if (j >= arr2.length || arr1[i] <= arr2[j]) {
			mergedArr.push(arr1[i]);
			i++;
		} else if (arr1[i] > arr2[j] || i >= arr1.length) {
			mergedArr.push(arr2[j]);
			j++;
		}
		loops--;
	}
	return mergedArr;
};

const mergeSort = (arr) => {
	if (arr.length <= 1) return arr;

	if (arr.length === 2 && arr[0] < arr[1]) return arr;

	let mid = Math.floor(arr.length / 2);
	let left = mergeSort(arr.slice(0, mid));
	let right = mergeSort(arr.slice(mid));
	return mergeArr(left, right);
};

console.log(mergeSort([2, 19, 12, 15, 8, 29, 1, 3]));
// console.log(mergeArr([1, 3, 5, 6, 8, 9], [2, 4, 7, 8]));
