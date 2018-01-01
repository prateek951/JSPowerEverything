const person = {
    firstName : 'Prateek',
    lastName : 'Madaan',
    age : 21,
    email : 'prince.cenation@gmail.com',
    hobbies : ['music','cricket'],
    address : {
        city : 'Delhi',
        state : 'Delhi'
    },
    getBirthYear : function(){
        return 2017 - this.age;
    }
}

let val;

val = person;
//get specific value
val = person.firstName; //recommended
val = person['firstName'];
val = person.lastName;
val = person.age;
val = person.email;
val = person.hobbies[0];
val = person.address.city;
val = person.address.state;
val = person.getBirthYear();
console.log(val);   //gives the actual object

//Array of persons
const people = [{
    name : 'Prateek',
    age : 21
},
{
    name : 'Mike',
    age : 11
}];

for (let i = 0; i < people.length; i++) {
    console.log(people[i].name + 'is' + people[i].age + ' years old');
}









