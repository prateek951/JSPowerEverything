//Function declarations and expressions

function greet(){
    // console.log('Hello');
    return 'Hello';
}

console.log(greet());

//Functions with parameters

function greet(firstName, lastName){
    // In ES 5
    if(typeof firstName === 'undefined'){
        firstName = 'Prateek';
    }
    if(typeof lastName === 'undefined'){
        lastName = 'Madaan';
    }
    return `Hello ${firstName} ${lastName}`;
}
// console.log(greet('Prateek','Madaan'));
console.log(greet())    //Hello Prateek Madaan
console.log(greet('non','bob'));    //Hello non bob

// Now the above function in es6
function greeter(firstName='Prateek',lastName='Madaan'){
    return `Hello ${firstName} ${lastName}`
}

console.log(greeter());   //Hello Prateek Madaan
console.log(greeter('Madhu','Mehta'));  //Hello Madhu Mehta

//Function expressions
//Putting a function as a variable assigned
const square = function(x){
    //anonymous function
    return x*x;
}
console.log(square(8));

//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS(IIFEs)
(function(){
    console.log('IIFE ran....');
})();

(function(name){
    console.log(`Hello ${name}`);
})('Prateek');

//TODO OBJECT
const todo = {
    add: function(){
        console.log('Add Todo...');
    },
    edit: function(id){
        console.log(`Edit Todo...${id}`);
    }
}
todo.delete = function(){
    console.log('Deleting the todo item....');
}
todo.add();
todo.edit(12);
todo.delete();

