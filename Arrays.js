//Creating arrays
const numbers = [1,24,5,6,7,8];
//Using the Array Constructor
const numbers2 = new Array(23,33,322,32,32);
const fruits = ['apple','banana','orange','pear'];
const mixed = ['prateek',1,true,undefined,{a:1,b:2},null,new Date()]
console.log(mixed); //This works

let val;
//Perform all kinds of mutations on the array
console.log(numbers.length);
//Check if numbers is an array
val = Array.isArray(numbers);   //true
//Get a single value from the array
val = numbers[3];
//Insert into array
numbers[2] = 100;
//Find the index of value
val = numbers.indexOf(24);  //1
//To add at the end of the array
numbers.push(12);
//To add at the front of the array
numbers.unshift(222);
//To remove an element from the back of the array use pop
numbers.pop()
//To remove an element from the front of the array use shift
numbers.shift()
//To splice an element from the array generally used to remove an element
numbers.splice(1,1);    //To remove the second element from the array and remove only 1 element
//To reverse an array
numbers.reverse();
//Concatenation of arrays
val = numbers.concat(numbers2);
//Sorting arrays
val = fruits.sort();
//Sorting numbers but using the callback as original method will not work
val = numbers.sort((x,y) => x - y);
//Sorting in reverse order
val = numbers.sort((x,y) => y - x);
//Find 
function under50(num){
    return num<50;
}
val = numbers.find(under50);

console.log(numbers);
console.log(val);