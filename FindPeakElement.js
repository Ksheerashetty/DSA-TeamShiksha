// 162. Find Peak Element
//Problem Link: https://leetcode.com/problems/find-peak-element/description/
// A peak element is an element that is strictly greater than its neighbors.
// Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.
// You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.
// You must write an algorithm that runs in O(log n) time.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: 2
// Explanation: 3 is a peak element and your function should return the index number 2.

// Example 2:
// Input: nums = [1,2,1,3,5,6,4]
// Output: 5
// Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.

// Constraints:
// 1 <= nums.length <= 1000
// -231 <= nums[i] <= 231 - 1
// nums[i] != nums[i + 1] for all valid i.

1.Brute Force
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let left = (i === 0) ? -Infinity : nums[i - 1]
        let right = (i === nums.length - 1) ? -Infinity : nums[i + 1]
        if (left < nums[i] && nums[i] > right) {
            return i
        }
    }
    return 0
};

Time Complexity: O(n)
Space Complexity: O(1)

2.Better - Binary Search
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    if (nums.length === 1) return 0
    if (nums[0] > nums[1]) return 0
    if (nums[nums.length - 2] < nums[nums.length - 1]) return nums.length - 1
    let low = 1, high = nums.length - 2
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (nums[mid - 1] < nums[mid] && nums[mid] > nums[mid + 1]) {
            return mid
        } else if (nums[mid - 1] > nums[mid])
            high = mid - 1
        else
            low = mid + 1
    }
};

3.Optimal - Binary Search
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    if (nums.length === 1) return 0
    let low = 0, high = nums.length-1
    while (low < high) {
        let mid = Math.floor((high + low) / 2)
        if (nums[mid] < nums[mid + 1]) {
            low = mid + 1
        } else
            high = mid
    }
    return low
};

Time Complexity: O(log n)
Space Complexity: O(1)
