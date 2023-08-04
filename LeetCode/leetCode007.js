let removeDuplicate = function (arr){

    let j = 0;
    let i = 0;
    let pom = 0;
    let temp = 0;

    while(i < arr.length){
        temp = arr[i];

        for(let j = i+1; j < arr.length; j++){
            if(temp == arr[j]){
                arr[j] = "_";
                pom++;
            }
        }
        i++;
    }

    arr.sort();
    for(let i = 0; i < arr.length-pom-1; i++){
        for(let j = i+1; j < arr.length-pom;j++){
            if(arr[i] > arr[j]){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    temp = arr.length-pom;
    return temp;
}

nums = [0,-1,1,-5,1,2,2,3,3,4]
nums1 = [1,1,2]
removeDuplicate(nums)