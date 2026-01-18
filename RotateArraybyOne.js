// Link: https://www.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one2614/1
// Rotate Array by One
// Difficulty: Basic Accuracy: 69.6% Submissions: 350K+ Points: 1 Average Time: 20m
// Given an array arr, rotate the array by one position in clockwise direction.

// Examples:

// Input: arr[] = [1, 2, 3, 4, 5]
// Output: [5, 1, 2, 3, 4]
// Explanation: If we rotate arr by one position in clockwise 5 come to the front and remaining those are shifted to the end.
// Input: arr[] = [9, 8, 7, 6, 4, 2, 1, 3]
// Output: [3, 9, 8, 7, 6, 4, 2, 1]
// Explanation: After rotating clock-wise 3 comes in first position.
// Constraints:
// 1<=arr.size()<=105
// 0<=arr[i]<=105

1.class Solution {
    rotate(arr) {
         let n=arr.length,temp=arr[n-1]
        for(let i=n-1;i>0;i--){
            arr[i]=arr[i-1]
        }
        arr[0]=temp
        return arr
    }
}

Time Complexity: O(n)
Space Complexity: O(1)

2.class Solution {
    rotate(arr) {
         let n=arr.length,temp=arr[n-1]
        for(let i=0;i<n;i++){
            arr[n-i-1]=arr[n-i-2]
        }
        arr[0]=temp
        return arr
    }
}

Time Complexity: O(n)
Space Complexity: O(1)
