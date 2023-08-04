/**
 * @param {Function} fn
 */
// function memoize(fn) {
//
//     let callCount = {
//         number: 0
//     }
//     return function(...args) {
//         if(this in callCount){
//             return callCount[this];
//         }else{
//             callCount.number++;
//             if(callCount["number"] == 0){
//                 let returnValue = this[0]+this[1];
//                 caches[returnValue] =
//             }else if(callCount["number"] == 2){
//
//             }
//         }
//     }
// }

function memorized(){
    let callCount = {
        number:1,
        sum:(a,b)=>{
            return a+b;
        },
        fib:(a)=>{

        },
        fact:(a)=>{

        },
        check:()=>{
            if(callCount.number != 3) {
                callCount.number++;
            }else{
                callCount.number = 1;
            }
        }

    };
    return function(...args) {
        callCount.check();
        if (callCount.hasOwnProperty(1)) {
            return callCount.sum(args[0], args[1]).value;
        } else if (callCount.hasOwnProperty(2)) {
            return callCount.fib(args[0]);
        } else if (callCount.hasOwnProperty(3)) {
            return callCount.fact(args[0]);
        } else {
            return -1;
        }


        console.log(callCount.number);
    }
}
const b = memorized(1,2);
const c = memorized(2,5);
console.log(b,c)