function minSubArrayLen (arr, num) {
    let len = 0, minLen = Infinity, sum = 0;
    for(let i = 0, j = i;i<arr.length;){
        if(sum < num && j < arr.length){
            sum += arr[j];
            ++j;
        } else {
            len = j - i;
            if(sum >= num && len < minLen){
                minLen = len;
            }
            sum = 0;
            ++i;
            j = i;
        }
    }
    
    return minLen;
}

// console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
// console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));
// console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));

