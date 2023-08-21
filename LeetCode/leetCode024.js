/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    // var len = x.toString().length;
    // console.log(len)
    // if(len % 2 != 0){
    //     a = x.toString().slice(0,parseInt(len/2)-1);
    //     b = x.toString().slice(parseInt(len/2)+1, len-1);
    //     console.log("%2!=0", a, b);
    // }else{
    //     a = x.toString().slice(0,parseInt(len/2));
    //     b = x.toString().slice(parseInt(len/2), len-1);
    //     console.log("%2==0", a, b);
    // }
    //
    //
    // if(a === b && x > 0){
    //     return  true;
    // }else
    //     return false;

    if(x < 0) return false;
    var original = x;
    var reverse = 0;

    while(x > 0){
        let digit = x % 10;
        x = Math.floor(x/10);
        reverse = reverse * 10 + digit;
    }
    return reverse === original;
};
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(-10));