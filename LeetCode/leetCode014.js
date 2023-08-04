/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {

    var res = init;
    return{
        increment: ()=>++res,
        decrement: ()=>--res,
        reset: ()=>init
    }

};


const counter = createCounter(5)
var a = counter.increment();
console.log(a)