
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {

    var filteredArray = []
    for(let i = 0; i < arr.length; i++){
        if(fn(arr[i],i)){
            filteredArray.push(arr[i]);
        }
    }

};

arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
filter(arr,fn);