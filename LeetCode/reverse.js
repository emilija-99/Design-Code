str = "Hello, World!";
function reverseFunction(str){
    let arrayString = str.split('');
    let arrayReverse = arrayString.reverse();
    let stringReverse = arrayReverse.join('');
    return stringReverse
}
let return1 = reverseFunction(str);
console.log(return1)

function myReverse(str){

    let n = str.length;
    let ind =0;
    let pom;
    n = parseInt(n/2);
    if(str.length%2 != 0){
        ind = str.length/2;
        ind++;
        ind = parseInt(ind);
    }
    for(let i = 0; i < n; i++){
        let j = str.length - 1 - i;
            if(ind === i){
                continue;
            }else{
                pom = str[i];
                let strArr = str.split('')
                strArr[i] = str[j];
                strArr[j] = pom;
                str = strArr.join('');
            }
        }

    return str;
}

let return2 = myReverse(str);
console.log(return2);

function reserveString(str){
    return str.split('').reverse().join("");
}
const return3 = reserveString("HEllo");
console.log(return3);

function reserveString1(str){
    newString = "";
    for(let i = str.length-1; i >= 0; i--){
        newString+= str[i];
    }
    console.log(newString);
}

reserveString1("IDEMO DALJE")
/*
A version constrol system is a system that keeps tracks of all changes made to a file or set of data so that a specific version can be reverted if necessary.

 */

for(let i = 0; i < 3; i++){
    setTimeout(()=>{
        console.log(i) // 0, 1, 2
    },100)
}
for(var i = 0; i < 3; i++){
    setTimeout(()=>{
        console.log(i) // 3, 3, 3
    },100)
}

/*
let keyword creates a block-scoped variable, meaning that each iteration of the loop has its own separate scope for the variable i
 The var keyword creates a function-scoped variable, meaning that there is only one variable i shared across all iterations of the loop.
*/
(function(){
    function doStuff(){
    // immediately invoked function expression
    }
})();

const obj = [1,2,3];
const clone = [...obj]
const clone1 = structuredClone(obj);
obj[2]=4;
console.log(obj, clone, clone1)
/*
[ 1, 2, 4 ] [ 1, 2, 3 ] [ 1, 2, 3 ]
 */

console.log({}+[]) // {} empty block + empty array
console.log({}+ {}) // empty block + empty block
console.log([]+ "0") // "0"
console.log(undefined+null) // NaN + 0 = NaN
console.log(isNaN(6), isNaN("Oprem"), isNaN(undefined), isNaN(null)) // false true true false
/*
[object Object]
[object Object][object Object]
0
NaN
 */

var i = 12;
let y = 23;
const fun = ()=>{
    let z = 234;
    function m(){
        console.log("z"+z);
        console.log("Y" +y);
        console.log("iii"+i);
    }
}
const k = fun();
/*
var have function scope or global scope, depending on where they are declared.
 */
var ou = ['0','1','3','10',3,5].map(parseInt); //[ 0, NaN, NaN, 3, 3, NaN ]

console.log(ou)
const arr = [1,5,7,4,3,2].map((curr, index, arr)=>{
    console.log(curr, index, arr);
/*
1 0 [ 1, 5, 7, 4, 3, 2 ]
5 1 [ 1, 5, 7, 4, 3, 2 ]
7 2 [ 1, 5, 7, 4, 3, 2 ]
4 3 [ 1, 5, 7, 4, 3, 2 ]
3 4 [ 1, 5, 7, 4, 3, 2 ]
2 5 [ 1, 5, 7, 4, 3, 2 ]
*/
})

class Person{
    constructor(name) {
        this.name = name;
    }
}
console.log(typeof Person); // function
var p = new Person("Mika");
console.log(typeof p); // object

// implemenation of map
Array.prototype.my_map = function (callback) {
    const newArr = [];
    for(let i = 0; i < this.length; i++){
        const item = this[i];
        const result = callback(item, i, this);
        newArr.push(result);
    }
    return newArr;
}
const arr11 = [1, 2, 3, 4, 5];
const maparrya = arr11.my_map((item)=>
    {
        return item*2;
    }
);
console.log(maparrya)

function doSomethingAsync(callback) {
    // Simulating an asynchronous operation with setTimeout
    setTimeout(() => {
        console.log("Async operation completed!");
        callback();
    }, 1000); // Wait for 1 second
}

function callbackFunction() {
    console.log("Callback function executed!");
}

doSomethingAsync(callbackFunction);


Array.prototype.my_filter = function(callback){
    const filteredItems = [];
    for(let i =0; i < this.length; i++){
        const item = this[i];
        const result = callback(item, i, this);
        if(Boolean(result) === true){
            filteredItems.push(result);
        }
    }
    return filteredItems;
}

const numb = [1,2,5,7,32,54,132];
const even = numb.my_filter(item => {
    if(item % 2 === 0){
        return item;
    }
});
console.log(even);

function maxNumber(numb){
    return Math.max(...numb);
}
console.log(maxNumber(numb))

function sumOfElements(element){
    return new Promise((res, rej)=>{
        if(element.length < 3){
           setTimeout(()=>{
               rej("Only tree element"+element+ " "+element.length);
           },2000)
        }else{
            let sum =0;
            for(let i = 0; i < element.length; i++){
                sum+=element[i];
            }
            res("SUm is "+sum);
        }

    })
}
 sumOfElements(numb).then(result => console.log(result)).catch(err => console.log(err));
function resolveAfter2Seconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Resolved after 2 seconds');
        }, 2000);
    });
}

async function doSomethingAsync() {
    console.log('Start');
    const result = await resolveAfter2Seconds();
    console.log(result);
    console.log('End');
}

doSomethingAsync();
/*
 The await keyword pauses the execution of the function until the Promise is resolved, and the resolved value is stored in the result variable.
 */

const commonStrings = {};
strings = ['a','a','b','c','a','v','v'];
strings.forEach((str)=>{
    if(commonStrings[str] === undefined){
        commonStrings[str] = 1;
    }else{
        commonStrings[str]++;
    }
})
console.log(commonStrings);
console.log(Object.keys(commonStrings));
console.log(Object.values(commonStrings));
/*
{ a: 3, b: 1, c: 1, v: 2 }
[ 'a', 'b', 'c', 'v' ]
[ 3, 1, 1, 2 ]
*/
var addTo = function (passed){
    var add = function (inner){
        return passed+inner;
    };
    return add;
};
const rev = addTo(3);
const rev1 = rev(3);
console.log("REV"+rev1);

var q = 3;
var n = 4;
q = n;
n = 6;
console.log(q,n);
let a,c;
[a,c] = [1,2];
console.log(a,c);
const ar = new Array(a,c);
console.log(ar)
const as = [a,c];
console.log(as);

// BUBBLE SORT
