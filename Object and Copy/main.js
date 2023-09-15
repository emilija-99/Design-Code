/*
    Difference between copy and reference 

*/

let age = 100;
let age2 = age;
console.log(age,age2);
age = 200;
console.log(age,age2);
/*
    Why?
    Because the value of age goes into the variable at the same time.
    strings, numbers and boolean

*/
const players = ['Wes','Sarah','Ryan','Poppy'];
const team = players;
console.log(players, team);
team[3] = 'Lux';
console.log(players, team);

/*
    ['Wes','Sarah','Ryan','Lux']
    ['Wes','Sarah','Ryan','Lux']

    Because we updated team, but team is not the array.
    Team is just reference to the original array which is players.

*/

const team2 = players.slice();

const team4 = [...players];

const team5 = Array.from();

/*
    If you pass noting is it will take a copy of the actual array and paste it to team2.
    If you want element between 2,3, they will copy that element and pass it to team2, but
    playes will stay the same.

    const team2 = players.slice(2,3);
    team2 => ["Ryan"];
    players =>  ['Wes','Sarah','Ryan','Lux']

    team2[3] = 'Poppy';
    team2 => ['Wes','Sarah','Ryan','Poppy']
    players => ['Wes','Sarah','Ryan','Lux']

    And what the spread will do is it will take every item out of your iterable and put it into,
    in this case it's the containing array although we have also used spread to spread into 
    a function as well.

    team4[3] = 'heee weee';
    team4 => ['Wes','Sarah','Ryan','heee weee']
    players => ['Wes','Sarah','Ryan','Lux']

    Array.from() -> static method creates a new, shallow-copied Array instance 
    from an iterable or array-like object.

*/

const person = {
    name: 'Wes Bos',
    age: 80
};

const captain = person;
captain.number = 99;

Object.assign();

/*
    We made a reference to the original one. So how do you take a copy instead,
    that is with something called Object.assign().

    Object.assign() -> static method copies all enumerable own properties from one or
    more source objects to a target object.
    It returns the modified target object.


*/
const cap2 = Object.assign({}, person, {number: 99, age: 23});

const wes = {
    name: 'Wes',
    age: 100,
    social:{
        twitter: '@wesbos',
        facebook: 'wesbos.developer'
    }
}

const dev = Object.assign({}, wes);
dev.social.twitter = '@coolbos';
console.log(dev.social, wes.social);

/*
    Because when you use object.assing, it only does one level deep.
    If you need to do a clone, you have to get out a function and go online
    and find it where it's called clone deep and that will clone every
    level as deep as you want. 

    const dev2 = JSON.parse(JSON.stringify(wes)); -> deep clone
    JSON.stringify -> will return to you a string, that's no longer an object 
    and then you immediately JSON.parse() it to turn it back into an object, 
    and then you get a full copy of it rather then you shake all the 
    references. I have no idea about performance with that. You might want to
    look it up before you use it but that's often referred to as the poor man's deep clone.
*/

const dev2 = JSON.parse(JSON.stringify(wes));



