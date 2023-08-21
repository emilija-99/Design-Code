const people = [
    {name : 'Wes', year: 1988},
    {name : 'Kait', year: 1986},
    {name: 'Irv', year: 1970},
    {name: 'Lux', year: 2015}
];

const comments = [
    {text: 'Love this!', id: 523423},
    {text: 'Super good', id:823423},
    {text: 'You are the best', id:2039842},
    {text: 'Ramen in my fav food ever', id:123523},
    {text: 'Nice Nice Nice!', id:542328}
];

// const isAdult = people.some(function(person){
//     const currYear = (new Date()).getFullYear();
//     if(currYear - person.year >= 19){
//         return true;
//     }
// })
const isAdult = people.some((person)=>((new Date()).getFullYear()- person.year >= 19));
console.log({isAdult});

const adults = people.every((person)=>((new Date()).getFullYear()- person.year >= 19));
console.log({adults});

// const commentF = comments.find(function(comment){
//     if(comment.id === 823423){
//         return true;
//     }
// })
// console.log(commentF);

const comment = comments.find(comm => (comm.id === 823423));
console.log(comment);

const ind = comments.findIndex(comm=>comm.id===823423);
console.log(ind);
// console.log(comments)
comments.splice(ind,1);
// console.log(comments)

const newComments = [
    ...comments.slice(0,ind),
    ...comments.slice(ind+1)
];

console.log(newComments);