var removeElement = function(nums, val) {
    let pom = 0;
    let newLength = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == val){
            nums[i] = "_";
            pom++;
        }
    }
    newLength = nums.length-pom;
    nums.sort();
    return newLength;
};
removeElement([0,1,2,2,3,0,4,2],2);