function maximumWealth(accounts: number[][]): number {
    return accounts.map(account => account.reduce((acc,wealth) => acc + wealth),0).reduce((acc,total)=>Math.max(acc,total),0);
}
// Time Complexity : O(accounts.rows*accounts.columns)
// Space Complexity : O(1)