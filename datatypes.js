//String
//Number
//Boolean
//Null
//Undefined
//Symbols

//String
const name = 'Prateek Madaan';
//Number
const age = 45;
//Boolean
const hasKids = true;
//Null
const car = null;
//Undefined (use let and not const)
let test;
//Symbols in ES6
const sym = Symbol();
console.log(typeof sym);      
console.log(test);
console.log(hasKids);
console.log(age);
console.log(typeof name);
console.log(typeof null);   //null is an object(bug in javascript)


//Reference Types in Javascript

const hobbies = ['movies','music'];
console.log(typeof hobbies);    //Object(because array is an object)

//Object literal
const address = {
    city : 'Delhi',
    state : 'Delhi'
}
console.log(typeof address);    //object
const today = new Date();
console.log(today);
console.log(typeof today);  //object


//Type conversion in Javascript
let val;    //initially undefined
//Number to String
val = 123;
// val = String(144);
// val = String(4+4);
//Boolean to String
// val = String(true);
//Date to String
//val = String(new Date());
//Array to String
//val = String([1,2,34,4,5])
//Output 

//toString() method should always be used
valString = val.toString();

console.log(val);
console.log(typeof val);    //Number
console.log(val.length);   //undefined for number since numbers have no length

//Converting Strings to numbers
var s = '333';
console.log(Number(s).toFixed(2));

val = Number('Hello');  //will give NaN


val = parseInt('100')   //100 as a number will be obtained
//For decimals use parseFloat
val = parseFloat('100.30')


//Type Coersion
//JS does typeconversion for us
const val1 = String(5);
const val2 = 6;
const sum = val1+val2;  //56
console.log(sum);
console.log(typeof sum);

//String to Integer
// parseInt() and parseFloat() for such conversions