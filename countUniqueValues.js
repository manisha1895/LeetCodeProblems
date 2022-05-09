function countUniqueValues(sortedArr){
    // add whatever parameters you deem necessary - good luck!
    let uniqueCount = 0, lastUniqueChar = null;
    if(!sortedArr.length){
        return uniqueCount;
    }
    for(let char of sortedArr){
        if(char !== lastUniqueChar){
            lastUniqueChar = char;
            ++uniqueCount;
        }
    }
    return uniqueCount;
    
  }
  
  console.log(countUniqueValues([1,1,1,1,1,2]))
  console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))
  console.log(countUniqueValues([]))
  console.log(countUniqueValues([-2,-1,-1,0,1]))
  
  
  
  