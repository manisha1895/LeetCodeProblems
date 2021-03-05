function smallerNumbersThanCurrent(nums: number[]): number[] {
    function findSmallerThan(num: number,arr: number[]){
        let low = 0, high = arr.length -1;
        while(low <= high){
            let mid = Math.floor((low+high)/2);
            if(arr[mid] >= num){
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return low;
    }
    const sorted = [...nums].sort((a,b) => a-b);
    return nums.map(num => findSmallerThan(num,sorted));
}

// Time Complexity : O(nums.length*log(nums.length))
// Space Complexity : O(nums.length)