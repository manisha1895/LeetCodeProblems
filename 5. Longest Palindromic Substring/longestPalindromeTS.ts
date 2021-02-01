function lenOfPalindromeWithI(str:string,left: number,right: number): number{
    while(left >= 0 && right < str.length && str[left] === str[right]){
        --left;
        ++right;
    }
    return right - left - 1;
}
function longestPalindrome(s: string): string {
    if(s.length < 1) return "";
    let start = 0 , end = 0;
    for(let i=0;i<s.length;++i){
        let lenPalindromeWithCentreI = lenOfPalindromeWithI(s,i,i); // b is len 1 palindrome with centre b
        let lenPalindromeWithPairI = lenOfPalindromeWithI(s,i,i+1); // bb is len 2 palindrome with pair b
        let maxLenPalindrome = Math.max(lenPalindromeWithCentreI,lenPalindromeWithPairI);
        if(maxLenPalindrome > end - start) {
            start = i - Math.floor((maxLenPalindrome - 1) / 2);
            end = i + Math.floor(maxLenPalindrome / 2);
        }
    }
    return s.substring(start,end+1);
}

console.log(longestPalindrome("ababd"));

// Time Complexity : O(n*n)
// Space Complexity : O(1)