//Inheritance in ES6(subclassing)

class Person{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}
class Customer extends Person {
    constructor(firstName,lastName,phone,membership){
        super(firstName,lastName)
        this.phone = phone;
        this.membership = membership;
    }
    static getMembershipCost(){
        return 500;
    }
}

const prateek = new Customer('Prateek','Madaan','2222','standd');

console.log(prateek);
console.log(prateek.greeting());
console.log(Customer.getMembershipCost());
// console.log(Person.getMembershipCost());wont work