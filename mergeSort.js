function merge(arr1, arr2){
    let result = [], i, j; 
    for(let ptr = 0, i = 0, j= 0; ptr < (arr1.length + arr2.length);ptr++){
        if(i < arr1.length && j < arr2.length){
            // both array have elements
            if(arr1[i] < arr2[j]){
                result[ptr] = arr1[i];
                ++i;
            } else {
               result[ptr] = arr2[j];
               ++j; 
            }
        } else if (i < arr1.length) {
            // arr1 only has elements
            result[ptr] = arr1[i];
            ++i;
        } else {
           // arr2 only has elements
           result[ptr] = arr2[j];
           ++j;
        }
    }
    return result;
}

function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0,mid);
    let right = arr.slice(mid);
    return merge(mergeSort(left),mergeSort(right)); 
}


// mergeSort([]);
// mergeSort([6,7,8,9])
mergeSort([40,30,50,20,10])