function bubbleSort(arr){
    for(let i = arr.length-1; i > 0; i--){
        let swaps = 0;
        for(let j = 0; j <= i - 1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                ++swaps;
            }
        }
        if(!swaps){
            break;
        }
    }
    return arr;
}

bubbleSort([6,7,8,9])
bubbleSort([40,30,20,10])