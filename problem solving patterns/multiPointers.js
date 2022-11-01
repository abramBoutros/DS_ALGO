function countUniqueValues(arr) {
	// add whatever parameters you deem necessary - good luck!
	let lp = 0;
	let rp = 1;
	// for (let [i, elem] of arr.entries()) {
	// }
	for (let i = 0; i <= arr.length - 1; i++) {
		if (arr[lp] === arr[rp]) {
			rp += 1;
		} else {
			lp += 1;
			arr[lp] = arr[rp];
			rp += 1;
		}
	}
	return arr.slice(0, lp);
}

// [-2,-1,-1,0,1]
// [1,2,3,4,4,4,7,7,12,12,13]

//                 lp
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);
//                   rp

console.log(countUniqueValues([-2, -1, -1, 0, 1]));
