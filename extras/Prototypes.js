// Object Literals
// No classes in ES5
// Each object in JS has a  prototype
//Object.prototype
//Person.prototype
function Person(firstName,lastName,dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    // this.getCurrentAge = function(){
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970)
    // }
}

const john = new Person('Prateek','Madaan','22-10-1996');
const mary = new Person('Mary','Johnson','22-11-2003');
console.log(john);
console.log(mary);

//Calculate age
Person.prototype.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970)
}
//Get fullname
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
}
console.log(mary.getFullName());
// you cannot access the prototype using the forin loop
console.log(mary.hasOwnProperty('firstName'));

//Prototypal inheritance

//Inheriting prototype from the parent
function Person2(firstName,lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person2.prototype.greeting = function(){
    return `Hello There ${this.firstName} ${this.lastName}`;
}

const prateek = new Person2('Prateek','Madaan');
console.log(prateek.greeting());

//Customer Constructor
function Customer(firstName,lastName,phone,membership){
    Person.call(this,firstName,lastName);
    this.phone = phone;
    this.membership = membership;
}

//Inherit Person prototype method
// Create prototype for customer from the person prototype
Customer.prototype = Object.create(Person.prototype);

//Make customer.protype return customer
Customer.prototype.constructor = Customer;

//Create customer
const customer1 = new Customer('Tom','Jerry','3232','standd');
console.log(customer1);

//Customer greeting(We can override them)
Customer.prototype.greeting = function(){
    return `Hello ${this.firstName} ${this.lastName} there...Welcome`
}
console.log(customer1.greeting());

//Using Object.create
const personPrototypes = {
    greeting: function(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getMarried : function(newLastName){
        this.lastName = newLastName;
    }
}
const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 22;
console.log(mary);
mary.getMarried('Sarah');
console.log(mary.greeting);

const prateek = Object.create(personPrototypes,{
    firstName : {
        value : 'prateek'
    },
    lastName : {
        value : 'madaan'
    },
    age : {
        value : 20
    }
});
console.log(prateek);
console.log(prateek.greeting());