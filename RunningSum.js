// Link: https://leetcode.com/problems/running-sum-of-1d-array/submissions/1037476489/
// 1480. Running Sum of 1d Array
// Easy
// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
// Example 3:

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]

// Constraints:

// 1 <= nums.length <= 1000
// -10^6 <= nums[i] <= 10^6

1. In place approach
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    for(let i=1;i<nums.length;i++)
    {
        nums[i]+=nums[i-1]
    }

    return nums
};

Time Complexity: O(n)
Space Complexity: O(1)

2. Using extra array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let res=[]
    res[0]=nums[0]
    for(let i=1;i<nums.length;i++)
    {
        res[i]=res[i-1]+nums[i]
    }

    return res
};

Time Complexity: O(n)
Space Complexity: O(n)
