// Link: https://leetcode.com/problems/left-and-right-sum-differences/submissions/1877537590/
// 2574. Left and Right Sum Differences
// Easy
// You are given a 0-indexed integer array nums of size n.

// Define two arrays leftSum and rightSum where:

// leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, leftSum[i] = 0.
// rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element, rightSum[i] = 0.
// Return an integer array answer of size n where answer[i] = |leftSum[i] - rightSum[i]|.

// Example 1:

// Input: nums = [10,4,8,3]
// Output: [15,1,11,22]
// Explanation: The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
// The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].
// Example 2:

// Input: nums = [1]
// Output: [0]
// Explanation: The array leftSum is [0] and the array rightSum is [0].
// The array answer is [|0 - 0|] = [0].

// Constraints:

// 1 <= nums.length <= 1000
// 1 <= nums[i] <= 105

1.Brute Force 1 - Prefix + Total Sum O(4n)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
    let res = [], leftSum = [], rightSum = [], sum=0
    leftSum[0] = 0
    rightSum[nums.length - 1] = 0
    for (let i = 1; i < nums.length; i++) {
        leftSum[i] = leftSum[i - 1] + nums[i - 1]
    }
    for(let i=0;i<nums.length;i++){
        sum+=nums[i]
    }
    for (let i = 0; i < nums.length - 1; i++) {
            rightSum[i]=sum-leftSum[i+1]
    }
    for (let k = 0; k < nums.length; k++) {
        res[k] = Math.abs(leftSum[k] - rightSum[k])
    }
    return res
};

Time Complexity: O(n)
Space Complexity: O(n)

2.Brute Force 2 - Prefix + Suffix Arrays O(4n)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let leftSum=[],rightSum=[],res=[]
    leftSum[0]=0
    rightSum[nums.length-1]=0
    for(let i=1;i<nums.length;i++){
        leftSum[i]=leftSum[i-1]+nums[i-1]
    }
    for(let i=nums.length-2;i>=0;i--){
        rightSum[i]=rightSum[i+1]+nums[i+1]
    }
    for(let i=0;i<nums.length;i++){
    res[i]=Math.abs(leftSum[i]-rightSum[i])
    }
    return res
};

Time Complexity: O(n)
Space Complexity: O(n)

3.Optimal Approach - Prefix + Running Right Sum O(2n)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let rsum=0,lsum=0,res=new Array(nums.length).fill(0)
    for(let i=0;i<nums.length;i++){
        rsum+=nums[i]
    }

    for(let i=0;i<nums.length;i++){
        rsum-=nums[i]
        res[i]=Math.abs(rsum-lsum)
        lsum+=nums[i]
    }
    return res
    
};

Time Complexity: O(n)
Space Complexity: O(n)

4.In place Approach
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let rsum=0,lsum=0,val=0
    for(let i=0;i<nums.length;i++){
        rsum+=nums[i]
    }
    for(let i=0;i<nums.length;i++){
        val=nums[i]
        rsum-= val
        nums[i]=Math.abs(rsum-lsum) 
        lsum+=val
    }

    return nums
};

Time Complexity: O(n)
Space Complexity: O(1)
