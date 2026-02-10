// 4. Median of Two Sorted Arrays
//Problem Link: https://leetcode.com/problems/median-of-two-sorted-arrays/
// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n)).

// Example 1:
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// Example 2:
// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 
// Constraints:
// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106


1.Brute Force
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let n = nums1.length + nums2.length, arr = [], i = 0, j = 0
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] <= nums2[j])
            arr.push(nums1[i++])
        else
            arr.push(nums2[j++])
    }
    while (i < nums1.length)
        arr.push(nums1[i++])
    while (j < nums2.length)
        arr.push(nums2[j++])
    return (n % 2 !== 0) ? arr[Math.floor(n / 2)] : (arr[n / 2] + arr[n / 2 - 1]) / 2
};

Time Complexity: O(m+n)
Space Complexity: O(m+n)

2.Better (Space)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let n = nums1.length + nums2.length
    let med = Math.floor(n / 2), count = 0, i = 0, j = 0, curr = 0, prev = 0
    while (count <= med && i < nums1.length && j < nums2.length) {
        prev = curr

        if (nums1[i] < nums2[j]) curr = nums1[i++]
        else curr = nums2[j++]

        count++
    }
    while (count <= med && i < nums1.length) {
        prev = curr
        curr = nums1[i++]
        count++
    }
    while (count <= med && j < nums2.length) {
        prev = curr
        curr = nums2[j++]
        count++
    }
    return (n % 2 !== 0) ? curr : (curr + prev) / 2
};

Time Complexity: O(m+n)
Space Complexity: O(1)
