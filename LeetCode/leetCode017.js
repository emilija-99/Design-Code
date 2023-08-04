/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    let newArr = [];
    let newArrys = [];
    let num = arr.length%size;

    // console.log(num)
    let check = parseInt(arr.length/size);
    let length = 0;
    let i,j = 0;
    // console.log(check)
    while(check > 0){
        for (let i = 0; i < size; i++){
            newArr.push(arr[j]);
            j++;
        }
        newArrys.push(newArr)
        newArr = [];
        check--;
        // console.log(newArr)
        // console.log(newArrys)
    }
    newArr = [];
    for (let i = 0; i < num; i++){
        newArr.push(arr[j]);
        if(j < arr.length-1){
            j++;
        }else{
            break;
        }
    }
    newArrys.push(newArr)
     console.log(newArr)
     console.log(newArrys)


};

arr = [1,2,3,4,5], size = 1
arr1 = [1,9,6,3,2], size1 = 3
arr2 =[8,5,3,2,6], size2 = 6
chunk(arr,size);
