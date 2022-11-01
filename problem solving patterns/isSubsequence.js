function isSubsequence(str1, str2) {
	// good luck. Add any arguments you deem necessary.
	if (!str1) return true;
	let lp = 0,
		rp = 0;

	for (let i = 0; i <= str1.length; i++) {
		if (lp === str1.length) return true;
		if (str1[lp] === str2[rp]) {
			lp += 1;
			rp = 0;
		} else {
			rp += 1;
			i = 0;
		}
	}
	return false;
}

console.log(isSubsequence("abc", "aasfasbasdasc"));
