let person = {
    firstName : "John",
    lastName : "Doe",
    age : 50,
    eyeColor : "green",
    fullName: function(){
        return this.firstName+" "+this.lastName;
    }
};

console.log(person.firstName);
console.log(person)
console.log(person.fullName());
console.log(person['age'])

// adding new property
person.dayOfBirth = new Date("1989-08-16");
person.calculateAge = function (){
    let year = new Date().getFullYear() - this.dayOfBirth.getFullYear();
    this.age = year;
    if(new Date().getMonth() - this.dayOfBirth.getMonth() <= 0) {
        if(new Date().getDay() - this.dayOfBirth.getDay() <= 0){
            this.age = year;
        }
    }else{
        this.age = year-1;
    }
}
person.calculateAge()
console.log(person.age);
delete person.eyeColor;

function PER(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

let per = new PER("Milojko","Jovica");
console.log(per.firstName);

function myDisplay(string){
    console.log(string);
}
function myFirst(){
    myDisplay("heloo");
}
function mySecond(){
    myDisplay("hello.");
}
myFirst();
mySecond();

mySecond();
myFirst();