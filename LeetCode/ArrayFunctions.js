arr1 = ["You","will","concat"];
arr2 = ["Two", "arrays","into","One"];
nums = [1,5,3,6,3];
/*
    --    method returns an indexed element from array
*/
var atFunction = function (nums, element){

    var retValue = nums.at(element);
    console.log(retValue); // 6
    retValue = nums.at(0);
    console.log(retValue); // 1
    retValue = nums.at();
    console.log(retValue); // 3
    retValue = nums.at(-1);
    console.log(retValue); // 1

};
atFunction(nums,3);

/*
    concat joins two or more arrays
    returns a new array, containg the joined arrays
    does not change the existig array
 */
var concatFunction= function (nums1, nums2){
    var retValue = nums1.concat(nums2);
    console.log(retValue);
    // [
    //     'You',    'will',
    //     'concat', 'Two',
    //     'arrays', 'into',
    //     'One'
    // ]

    console.log(nums1);
    console.log(nums2);
    // [ 'You', 'will', 'concat' ]  [ 'Two', 'arrays', 'into', 'One' ]

}
concatFunction(arr1, arr2);

/*
    method copies array elements to another position in the array
    methods overwrites the existing values
    method does not add items to array
 */
var copyWithinMethod = function (arr){
    arr.copyWithin(2,0,1)
    console.log(arr);
    // [ 'You', 'will', 'You' ]

}
copyWithinMethod(arr1)

var entriesMethod = function (arr){
    const dir = arr.entries();
    for (let elm in dir){
        console.log(elm);
    }
}
entriesMethod(arr1)