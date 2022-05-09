function selectionSort(arr){
    for(let i = 0; i < arr.length - 1; i++){
        let min = i;
        for(let j = i+1; j <= arr.length - 1; j++){
            if(arr[j] < arr[i]){
                min = j;
            }
        }
        if(i !== min){
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
    return arr;
}

// selectionSort([])
// selectionSort([6,7,8,9])
selectionSort([40,30,20,10])