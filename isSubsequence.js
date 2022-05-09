function isSubsequence(str1, str2) {
    let j = 0; // iterator for str2
    for(let i =0; i < str1.length ;){
        if(j < str2.length && str1[i] === str2[j]){
                i++;
        }
        if(j >= str2.length){
            return false;
        }
        j++;
    }
    return true;
  }
  
  console.log(isSubsequence('hello', 'hello world'))
  console.log(isSubsequence('sing', 'sting'))
  console.log(isSubsequence('abc', 'abracadabra'))
  console.log(isSubsequence('abc', 'acb'))