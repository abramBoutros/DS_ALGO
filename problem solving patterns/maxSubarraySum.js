function maxSubarraySum(arr, num) {
	// add whatever parameters you deem necessary - good luck!
	let max = 0;
	let temp = 0;
	if (arr.length < num) return null;

	for (let i = 0; i < num; i++) {
		temp += arr[i];
	}

	for (let i = num; i < arr.length; i++) {
		temp = temp - arr[i - num] + arr[i];
		max = Math.max(temp, max);
	}
	return max;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2));
