function insertionSort(arr){
    for(let i = 0; i < arr.length - 1; i++){
        let posn = i;
        for(let j = i+1; j <= arr.length -1; j++){
            if(arr[j] < arr[posn]){
                posn = j;
                [arr[posn],arr[i]] = [arr[i],arr[posn]];
            }
        }
        if(posn === i) break;
    }
    return arr;
}

// insertionSort([]);
// insertionSort([6,7,8,9])
insertionSort([40,30,20,10])