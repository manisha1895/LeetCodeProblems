function validAnagram(str1, str2){
    // add whatever parameters you deem necessary - good luck!
    
    // check if str1 and str2 have the same length
    if(str1.length !== str2.length){
        return false;
    }
    
    const str1CharMap = {}, str2CharMap = {};
    // loop str1 and add keys and values
    for(let char of str1){
        str1CharMap[char] = (str1CharMap[char] || 0 ) + 1;
    }
    
    // loop str2 and add keys and values
    for(let char of str2){
        str2CharMap[char] = (str2CharMap[char] || 0 ) + 1;
    }
    // match value for each key
    
    for(let char in str1CharMap){
        if(str1CharMap[char] !== str2CharMap[char]){
          return false;
        }
    }
    return true;
    
  }
  validAnagram('anagram','nagaram')
  