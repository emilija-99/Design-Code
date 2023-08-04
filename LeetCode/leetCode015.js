/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // var first = 0;
    // var second = 0;
    // var arr = [];
    // var ind =0 ;
    // outerLoop:for(let i = 0; i < nums.length-1; i++){
    //     for(let j = 1; j < nums.length; j++){
    //         first = nums[i];
    //         second = nums[j];
    //         console.log(first+ " "+second)
    //         if((first+second) == target && i!=j){
    //             arr.push(i);
    //             arr.push(j);
    //             ind = 1;
    //             break outerLoop;
    //         }
    //
    //     }
    //
    // }
    // console.log(arr)

    var first = 0;
    var index = -1;
    var arr =[]
    outerLoop : for(let i = 0; i < nums.length; i++){
        first = target - nums[i];
        if(nums.includes(first)){
            arr.push(i);
            index = arr.indexOf(first);

        }
        if(index != -1) {
            arr.push(index);
            break outerLoop;
        }
    }
    console.log(arr)

};
nums = [2,7,11,15]
target = 9
nums1 =[2,5,5,11]
target1 = 10;
twoSum(nums1,target1)