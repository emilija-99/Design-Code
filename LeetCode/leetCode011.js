/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 * Array Reduce Transfromation
 */
var reduce = function(nums, fn, init) {

    if(nums.length <= 0 ){
        return init;
    }else{
        const accum = fn(init, nums[0]);
        const numsOst = nums.slice(1);
        return reduce(numsOst, fn, accum);
    }
};
nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr; }
init = 0
console.log(reduce(nums,fn,init))