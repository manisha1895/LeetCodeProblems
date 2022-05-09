function isPalindrome(str){
    if(str.length <= 1) return true;
    return str[0] === str[str.length-1] && isPalindrome(str.slice(1,str.length-1));
}

isPalindrome('awesome') // false
isPalindrome('foobar') // false
isPalindrome('tacocat') // true
isPalindrome('amanaplanacanalpanama') // true
isPalindrome('amanaplanacanalpandemonium') // false
