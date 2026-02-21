// Median in a row-wise sorted Matrix
// Difficulty: Medium Accuracy: 55.05% Submissions: 172K+ Points: 4
// Problem Link: https://www.geeksforgeeks.org/problems/median-in-a-row-wise-sorted-matrix1527/1
// Given a row-wise sorted matrix mat[][] of size n*m, where the number of rows and columns is always odd. Return the median of the matrix.

// Examples:
// Input: mat[][] = [[1, 3, 5], 
//                 [2, 6, 9], 
//                 [3, 6, 9]]
// Output: 5
// Explanation: Sorting matrix elements gives us [1, 2, 3, 3, 5, 6, 6, 9, 9]. Hence, 5 is median.

// Input: mat[][] = [[2, 4, 9],
//                 [3, 6, 7],
//                 [4, 7, 10]]
// Output: 6
// Explanation: Sorting matrix elements gives us [2, 3, 4, 4, 6, 7, 7, 9, 10]. Hence, 6 is median.

// Input: mat = [[3], [4], [8]]
// Output: 4
// Explanation: Sorting matrix elements gives us [3, 4, 8]. Hence, 4 is median.

// Constraints:
// 1 ≤ n, m ≤ 400
// 1 ≤ mat[i][j] ≤ 2000

1.Brute Force 
/**
 * @param {number[][]} mat
 * @returns {number}
 */

class Solution {
    median(mat) {
          let arr=[],mid=0
        for(let i=0;i<mat.length;i++){
            for(let j=0;j<mat[i].length;j++){
               arr[mat[0].length*i+j]=mat[i][j]
            }
        }
        arr.sort((a,b)=>a-b)
        mid=Math.floor(arr.length/2)
        return arr[mid]
    }
}

Time Complexity: O(n^2)*O(log m*n)
Space Complexity: O(n)

2.Using Upper bound and Binary Search
Upper bound - An upper bound is a value that is greater than or equal to every element in a given set, function, or data range.
It acts as a maximum limit or "ceiling," where all possible values in the set are below or equal to it. 
