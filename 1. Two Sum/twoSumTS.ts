function twoSumTS(nums: number[], target: number): number[] {
    let mapOfNumbers : Map<number,number> = new Map<number, number>(); // key: num from nums, value: their array index
    // we loop nums array and check in mapOfNumbers
    // if a key exists that can add upto target with current num in nums
    for(let i: number =0;i<nums.length;i++){
        const otherKey : number = target - nums[i];
        // if otherKey already traversed , we got the pair
        if (mapOfNumbers[otherKey] !== undefined) return [i, mapOfNumbers[otherKey]];
        // if otherKey not traversed , we add nums[i]
        if (mapOfNumbers[nums[i]] === undefined) mapOfNumbers[nums[i]] = i;
    }
}

// Time complexity : O(n)
// Space complexity : O(n)