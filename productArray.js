

function productOfArray(arr){
    if(!arr.length) return 0;
    if(arr.length === 1) return arr[0];
    return arr[0] * productOfArray(arr.slice(1));
}

productOfArray( [1,2,3]) // 6
productOfArray([1,2,3,10]) // 60
productOfArray([1,2]) // 2
productOfArray([5]) // 5
productOfArray([]) // 0