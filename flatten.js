function flatten(arr){
    let result = [];
    if(!arr.length) return result;
    if(Array.isArray(arr[0])){
        result.push(...flatten(arr[0]));
    } else {
        result.push(arr[0]);
    }
    return result.concat(flatten(arr.slice(1)));
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]