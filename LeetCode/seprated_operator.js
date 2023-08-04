// function sum(x,y,z){
//     return x+y+z;
// }
// const numbers = [10, 20, 30];
// // console.log(sum.apply(null, numbers)); // 60
// // console.log(sum(...numbers)) // 60

// let fruits = ["Apple", "Orange", "Banana"];
// let copyOfFruits = [...fruits]
// // console.log(copyOfFruits) [ 'Apple', 'Orange', 'Banana' ]

// let arr1 = ["A", "B", "C"];
// let arr2 = ["X", "Y", "Z"];
// let result = [...arr1, ...arr2]
// // console.log(result) [ 'A', 'B', 'C', 'X', 'Y', 'Z' ]

// let newFruits = ["Cherry", ...fruits]
// // console.log(newFruits) [ 'Cherry', 'Apple', 'Orange', 'Banana' ]

// let obj1 = {id: 101, name: 'Rajiv Sandal'}
// let obj2 = {age: 35, country:'INDIA'}
// let employee = {...obj1, ...obj2} { id: 101, name: 'Rajiv Sandal', age: 35, country: 'INDIA' }
// console.log(employee)

// let numbers1 = new Set([10,20,20,30,40,50])
// console.log(numbers1)
// console.log(typeof numbers1)

// function add(x = 10, y = 20){
//     console.log(x+y);
// }
// add(20,60)

// const msg = "Message ..."
// console.log(msg.repeat(3))

// let add = (x,y) => x+y;
// console.log(add(10,20))

// const person = {
//     name: "Ema",
//     actions: ["Bike", "Hike", "Ski"],
//     printActions(){
//         this.actions.forEach((action)=>{
//             console.log(this.name+" likes to "+action)
//         })
//     }
// }
// person.printActions();

// const {title, price, description} = {
//     title: "Samsung",
//     price: 124,
//     description: "Phone with extra functionalities."
// };
// console.log(title, price, description)

// function* generator(num){
//     yield num + 10;
//     yield num + 20;
//     yield num + 30;
// }
// let gen = generator(10);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);


// const title = "ES6"
// const iterateIn = title[Symbol.iterator]();
//
// console.log(iterateIn.next().value)
// console.log(iterateIn.next().value)
// console.log(iterateIn.next().value)
//
// const value1 = '10'
// const value2 = 20;
// let sum = value1+value2
// console.log(sum)
// sum = Number(value1)+value2
// console.log(sum)


// var elements = ['Fire', 'Air', 'Water'];
//
// console.log(elements.join()); // Output: "Fire,Air,Water"
// console.log(elements.join('')); // Output: "FireAirWater"
// console.log(elements.join('-')); // Output: "Fire-Air-Water"

// const numbers = [1,6,-6,32,-3,42,5];
// console.log(numbers.sort())
// console.log(numbers.sort((a,b)=>b-a));
// console.log(numbers.sort((a,b)=>a-b));

// const numbers = [1,5,6,2,-54,2,-5,-6,2,3];
//
// numbers.forEach((a)=>console.log(a>5));
// console.log(numbers);
// const result = numbers.map((a)=>a+a-2);
// console.log(result);
// console.log(numbers)

// function sum(){
//     let total = 0;
//     console.log(arguments.length);
//     len = arguments.length;
//
//     for(let i = 0; i < arguments.length; i++){
//         console.log(arguments[i]);
//         total+=arguments[i];
//     }
//     return total;
// }
//
// var result = sum(10,20,30,40);

const employee1 = {firstName:'Sahima', lastName:'Mutti'}
const employee2 = {firstName:'Sahima', lastName:'Mutti'}
function say(greeting){
    console.log(greeting + " "+this.firstName + " "+ this.lastName);
}
say.call(employee1, "HI")
say.apply(employee1, ["Hiiii"]);
