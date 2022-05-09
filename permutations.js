function permutations (str, left, right) {
    //If left index is equal to right index
    //Print the string permutation
    if(left === right){
      console.log(str);
    }else{
      for(let i = left; i <= right; i++){
        //Swap the letters of the string
        str = swap(str, left, i);
        //Generate the permutation with swapped letters
        permutations(str, left+1, right);
        //Restore the letters back to their position
        str = swap(str, left, i);
      }
    }
  }
  
  //Function to swap the letters of the string
  function swap (str, left, right) {
    let arr = str.split('');
    [arr[left], arr[right]] = [arr[right], arr[left]];
    return arr.join('');
  }
  
  console.log(permutations("abc",0,2))
  // a , b , c , aa , ab , ac , ba , bb , bc