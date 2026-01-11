// Link: https://www.geeksforgeeks.org/problems/find-the-smallest-and-second-smallest-element-in-an-array3226/1
// First and Second Smallests
// Difficulty: Easy Accuracy: 24.44% Submissions: 160K+ Points: 2
// Given an array, arr[] of integers, your task is to return the smallest and second smallest element in the array. If the smallest and second smallest do not exist, return -1.

// Examples:

// Input: arr[] = [2, 4, 3, 5, 6]
// Output: [2, 3] 
// Explanation: 2 and 3 are respectively the smallest and second smallest elements in the array.
// Input: arr[] = [1, 1, 1]
// Output: [-1]
// Explanation: Only element is 1 which is smallest, so there is no second smallest element.
// Constraints:
// 1 ≤ arr.size ≤105
// 1 ≤ arr[i] ≤ 105


class Solution {
    minAnd2ndMin(arr) {
        if (arr.length < 2) return [-1];

        let min1 = arr[0], min2 = Infinity;

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < min1) {
                min2 = min1;
                min1 = arr[i];
            } else if (arr[i] > min1 && arr[i] < min2) {
                min2 = arr[i];
            }
        }

        return min2 === Infinity ? [-1] : [min1, min2];
    }
}

Time Complexity: O(n)
Space Complexity: O(1)
