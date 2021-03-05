function numJewelsInStones(jewels: string, stones: string): number {
    return [...stones].reduce((acc,stone) => jewels.includes(stone) ? ++acc : acc,0);
}

// Time Complexity : O(stones.length)
// Space Complexity : O(1)