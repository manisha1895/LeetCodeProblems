function findLongestSubstring(str){
    // window : i ..... j 
    let substr = '', maxLen = 0, freqMap = {}, len = 0;  
    for(let i = 0,j = i;i < str.length; ){
        if(!freqMap[str[j]] && j < str.length){
          substr += str[j];
          freqMap[str[j]] = 1;
          ++j;
        } else {
            len = substr.length;
            if(len > maxLen){
              maxLen = len;
            }
            ++i;
            freqMap = {};
            substr = '';
            j = i;
          }
        } 
    return maxLen;
  }
  
  
  // console.log(findLongestSubstring(''));
  console.log(findLongestSubstring('rithmschool'));
  // console.log(findLongestSubstring('thecatinthehat'));
  // console.log(findLongestSubstring('thisisawesome'));
  // console.log(findLongestSubstring('bbbbbb'));
  // console.log(findLongestSubstring('longestsubstring'));
  // console.log(findLongestSubstring('thisishowwedoit'));