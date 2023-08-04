/**
 * 88. Merge Sorted Array
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    //
    // var temp = 0;
    // var i = 0;
    // var j = 0;
    //
    // while(i < n+m){
    //     console.log(nums1[i], "                        "+nums2[j]);
    //     if(nums1[i] == nums2[j]){
    //         console.log("Isti.")
    //         nums1.splice(i+1,0,nums2[j]);
    //         j++;
    //     }else if(nums2[j] < nums1[i]){
    //         console.log("Manji.");
    //         for(let k = 0; k < n+m; k++){
    //             if(nums1[k] >= nums1[j]){
    //                 temp = k;
    //                 break;
    //             }
    //             break;
    //         }
    //         nums1.splice(temp,0, nums2[j]);
    //         j++;
    //     }else if(nums2[j] > nums1[i]){
    //         console.log("Veci.");
    //         for (let k = 0; k < n+m; k++){
    //             if(nums1[k] < nums2[j]){
    //                 temp = k;
    //             }else{
    //                 break;
    //             }
    //         }
    //         nums1.splice(temp+1, 0, nums2[j]);
    //         j++;
    //     }
    //     i++;
    // }

    let i = m-1;
    let j = n-1;
    let k = m+n-1;

    while(j>=0){
        console.log("I: "+i+" "+nums1[i]+"                             J: "+j+" "+nums2[j]);
        if(i >=0 && nums1[i] > nums2[j]){
            nums1[k--] = nums1[i--];
        }else{
            nums1[k--] = nums2[j--];
        }
    }

};
merge([1,2,3],3,[2,5,6],3);