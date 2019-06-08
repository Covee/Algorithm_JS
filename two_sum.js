/* REFERENCE
https://leetcode.com/problems/two-sum/

**Introductions
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

**Example:
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

*/

var twoSum = function(nums, target) {
    let na = {};
    for (let i = 0; i<nums.length; i++){
        let t = target - nums[i];
        if(t in na){
            return [na[t], i];
        }
        na[nums[i]] = i;
    }

    return "There is no matching.";
};


let nums = [2, 7, 11,15];
let target = 9;
console.log(twoSum(nums, target));


// Comment: 굉장히 효율적으로 사고해내기 까다롭다.