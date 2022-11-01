/**
 * @param {number[]} nums
 * @return {number[]}
 */

var findDisappearedNumbers = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let max = Math.max(nums[nums.length - 1], nums.length);

  nums = nums.filter((num, i) => num != nums[i + 1]);
  let fullArr = Array.from({
    length: max
  }, (buhh, i) => i + 1);

  let returnArr = [];

  // if the last digit is the max then we only need fill the gap
  if (max === nums[nums.length - 1]) {
      for(let i = 0; i< fullArr.length ; i++){
    if(nums[i] != fullArr[i]) returnArr.push(i+1);
  }
  }

  for (let i = 0; i < nums.length; i++) {
    if (max === nums[nums.length - 1]) {
      for (let j = 0; j < array.length; j++) {
        const element = array[j];

      }
    } else if (nums[i] != fullArr[i]) {

    }
  }

  return returnArr;
};


// there are the three possibilities that I know
// one: there is a gap in between the numbers of the array
// two: the length of the array is larger than the last digit
//    so we must fill the array to the end
// three: could be both one and two


// console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
// console.log(findDisappearedNumbers([4,3,2,7,7,2,3,1]));
console.log(findDisappearedNumbers([1, 1, 2, 2]));