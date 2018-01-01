const num1 = 100;
const num2 = 50;
let val;
//Simply math with numbers
val = num1+num2;
val = num1-num2;
val = num1*num2;
val = num1%num2;
val = num1/num2;

//Math object
val = Math.PI;
val = Math.E;
//Round a number
val = Math.round(2.8)
//To round the number up 
val = Math.ceil(2.4)
//To round the number down
val = Math.floor(2.8)
//To find the square root of the number
val = Math.sqrt(64);
//To find the power of something
val = Math.pow(4,3);
//To find the minimum of a list of values
val = Math.min(2,33,4,5,6,7,8,4,21,6464,5454);
val = Math.max(2,33,4,5,6,7,8,4,21,6464,5454);
//To find the random number between 0 and 1
val = Math.floor(Math.random()*20 + 1);
console.log(val);