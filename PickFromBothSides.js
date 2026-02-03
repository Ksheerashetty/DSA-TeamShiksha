// Pick from both sides
// Problem Link: https://www.interviewbit.com/problems/pick-from-both-sides/
// Problem Description

// Given an integer array A of size N.
// You have to pick exactly B elements from either left or right end of the array A to get the maximum sum.
// Find and return this maximum possible sum.

// NOTE: Suppose B = 4 and array A contains 10 elements then


// Problem Constraints
// 1 <= N <= 105
// 1 <= B <= N
// -103 <= A[i] <= 103

// Input Format
// First argument is an integer array A.
// Second argument is an integer B.

// Output Format
// Return an integer denoting the maximum possible sum of elements you picked.

// Example Input
// Input 1:
//  A = [5, -2, 3 , 1, 2]
//  B = 3

// Input 2:
//  A = [1, 2]
//  B = 1

// Example Output
// Output 1:
//  8
// Output 2:
//  2

// Example Explanation
// Explanation 1:
//  Pick element 5 from front and element (1, 2) from back so we get 5 + 1 + 2 = 8
// Explanation 2:
//  Pick element 2 from end as this is the maximum we can get 2

1. Brute Force
module.exports = {
	//param A : array of integers
	//param B : integer
	//return an integer
	solve: function (A, B) {
		let res = -Infinity
		for (let i = 0; i <= B; i++) {
			let sum = 0
			for (let j = 0; j < i; j++) {
				sum += A[j]
			}
			for (let k = 0; k < B - i; k++) {
				sum += A[A.length - 1 - k]
			}
			res = Math.max(res, sum)
		}
		return res;
	}
};

Time Complexity: O(n^2)
Space Complexity: O(1)

2. Using suffix and prefix sum
module.exports = {
    //param A : array of integers
    //param B : integer
    //return an integer
    solve: function (A, B) {
        let max = -Infinity, prefix = [], suffix = []

        // Prefix
        prefix[0] = A[0]
        for (let i = 1; i < A.length; i++) {
            prefix[i] = A[i] + prefix[i - 1]
        }

        //Suffix
        suffix[A.length - 1] = A[A.length - 1]
        for (let i = A.length - 2; i >= 0; i--) {
            suffix[i] = A[i] + suffix[i + 1]
        }

        //leftsum and rightsum
        for (let i = 0; i <= B; i++) {
            let ls = 0, rs = 0
			//when its not l=0,r=3
            if (i > 0)
                ls = prefix[i - 1] // take i from left
			//when its not l=3,r=0
            if (B - i > 0)
                rs =suffix[A.length - (B - i)]  // take B-i from right
            max = Math.max(max, ls + rs)
        }
        return max;

    }
};

Time Complexity: O(n)
Space Complexity: O(n)
