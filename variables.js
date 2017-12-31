//  var let const 
//No need of var

//let helps in block scoping
var name = 'Prateek Madaan';
console.log(name);  //Prateek Madaan
name = 'Steven Smith';
console.log(name);//Steven Smith

//Init variable
var greeting;   //This simply sets the variable
//to undefined
console.log(greeting);

var $name = 'Prateek';  //Use such variables in jquery
var _name;  //ok

//Using the let keyword
let name2; //undefined
name2 = 'Prateek Madaan';
console.log(name2);
name2 = 'This is me';
console.log(name2);  //This is me

//Using the const keyword
const name = 'Prateek';
console.log(name);
// name=123; we cannot reassign a const variable
const greeting; //Always be initialized when declared
// e.g
//const express = require('express') ok in nodejs
//const express; express = require('express')       //not ok in nodejs


const person = {
    name : 'Prateek Madaan',
    age : 21
}
//mutate the person object
person.name = 'Nacstraw';
person.age = 223;
console.log(person);    //we will get the object


const numbers = [12,4,545,232,233];
// numbers = [1,32,4,43,45,5,5634];    This is not allowed you can't reassifn an originally created entity with a new entity
console.log(numbers.push(1));
console.log(numbers.append(3));
console.log(numbers);   //gives 3,12,4,545,232,233,1

