function validAnagram(str1, str2) {
	// add whatever parameters you deem necessary - good luck!
	if (str1.length !== str2.length) {
		return false;
	}
	// const frequencyCounter1 = {};
	// const frequencyCounter2 = {};
	const lockup = {};
	for (let char of str1) {
		lockup[char] ? (lockup[char] += 1) : (lockup[char] = 1);
		// frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
	}
	for (let char of str2) {
		if (!lockup[char]) return false;
		lockup[char] -= 1;
		// frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
	}

	// for (let key in frequencyCounter1) {
	// 	if (!(key in frequencyCounter2)) {
	// 		return false;
	// 	}
	// 	if (frequencyCounter2[key] !== frequencyCounter1[key]) {
	// 		return false;
	// 	}
	// }
	return true;
}

console.log(validAnagram("okok", "kook"));
