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
    return Object.getOwnPropertyNames(classPrototype).some(prop => typeof classPrototype[prop] === 'function' && obj[prop]);

};
func = () => checkIfInstanceOf(5, Number)