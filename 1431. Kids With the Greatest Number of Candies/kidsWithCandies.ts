function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const max = candies.reduce((acc,candy) => Math.max(acc,candy),-Infinity);
    return candies.map(candy => ((candy + extraCandies) >= max));
}

// Time Complexity : O(candies.length)
// Space Complexity : O(1)