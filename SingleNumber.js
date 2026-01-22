// 136. Single Number
// Problem Link: https://leetcode.com/problems/single-number/description/
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:
// Input: nums = [2,2,1]
// Output: 1

// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4

// Example 3:
// Input: nums = [1]
// Output: 1

// Constraints:
// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice except for one element which appears only once.

1.Brute force - Using two loops
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let count = 0
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] == nums[j])
                count++
        }
        if (count === 1)
            return nums[i]
    }
    return -1
};

Time Complexity: O(n^2)
Space Complexity: O(1)

2.Sort and compare
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i += 2) {
        if (nums[i] !== nums[i + 1])
            return nums[i]
    }
    return -1
};

Time Complexity: O(nlogn)
Space Complexity: O(1)

3.Using HashMap
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1)
    }
    for (let [key, value] of map) {
        if (value === 1)
            return key
    }
    return -1
};

Time Complexity: O(n)
Space Complexity: O(n)

4.Optimal and satisfies the given question
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let res=0
    for(let i=0;i<nums.length;i++){
        res^=nums[i]
    }
    return res
};

Time Complexity: O(n)
Space Complexity: O(1)
