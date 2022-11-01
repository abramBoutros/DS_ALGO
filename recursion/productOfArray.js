function productOfArray(arr) {
	if (arr.length <= 0) {
		return 0;
	}
	if (arr.length === 1) {
		return arr[0];
	}
	arr[arr.length - 2] *= arr[arr.length - 1];
	arr.pop();
	return productOfArray(arr);
}

console.log(productOfArray([1, 2, 3, 7]));
