/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let temp, temp1;
    let pom = 0;
    let pomC = k;
    while(pomC > 0){

            temp = nums[pom];
            nums[pom]= nums[nums.length-pomC];
            nums[nums.length-pomC] = temp;

        console.log(nums);
        console.log(pomC);
        pom++;
        pomC--;
    }
    let ind = 3;
    let ind1 = 4;
    while(ind1 > 1 && ind > 1 ) {
        temp1 = nums[nums.length - ind1];
        nums[nums.length - ind1] = nums[nums.length - ind];
        nums[nums.length - ind] = temp1;
        ind--;
        ind1--;
    }
    temp = nums[nums.length-ind1];
    nums[nums.length-ind1] = nums[nums.length-ind];
    nums[nums.length-ind] = temp;


    console.log(nums);

};
nums = [1,2,3,4,5,6,7];
rotate(nums,3);