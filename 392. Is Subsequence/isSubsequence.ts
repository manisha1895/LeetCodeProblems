function isSubsequence(s: string, t: string): boolean {
    let posn = 0;
    for(let char of s){
        const index = t.indexOf(char,posn);
        if(index=== -1) return false;
        posn = index + 1;
    }
    return true;
}

// Time Complexity : O(m*n) where m = s.length , n = t.length
// Space Complexity : O(1)