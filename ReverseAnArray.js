// Link: https://www.geeksforgeeks.org/problems/reverse-an-array/1
// Reverse an Array
// Difficulty: Easy Accuracy: 55.32% Submissions: 262K+ Points: 2 Average Time: 5m
// You are given an array of integers arr[]. You have to reverse the given array.
// Note: Modify the array in place.

// Examples:
// Input: arr = [1, 4, 3, 2, 6, 5]
// Output: [5, 6, 2, 3, 4, 1]
// Explanation: The elements of the array are [1, 4, 3, 2, 6, 5]. After reversing the array, the first element goes to the last position, the second element goes to the second last position and so on. Hence, the answer is [5, 6, 2, 3, 4, 1].
// Input: arr = [4, 5, 2]
// Output: [2, 5, 4]
// Explanation: The elements of the array are [4, 5, 2]. The reversed array will be [2, 5, 4].
// Input: arr = [1]
// Output: [1]
// Explanation: The array has only single element, hence the reversed array is same as the original.
// Constraints:
// 1 ≤ arr.size() ≤ 105
// 0 ≤ arr[i] ≤ 105

1.Two pointers
/**
 * @param {number[]} arr
 * @returns {void}
 */
class Solution {
    reverseArray(arr) {
        let i = 0, j = arr.length - 1,temp;
        while (i < j) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
        return arr;
    }
}

Time Complexity: O(n)
Space Complexity: O(1)

2.for loop
/**
 * @param {number[]} arr
 * @returns {void}
 */
class Solution {
    reverseArray(arr) {
        let temp,n=arr.length
        for(let i=0;i<n/2;i++){
            temp=arr[i]
            arr[i]=arr[n-1-i]
            arr[n-1-i]=temp
        }
        return arr
    }
}

Time Complexity: O(n)
Space Complexity: O(1)
