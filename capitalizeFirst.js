function capitalizeFirst (arr) {
    if(!arr.length) return arr;
    return [`${arr[0][0].toUpperCase()}${arr[0].slice(1)}`].concat(capitalizeFirst(arr.slice(1)));
}


// capitalizeFirst(['manisha','mallick'])
capitalizeFirst(['car','taco','banana']);