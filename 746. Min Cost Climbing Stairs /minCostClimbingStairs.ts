function minCostClimbingStairs(cost: number[]): number {
    let n : number = cost.length, minCost : Array<number> = new Array<number>(n);
    minCost[0] = cost[0];
    minCost[1] = cost[1];
    for(let i=2;i<n;i++){
        minCost[i] = cost[i] + Math.min(minCost[i-1],minCost[i-2]);
    }
    return Math.min(minCost[n-1],minCost[n-2]);
}

// Time Complexity : O(n)
// Space Complexity: O(n)