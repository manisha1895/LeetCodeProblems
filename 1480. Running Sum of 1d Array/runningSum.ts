function runningSum(nums: number[]): number[] {
    return nums.reduce((acc,num) => [...acc,num + acc[acc.length-1]],[nums.shift()]);
}

// Time Complexity : O(nums.length)
// Space Complexity : O(1)