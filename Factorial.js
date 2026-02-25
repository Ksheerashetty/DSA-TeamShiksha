// Factorial
// Link: https://www.geeksforgeeks.org/problems/factorial5739/1
// Difficulty: Basic Accuracy: 40.58% Submissions: 229K+ Points: 1
// Given a positive integer, n. Find the factorial of n.

// Examples :
// Input: n = 5
// Output: 120
// Explanation: 1 x 2 x 3 x 4 x 5 = 120
// Input: n = 4
// Output: 24
// Explanation: 1 x 2 x 3 x 4 = 24
// Constraints:
// 0 ≤ n ≤ 12

/**
 * @param {number} n
 * @returns {number}
 */

class Solution {
    factorial(n) {
        if(n===1 || n===0 ) return 1
        return n*this.factorial(n-1)
    }
}

Time Complexity: O(n)
Space Complecity: O(n)
