function averagePair(array, sum){
    const hashMap = {};
    for(let num of array){
        if(hashMap[num]){
            return true;
        } else {
            hashMap[(sum*2)-num] = num;
        }
    }
    return false;
  
}

console.log(averagePair([1,2,3], 2.5));
console.log(averagePair([1,3,3,5,6,7,10,12,19], 8));
console.log(averagePair([-1,0,3,4,5,6], 4.1));
console.log(averagePair([], 4));