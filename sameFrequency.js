function sameFrequency(number1, number2){
    const number1Str = `${number1}`, number2Str = `${number2}`; 
    if(number1Str.length !== number2Str.length)
        return false;
    const digitFrequency = {};
    for(let digit of number1Str){
        digitFrequency[digit] = (digitFrequency[digit] || 0 ) + 1;
    }
    for(let digit of number2Str){
        if(digitFrequency[digit]){
            --digitFrequency[digit];
        } else {
            return false;
        }
    }    
    return true;  
  }
  
  console.log(sameFrequency(182,281));
  console.log(sameFrequency(34,14));
  console.log(sameFrequency(3589578,5879385));
  console.log(sameFrequency(22,222));
  
  
  
  