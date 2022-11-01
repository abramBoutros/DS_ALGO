/**
 * @param {number[]} nums
 * @return {number[]}
 */

var findDisappearedNumbers = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let trueLen = nums.length;
  nums = nums.filter((num, i) => num != nums[i+1] );
  console.log(nums);
  
  let returnArr = [];
  let len = nums.length;

  if(trueLen != nums[len-1]){
      for(let j = 1 ; j<= trueLen; j++){
        console.log(j , nums.includes(nums[j]));
        if(!nums.includes(j)) returnArr.push(j)
      }
      return returnArr
    }

  for (let i = 0; i < len; i++) {
    if (len === 1) {
      if(nums[i] === 1) return [2];
      for (let j = 1; j < nums[0]; j++) {
        returnArr.push(j);
      }
    } else if (nums[i] === nums[i + 1]) {
      returnArr.push(nums[i] + 1);
    }else if(nums[i] +1 < nums[i + 1]) {
      console.log(nums[i]);
      let j = 0;
      let lostDigit = 0;
      while(nums[i+j] < nums[i+1+j]){
        lostDigit === 0 ? lostDigit = nums[i+j]+1 : lostDigit++;
        returnArr.push(lostDigit);
        j++;
      }
    }
  }
  return returnArr
};


// console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDisappearedNumbers([4,3,2,7,7,2,3,1]));
// console.log(findDisappearedNumbers([1,1,2,2]));