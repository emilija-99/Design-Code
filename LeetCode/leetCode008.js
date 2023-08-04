/**
 * @param {number[]} nums
 * @return {number}
    Remove Duplicates - Medium
 */
var removeDuplicates = function(nums) {

    let temp = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == nums[i+1]){
            for(let j = i+2; j < nums.length; j++){
                if(nums[j] == nums[i]){
                    temp++;
                    for(let k = j; k<nums.length;k++){
                        nums[k] = nums[k+1];
                    }

                    nums[nums.length-temp] = "_";
                }
            }
        }
    }
    console.log(nums)
    var reValue = nums.length - temp;
    console.log(reValue)
    return reValue;

};

nums = [0,0,1,1,1,1,2,3,3]
removeDuplicates(nums);