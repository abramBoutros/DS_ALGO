function averagePair(arr, avg) {
	if (arr.length === 0) return false;
	// add whatever parameters you deem necessary - good luck!
	let lp = 0,
		rp = arr.length - 1;
	for (let i = 0; i < arr.length; i++) {
		if ((arr[lp] + arr[rp]) / 2 === avg) {
			return true;
		} else if ((arr[lp] + arr[rp]) / 2 > avg) {
			rp -= 1;
		} else {
			lp += 1;
		}
	}
	return false;
}

console.log(averagePair([1, 2, 3], 2.5));
