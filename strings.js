const firstName = 'Prateek';
const lastName = 'Madaan';
const age = 21;
const str = 'Hello there, my name is Prateek Madaan';
const tags = 'Web Design,web development,programming';
let val;

//Concatenation of two strings
val = firstName + '' +  lastName;
//Concatenation
console.log(firstName.concat(lastName));

//Append
val = 'Prateek';
val += 'Madaan';

val = 'Hello,my name is ' + firstName + ' and I am' + age; 
//Escaping using the backslash
val = 'That\'s awesome, I can\'t wait';

//Properties and methods
val = firstName.length  //properties

//Change case
val = firstName.toUpperCase();
val = lastName.toLowerCase();

val = firstName[0];

//Find the index of a value
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

//charAt
val = firstName.charAt(1);
//get the last character
val = firstName.charAt(firstName.length - 1);
//substring
val = firstName.substring(1,3);
//slice similiar to substring
val = firstName.slice(0,2);
//split (to split a string into an array of characters)
//split at the space
val = str.split(' ');
//split by the comma
val = tags.split(',');
//replace
val = str.replace('Prateek','Prince');
//includes(gives true or false whether something is there in the string or not)
val = str.includes('Hello');
console.log(val);