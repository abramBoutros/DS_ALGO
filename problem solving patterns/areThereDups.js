function areThereDuplicates(...args) {
	// good luck. (supply any arguments you deem necessary.)
	const lockup = { state: false };

	args.forEach((arg) => {
		if (lockup[arg] >= 1) {
			lockup.state = true;
		} else {
			lockup[arg] = 1;
		}
	});
	return lockup.state;
}

console.log(areThereDuplicates(1, 2, 3, 4, 4));
