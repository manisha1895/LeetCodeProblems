function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
    return items.reduce((acc,item) => {
        ruleKey === "type" ? (item[0] === ruleValue ? ++acc : acc) : ( ruleKey === "color" ? (item[1] === ruleValue ? ++acc : acc) : (item[2] === ruleValue ? ++acc : acc));
        return acc;
    },0);
}

// Time Complexity : O(items.rows)
// Space Complexity : O(1)