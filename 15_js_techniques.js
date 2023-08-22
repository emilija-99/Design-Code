/*
    Reverse a string
 */
const str = "Iama";
const reversedString = str.split('').reverse().join('');

/*
    Sum of Array Elements
 */
const numbers1 = [1,2,3,4,5];
const sum = numbers1.reduce((total, number)=>total+number,0);

/*
    Larger and Smallest Number in Array
 ... to pass each value in the array as an argument
 */
const numbers = [11, 2, 9, 6, 19, 11, 11, 11];
Math.max(...numbers);
Math.min(...numbers);

/*
    Remove duplicates
    a new Ste object and pssing the array as its parameter, you can ensure that only unique values are kept.
 */
const unique = [...new Set(numbers)];
var arr = [...unique];
console.log(unique);
console.log(arr, typeof arr);

/*
    Looping Objects
     Object.entries() method is used to return an array of an objet's key-value pairs.
*/
const person = {
    name:'Rabi Siddique',
    age: 25,
    city: 'Gujranwala'
};
for(const [key,value] of Object.entries(person)){
    console.log(`${key} : ${value}`);
}

/*
    Copy to ClipBoard
*/
function copyToClipboard(test){
    navigator.clipboard.writeText(test);
}

/*
    Offline/Online status
    property returns a boolean value indicating whether the browser is currently online or offline
 */
if(navigator.onLine){
    console.log("User is online");
}else{
    console.log("User is offline");
}

/*
    Remove Falsy Values
    all sub-array elemets are concatenated into a signle flat array.
 */
const array = [1, 2, 3, '', undefined, null, NaN, false];
filteredArray = array.filter(Boolean);

/*
    Flattening An Array
 */
const multiDimensionalArray = [[1,2],[3,4,[5,6]]];
const flattened = multiDimensionalArray.flat(2);
console.log(flattened)

/*
    Accesing Custom Attributes
 */
const myDiv = document.getElementById('myDiv');
const name = myDiv.dataset.name;

/*
    Create Array from iterables
 */
const string = "RABI";
console.log(Array.from(string));

/*
    Destricting Arrays and Objects
*/
const numb = [1,2,3,4,5];
const [f,s,fo] = numb;
const {name, age, email} = peson;

/*
    Detecting Right CLicks in the Browser
 */
document.addEventListener('contextmenu', (event)=>{
    event.preventDefault();
    console.log('Right click detected');
})
/*
    Promise.all() - allows multiple promises to be executed in parallel.
    It takes an array of promises as input and returns a new promise that resolves when all the input promises have resolved.
 */
const promise1 = fetch('https://api.example.com/data1');
const promise2 = fetch('https://api.example.com/data2');
Promise.all([promise1,promise2]).then(responses =>{
    const response1 = responses[0];
    const response2 = responses[1];
}).catch(error => console.log(error.message));