function restoreString(s: string, indices: number[]): string {
    return s.split("").map((_,i) => s[indices.indexOf(i)]).join("");
}

// Time Complexity : O(s.length*indices.length)
// Space Complexity : O(1)