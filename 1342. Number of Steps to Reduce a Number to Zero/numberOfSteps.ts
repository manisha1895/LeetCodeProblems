function numberOfSteps (num: number): number {
    let step : number = 0;
    while(num){
        if(num%2 === 0){
            num /= 2;
        } else {
            --num;
        }
        ++step;
    }
    return step;
}

// Time Complexity : O(1)
// Space Complexity : O(1)