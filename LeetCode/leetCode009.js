/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

    const counts = {};

    for (const num of nums) {
        counts[num] = (counts[num] || 0) + 1;
        console.log(counts);
    }

    for (const num in counts) {
        if (counts[num] > nums.length / 2) {
            return parseInt(num);
        }
    }

    return -1;

};
nums = [2,2,1,1,1,2,2];
majorityElement(nums);