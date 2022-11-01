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
var mergeTwoLists = function(list1, list2) {
    
};


/**	if (!(list1.length && list2.length)) {
		return [];
	} else if (list1.length === 0) {
		return list2;
	} else if (list2.length === 0) {
		return list1;
	}
	console.log(list1, list2);
	let mergedList = [...list1, ...list2];
	console.log(list1, list2, mergedList);
	let j = 0;
	for (let i = mergedList.length - 1; j < i; i--) {
		while (j < i) {
			if (mergedList[j] > mergedList[j + 1]) {
				let temp = mergedList[j];
				mergedList[j] = mergedList[j + 1];
				mergedList[j + 1] = temp;
			}
			j++;
		}
		j = 0;
	}
	return mergedList; */