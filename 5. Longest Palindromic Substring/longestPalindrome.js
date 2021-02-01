/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length < 1) return s;
    let start = 0, end = 0;
    for (let i = 0; i < s.length - 1; i++) {
        let lenPalindromeWithCentreI = lengthOfPalindromeWithI(s, i, i); //b where b is centre of palindrome
        let lenPalindromeInPairI = lengthOfPalindromeWithI(s, i, i + 1); // bb where first b is in pair
        let maxLenPalindrome = Math.max(lenPalindromeInPairI, lenPalindromeWithCentreI);
        if (maxLenPalindrome > end - start) {
            start = i - Math.floor((maxLenPalindrome - 1) / 2);
            end = i + Math.floor(maxLenPalindrome / 2);
        }
    }
    return s.substring(start,end+1);
};

var lengthOfPalindromeWithI = function (str,left,right) {
    while(left >= 0 && right < str.length && str[left] === str[right]){
        --left;
        ++right;
    }
    return right - left - 1;
}

console.log(longestPalindrome("babad"));

// Time Complexity : O(n*n)
// Space Complexity : O(1)