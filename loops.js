//for,while,do..while in general

//for arrays we make use of forEach , map functions
numbers = [1,234,5,5,6,45,57];

for (var i = 0; i < numbers.length; i++) {
    if(i === 2){
        console.log(`${i} is my favorite number`);
        continue;
    }
    if (i === 5) {
        console.log('Stop the loop!! Break out from the loop');
        break;
    }
    console.log(numbers[i]);
}
numbers.forEach(number=> console.log(number));
//While loop
let i = 0;
while(i < 10){
    console.log(i);
    i++;
}
//do while
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 10);

const cars = ['Mercedez','Ford','Cameroon','Honda','BMW'];
for (var i = 0; i < cars.length; i++) {
    console.log(cars[i] + "\n");
}

cars.forEach(car => console.log(car));

//map method 
const users = [
    {
        name : 'Prateek',
        age : 21
    },
    {
        name : 'Sara',
        age : 22
    },
    {
        name : 'Madhu',
        age : 12
    }
];

//create an array of ids from the users array
const ids = users.map(user => user.id);
console.log(ids);

//for in loop
const user = {
    firstName : 'Prateek',
    lastName : 'Madaan',
    age : 21
}
for (let user in users) {
   console.log(user.firstName);
   console.log(user.lastName);
   console.log(user.age);
}

