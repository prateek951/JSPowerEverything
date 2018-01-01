if (true) {
    console.log('Hello I am true')
}else {
    console.log('I am falsy');
}

const id = 100;
//equal
if(id == 100){
    console.log('Correct');
}else {
    console.log('Incorrect');
}

//Not equal
if(id !== 100){
    console.log('Correct');
}else{
    console.log('Incorrect');
}
//Equal to value and type
if(id === 100){
    console.log('Correct');
}else{
    console.log('Incorrect');
}

console.log(typeof id);

if(id >= 100){
    console.log('Correct');
}else {
    console.log('Incorrect');
}

const color = 'green';
if(color == 'blue'){
    console.log('Color is blue');
}else if(color == 'green'){
    console.log('Color is green!!!');
}else {
    console.log('Color is some other color');
}


///logical operators
const name = 'Prateek';
const age = 21;

if(age > 15 && age < 25){
    console.log(`${name} is mature teenager`);
}else if(age>= 25 && age <= 50){
    console.log(`${name} is an adult`);
}else{
    console.log(`${name} is old person`);
}

//OR 
if(age <16 || age> 65){
    console.log(`${name} cannot run in race`);
}else{
    console.log(`${name} can run in race`);
}
//TERNARY OPERATOR
console.log(id === 100 ? 'Correct' : 'Incorrect');

//CURLY BRACES IS OPTIONAL

