//Working with the DOM

//Document object model
//Tree of nodes/elements created by the browser
//Js can be used to read/write/manipulate the dom
//object oriented representation

//Examining the document object

let val;

//val = document;
//val = document.all; //To get the html collection
//val = document.all[0]; //gives the html element
//val = document.all[1]; //gives the head element
// val = document.all.length; //43 elements in the dom
//val = document.head;    //gives just the head
// val = document.doctype; //gives the doctype
//val = document.domain;    //gives the domain
//val = document.characterSet;
//val = document.contentType;
//val = document.forms;     //gives the html collection of forms
//val = document.forms[0];  
//val = document.forms[0].id    //getting stuff from the form
//val = document.forms[0].method;
//val = document.forms[0].action;
//val = document.links;
//val = document.links[0];  //get the first link
//val = document.links[0].id        //get the id of the first link
//val = document.links[0].classList //get the classlist for an element
//val = document.images;
//val = document.scripts;
//val = document.scripts[2].getAttribute('src')
// let scripts = document.scripts;
// let scriptsArray = Array.from(scripts);
// scriptsArray.forEach(script => {
//     console.log(script);
// });

//DOM SELECTORS FOR SINGLE ELEMENTS
//they return the htmlcollection or the nodelist on which we can work
//BY ID,BY CLASS MAYBE
//document.getElementById()
//document.querySelector()
// console.log(document.getElementById('task-title'));
//Get things from the element
// console.log(document.getElementById('task-title').getAttribute('id'))
// console.log(document.getElementById('task-title').className);
// console.log(document.getElementById('task-title').getAttribute('class'));

//Change the styling of the html element
// document.getElementById('task-title').style.backgroundColor = '#333';
// document.getElementById('task-title').style.backgroundColor = '#fff';
// document.getElementById('task-title').style.display = none;
// document.getElementById('task-title').style.padding = '5px';


//Changing the content
// document.getElementById('task-title').textContent = 'Task List';
// document.getElementById('task-title').innerText = 'My Tasks';
// document.getElementById('task-title').innerHTML = '<span style="color:red;">Task List</span>'

// const taskTitle = document.getElementById('task-title');
// taskTitle.style.backgroundColor = 'red';

//querySelector select on the basis of anything
// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));
// Styles the first li element
// document.querySelector('li').style.color = 'red';
//Styles all the li elements
// document.querySelector('ul li').style.color = 'green';
// document.querySelector('li:last-child').style.color = 'red';
// document.querySelector('li').style.color = 'green';
// document.querySelector('li:nth-child(odd)').style.color = 'yellow';

// console.log(document.querySelector('h5').getAttribute('id'));

//DOM Selector for multiple elements
// document.getElementsByClassName()

//Get the html collection of the list items
// const items = document.getElementsByClassName('collection-item');
// console.log(items); //We get the html collection of items
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);

//Get the elements by the tag name
//document.getElementsByTagName()

// const listItems = document.getElementsByTagName('li');
//listItems is an HTML collection on which we cannot apply the array methods
//Convert the HTML collection into the array
// const listItemsArray = Array.from(listItems);
// console.table(listItemsArray.reverse());
// listItemsArray.forEach(litem => console.log(litem.className));

//document.querySelectorAll() is same as above ones but it returns the nodelist
//Here no need to convert the nodelist to array as was in above cases with HTML collection

const items = document.querySelectorAll('li');
console.log(items);
items.forEach(item => console.log(item));

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');
liOdd.forEach(item  => item.style.background = 'red');

for (let index = 0; index < liEven.length; index++) {
    liEven[index].style.background = 'green';
    
}




console.log(val);
