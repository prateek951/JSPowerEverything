const prateek = {
    name : 'Prateek',
    age : 21
}
console.log(prateek.name);
console.log(prateek.age);


Person Constructor
function Person(){
    this.name = 'Prateek Madaan';
}

const prateek = new Person();
console.log(prateek);   //gives the actual object
const node = new Person();
// console.log(node);  //gives the object with same name

function Person(name){
    this.name = name;
     this refers to the current instance of the object
console.log(this);
}
console.log(this);       //Window object in the global scope
const p1 = new Person('Prateek');
console.log(p1);
console.log(p1.name);


function Person(name,age,dob){
    this.age = age;
    this.name = name;
    this.birthday = new Date(dob);
    this.getAge = function(){
        const diff = Date.now() - this.birthday.getTime;
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}
const Node = new Person('Prateek',21)
console.log(Node.age);
console.log(Node.name);
console.log(Node.birthday);

const prateek = new Person('Prateek',22,'9-10-2011');
console.log(prateek.age);

Builtin constructors
not advisable to be used
slows down the execution speed
Strings
const name1 = 'Prateek';
console.log(name1);

const name2 = new String('Prateek Madaan');
console.log(name2.length);

console.log(typeof name2);

if(name2 == 'Prateek'){
    console.log('Yo!!')
}else if(name2.splice(' ')[0] == 'Prateek')
    {
        console.log('This is definitely correct');
    }


// Number
const num1 = new Number(3);
console.log(num1);

const num2 = 43;
console.log(num2.toString());

//Boolean
const bool1 = true;
const bool2 = new Boolean(true);

//Functions
const getSum = function(x,y){
    return x+y;
}
console.log(getSum(2,3));
//Function Constructor
const getSum2 = new Function('x','y','return 1 + 1');
consoel.log(getSum2(1,1));

//Object 
const john = {
    name : 'John',
    age : 22
}
console.log(john.name);
const john2 = new Object({
    name : 'John'
});
console.log(john2.name);


//ARRAYS
const arr1 = new Array(1,3,4,5,6);
console.log(arr1);
const arr2 = [1,2,34,4,5,6];
console.log(arr2);

//RegExp Constructor
const re1 = /\w+/;  //word character occuring one or more times

const re2 = new RegExp('\\w+');
console.log(re2);
