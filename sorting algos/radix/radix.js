const helpers = require("./radix_helpers");

const radix = (arr) => {
	const mostDigits = helpers.mostDigits(arr);

	for (let k = 0; k < mostDigits; k++) {
		// Array.from create an array with givin attrs and callback to return initial value
		let digitBucket = Array.from({ length: 10 }, () => []);

		for (let i = 0; i < arr.length; i++) {
			let digit = helpers.getDigit(arr[i], k);
			digitBucket[digit].push(arr[i]);
		}

		arr = [].concat(...digitBucket);
		console.log(arr);
	}
	return arr;
	// console.log(arr);
};

const arr = [5, 123, 22, 6, 90, 812, 1274];

radix(arr);
