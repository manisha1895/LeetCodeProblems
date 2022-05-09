function maxSubarraySum(arr, n){
    if(arr.length < n){
        return null;
    }
    let sum = 0, maxSum = -Infinity, i;
    for(i=0; i < n; i++){
        sum += arr[i];
        // console.log('OKIE',sum,i)
    }
    if(sum > maxSum){
            maxSum = sum;
    }
    for(i = 1; i <= arr.length - n ; i++){
        sum += (-arr[i-1]) + arr[i+n-1];
                // console.log('OKIE',sum,i)
        if(sum > maxSum){
            maxSum = sum;
        }
    }
    return maxSum;

}


console.log(maxSubarraySum([100,200,300,400], 2))
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4))
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2))
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2))
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2))
console.log(maxSubarraySum([2, 3], 3))