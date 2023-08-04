/**
 * @param {any} obj
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
    if(obj instanceof classFunction){
        return true;
    }

    const classPrototype = classFunction.prototype;
    const propNames = Object.getOwnPropertyNames(classPrototype);
    const result = propNames.some(prop => typeof classPrototype[prop] === 'function' && obj[prop]);
    return result;


};
func = () => checkIfInstanceOf(5, Number)