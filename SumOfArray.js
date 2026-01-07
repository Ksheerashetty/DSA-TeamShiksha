// Link: https://www.geeksforgeeks.org/problems/sum-of-array2326/1
// Sum of Array
// Difficulty: Basic Accuracy: 74.98% Submissions: 146K+ Points: 1 Average Time: 20m
// You are given an integer array arr[]. The task is to find the sum of it.

// Examples:

// Input: arr[] = [1, 2, 3, 4]
// Output: 10
// Explanation: 1 + 2 + 3 + 4 = 10.
// Input: arr[] = [1, 3, 3]
// Output: 7
// Explanation: 1 + 3 + 3 = 7.
// Constraints:
// 1 <= arr.size <= 105
// 1 <= arr[i] <= 104

// User function Template for javascript
/**
 * @param {number[]} arr - The array of numbers to sum
 * @return {number} - The sum of the array elements
 */
class Solution {
    arraySum(arr) {
        // code here
        let sum=0;
        for(let i=0;i<arr.length;i++)
        sum+=arr[i]
        return sum
    }
    
}

Time Complexity: O(n)
Space Complexity: O(1)
