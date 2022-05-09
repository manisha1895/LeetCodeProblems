function areThereDuplicates(...args) {
    const frequency = {};
    let start = 0 , end = args.length - 1;
    while(start <= end){
        // add char from start
        if(frequency[args[start]]){
            return true;
        } else {
            frequency[args[start]] =  1;
        }
        // add char from end
        if(frequency[args[end]] && end !== start){
            return true;
        } else {
            frequency[args[end]] =  1;
        }
        ++start;
        --end;
    }
    return false;
}

console.log(areThereDuplicates(1,2,3));
console.log(areThereDuplicates(1,2,2));
console.log(areThereDuplicates('a','b','c','a'));
console.log(areThereDuplicates('m','1','i'));

