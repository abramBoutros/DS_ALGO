function fib(num) {
	if (num <= 2) return 1;
	return fib(num - 1) + fib(num - 2);
}
console.log(fib(3));

// 1 2 3 4 5 6 =>
// 1 1 2 3 5 8
