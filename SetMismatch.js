// 645. Set Mismatch
//Link: https://leetcode.com/problems/set-mismatch/description/
// You have a set of integers s, which originally contains all the numbers from 1 to n.
// Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.
// You are given an integer array nums representing the data status of this set after the error.
// Find the number that occurs twice and the number that is missing and return them in the form of an array.
  
// Example 1:
// Input: nums = [1,2,2,4]
// Output: [2,3]

// Example 2:
// Input: nums = [1,1]
// Output: [1,2]

// Constraints:

// 2 <= nums.length <= 104
// 1 <= nums[i] <= 104

1.Brute Force
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    let n = nums.length
    let hash = new Map();
    let sum = 0, nsum = n * (n + 1) / 2, snum = 0
    for (let i = 0; i < n; i++) {
        sum += nums[i]
    }
    for (let i = 0; i < n; i++) {
        hash.set(nums[i], (hash.get(nums[i]) || 0) + 1)
    }
    for (let [key, value] of hash) {
        if (value > 1) {
            sum -= key
            snum = nsum - sum
            return [key, snum]
        }
    }
    return []
};

Time Complexity: O(n)
Spcae Complexity: O(n)
