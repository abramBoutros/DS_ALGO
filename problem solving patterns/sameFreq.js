function sameFrequency(num1, num2) {
	num1 = num1.toString();
	num2 = num2.toString();
	if (num1.length !== num2.length) {
		return false;
	}

	const lockup = {};

	for (let char of num1) {
		lockup[char] ? (lockup[char] += 1) : (lockup[char] = 1);
	}
	for (let char of num2) {
		if (!lockup[char]) return false;
		lockup[char] -= 1;
	}
	return true;
}

console.log(sameFrequency(266, 462));
