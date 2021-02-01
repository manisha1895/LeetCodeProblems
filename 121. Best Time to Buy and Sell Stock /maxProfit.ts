function maxProfit(prices: number[]): number {
    let minSale : number = prices[0], profit : number = -Infinity;
    for(let i=1;i<prices.length;i++){
        if((prices[i] - minSale) > profit){
            profit = prices[i] - minSale;
        }
        if(prices[i] < minSale) {
            minSale = prices[i];
        }
    }
    return profit > 0 ? profit : 0;
}

// Time Complexity : O(n)
// Space Complexity : O(1)