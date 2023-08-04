/**
 * @param {Object | Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    let result = Object.keys(obj).length;
    console.log(result)
    if(result == 0){
        return true;
    }else{
        return false;
    }
};
obj = {}
obj1 = [null, false, 0]
obj2 = {"x": 5, "y": 42};
isEmpty(obj);
isEmpty(obj1)
isEmpty(obj2)