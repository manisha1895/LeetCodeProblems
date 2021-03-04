function shuffle(nums: number[], n: number): number[] {
    let ans = [],i;
    for(i=0;i<n;i++) {
        ans.push(nums[i],nums[i+n]);
    }
    return ans;
}

// Time Complexity : O(nums.length)
// Space Complexity : O(1)

