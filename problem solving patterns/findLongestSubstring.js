// function findLongestSubstring(str) {
// 	let start = 0,
// 		end = 1,
// 		max = -Infinity;

// 	for (let i = 0; i < str.length; i++) {
// 		if (str[start] === str[end]) {
// 			start = end;
// 			end = start + 1;
// 		} else if (str[end - 1] === str[end]) {
// 			start = end;
// 			end = start + 1;
// 		} else {
// 			max = end - start + 1;
// 			if (end === str.length) {
// 				start += 1;
// 				end = start + 1;
// 			} else {
// 				end += 1;
// 			}
// 		}
// 	}
// 	return max;
// }

console.log(findLongestSubstring("okkk"));

function findLongestSubstring(str) {
	let longest = 0;
	let seen = {};
	let start = 0;

	for (let i = 0; i < str.length; i++) {
		let char = str[i];
		if (seen[char]) {
			start = Math.max(start, seen[char]);
		}
		// index - beginning of substring + 1 (to include current in count)
		longest = Math.max(longest, i - start + 1);
		// store the index of the next char so as to not double count
		seen[char] = i + 1;
	}
	return longest;
}
