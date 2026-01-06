// GFG
// Min and Max in Array
// Difficulty: Basic Accuracy: 68.55% Submissions: 398K+ Points: 1 Average Time: 10m
// Given an array arr[]. Your task is to find the minimum and maximum elements in the array.

// Examples:

// Input: arr[] = [1, 4, 3, -5, -4, 8, 6]
// Output: [-5, 8]
// Explanation: minimum and maximum elements of array are -5 and 8.
// Input: arr[] = [12, 3, 15, 7, 9]
// Output: [3, 15]
// Explanation: minimum and maximum element of array are 3 and 15.
// Constraints:
// 1 ≤ arr.size() ≤ 105
// 1 ≤ arr[i] ≤ 109

/**
 * @param {number[]} arr
 * @returns {number[]}
 */

class Solution {
    getMinMax(arr) {
       
       if(arr.length==0) return [-1,-1]
       let min=arr[0],max=arr[0]
       for(let i=1;i<arr.length;i++){
           if(arr[i]<min)
           min=arr[i]
           if(arr[i]>max)
           max=arr[i]
           
       }
       return [min,max]
    }
}

Time Complexity: O(n)
Space Complexity: O(1)
