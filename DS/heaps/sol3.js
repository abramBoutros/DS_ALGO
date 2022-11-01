/**
 * @param {number[]} nums
 * @return {number[]}
 */

var findDisappearedNumbers = function (nums) {
  let fullArr = Array.from({
    length: Math.max(nums[nums.length - 1], nums.length)
  }, (blah, i) => i + 1);
  return fullArr.filter(el =>!nums.includes(el));
};


// there are the three possibilities that I know
// one: there is a gap in between the numbers of the array
// two: the length of the array is larger than the last digit
//    so we must fill the array to the end
// three: could be both one and two


console.log(findDisappearedNumbers([4, 3, 2, 7, 7, 2, 3, 1]));
// console.log(findDisappearedNumbers([1, 1, 2, 2]));