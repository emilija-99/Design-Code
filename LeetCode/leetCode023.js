/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // const len = digits.length;
    // var retVal = [];
    // let num = 0;
    // for(let i = 0; i < len; i++){
    //     const pom = digits[i];
    //     num = num * 10 + pom;
    // }
    //
    // num = num+1;
    //
    //
    // retVal = String(num).split('').map((n)=>{
    //     return Number(n);
    // })
    //
    // return retVal;
    let len = digits.length-1;
    while(digits[len] === 9){
        digits[len] = 0;
        len--;
    }
    if(len === -1){
        digits.unshift(1);
    }else{
        digits[len]++;
    }
    return digits;
};
digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
plusOne(digits)