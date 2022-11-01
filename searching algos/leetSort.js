/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
	let mergedList = [];
	if (list1.length === 0) {
		mergedList = list2;
	} else if (list2.length === 0) {
		mergedList = list1;
	} else if (!(list1.length && list2.length)) {
		return [];
	} else {
		mergedList = [...list1, ...list2];
	}

	let j = 0;
	let c = 0;
	let swap = true;
	for (let i = mergedList.length - 1; j < i; i--) {
		while (j < i) {
			swap = false;
			// console.log(mergedList, mergedList[j], mergedList[j + 1]);
			if (mergedList[j] > mergedList[j + 1]) {
				let temp = mergedList[j];
				mergedList[j] = mergedList[j + 1];
				mergedList[j + 1] = temp;
				c++;
				swap = true;
			}
			j++;
			// console.log(j, i);
		}
		console.log(swap);
		// if (c === j) {
		// 	return mergedList;
		// }
		if (!swap) {
			return mergedList;
		}
		j = 0;
	}
	return mergedList;
};

// console.log(mergeTwoLists([0], [1, 15, 16, 2, 6, 1, 19, 22, 2, 3, 5, 8, 11]));
// console.log(mergeTwoLists([], [42, 1, 3, 4, 5, 37, 45, 29, 8, 31]));
console.log(mergeTwoLists([], [8, 1, 2, 3, 4, 5, 6, 7]));
