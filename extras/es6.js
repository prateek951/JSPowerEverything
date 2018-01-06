//es6
class Person{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    //any method we add to the class will be added to the Object.prototype
    greeting() {
        return `Hello ${this.firstName} ${this.lastName}`
    }
    static addNumbers(x,y){
        return x+y
    }
}
const prateek = new Person('Prateek','Madaan');
console.log(prateek);
console.log(prateek.greeting());
//es6 
console.log(Person.addNumbers(2,3));
// console.log(prateek.addNumbers(1,2));wont work