// GFG
// Link: https://www.geeksforgeeks.org/problems/second-largest3735/1
// Second Largest
// Difficulty: Easy Accuracy: 26.72% Submissions: 1.4M Points: 2 Average Time: 15m
// Given an array of positive integers arr[], return the second largest element from the array. If the second largest element doesn't exist then return -1.

// Note: The second largest element should not be equal to the largest element.

// Examples:

// Input: arr[] = [12, 35, 1, 10, 34, 1]
// Output: 34
// Explanation: The largest element of the array is 35 and the second largest element is 34.
// Input: arr[] = [10, 5, 10]
// Output: 5
// Explanation: The largest element of the array is 10 and the second largest element is 5.
// Input: arr[] = [10, 10, 10]
// Output: -1
// Explanation: The largest element of the array is 10 and the second largest element does not exist.
// Constraints:
// 2 ≤ arr.size() ≤ 105
// 1 ≤ arr[i] ≤ 105

1.Optimal Solution
class Solution {
    getSecondLargest(arr) {
         if(arr.length<2)
        return -1
        let max=arr[0],max2=-1
        for(let i=1;i<arr.length;i++)
        {
            if(arr[i]>max){
                max2=max
                max=arr[i]
            }
            else if(arr[i]>max2 && arr[i]!=max)
            max2=arr[i]
        }   
        return max2
    }
}

Time Complexity: O(n)
Space Complexity: O(1)

2.Second Approach
class Solution {
    getSecondLargest(arr) {
         if(arr.length<2)
        return -1
        let max=-Infinity,max2=-Infinity
        for(let i=0;i<arr.length;i++)
        {
            if(arr[i]>max){
                max2=max
                max=arr[i]
            }
            else if(arr[i]>max2 && arr[i]<max)
            max2=arr[i]
        }
      return max2==-Infinity?-1:max2
    }
}

Time Complexity: O(n)
Space Complexity: O(1)
