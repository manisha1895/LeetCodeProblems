function numIdenticalPairs(nums: number[]): number {
    let pairs = 0;
    nums.forEach((num,i)=>{
        pairs += nums.slice(i+1).reduce((acc,n) => n === num ? ++acc : acc,0)
    });
    return pairs;
}

// Time Complexity : O(nums.length)
// Space Complexity : O(1)