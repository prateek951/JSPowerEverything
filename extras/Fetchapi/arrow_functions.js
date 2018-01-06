// const sayHello = function(){
//     console.log('Hello');
// }
// using the arrow single line function
// const sayHello = () => console.log('Hello');

// const sayHello = () => 'Hello';

//RETURN OBJECT
// const sayHello = () => (
//     {
//         msg : 'Hello'
//     }
// )

//single param doesn't need parenthesis
// const sayHello = name => console.log(`Hello ${name}`);

// sayHello('prateek');

//multiple params need parenthesis
// const sayHello = (firstName,lastName) => console.log(`Hello ${firstName} ${lastName}`);

// sayHello('Prateek','Madaan');

const users = ['prateek','john','william'];
const nameLengths = users.map(name => name.length);
console.log(nameLengths);

// arrow functions use lexical this we no need to worry about scope