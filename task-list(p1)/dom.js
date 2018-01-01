//Working with the DOM

//Document object model
//Tree of nodes/elements created by the browser
//Js can be used to read/write/manipulate the dom
//object oriented representation

//Examining the document object

// let val;

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

// const items = document.querySelectorAll('li');
// console.log(items);
// items.forEach(item => console.log(item));

// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');
// liOdd.forEach(item  => item.style.background = 'red');

// for (let index = 0; index < liEven.length; index++) {
//     liEven[index].style.background = 'green';
    
// }

//Traversing the dom
// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item');

//Getting the children and parent nodes of the ul
//childNodes return the list of all the child nodes as a nodelist
// val = list.childNodes;
// val = list.childNodes[0]
// val = list.childNodes[0].nodeName;
// val = list.childNodes[0].nodeType;

//1 - Element
//2 - Attribute (deprecated)
//3 - Text Node
//8 - Comment
//9 - Document itself
//10 - Doctype
//Get children element nodes
//children is generally used more than childNodes
//val = list.children;    //returns the HTML collection of all the elements
//val = list.children[0].textContent = 'Hello';
//Children of children
// val = list.children[1].children;
// val = list.firstChild;  //returns the text node of the first element
// val = list.firstElementChild; //return the actual element node
//val = list.lastChild; //returns the text node of the last element
// val = list.lastElementChild;     //returns the last actual element node
//val = list.childElementCount;     //5 is the count of the child elements

// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item');

//get the parent node
// val = listItem.parentNode;
// val = listItem.parentElement;
// val = listItem.parentElement.parentElement.parentElement;
//get the next sibling
// val = listItem.nextSibling; //returns the text node
// val = listItem.nextElementSibling;  //returns the actual node of the element
///get the previous sibling
// val = listItem.previousSibling; //returns the text node
// val = listItem.previousElementSibling; //returns the actual node of the element

//REPLACE ELEMENT
//Create an element
//Replace h5 with h2
// const heading = document.createElement('h2');
// const replaceMe = document.querySelector('h5#task-title');
// const parent1 = replaceMe.parentElement;
// heading.id = 'task-title';
// heading.appendChild(document.createTextNode('Task List'));
// parent1.replaceChild(heading,replaceMe);

//Remove an element
// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul.collection');
// lis.forEach(li => li.remove())       //This confirms that lis is a nodelist

// list.removeChild(lis[0]);

//classes and attr
// const firstLi = document.querySelector('li:first-child');
// const link = firstLi.children[0];
// let val;

// val = link.className;
// val = link.classList;
//adding a class to the classlist of an element
// link.classList.add('test');
// val = link;
//remove a class from the classlist of an element
// link.classList.remove('test');

//Attributes
// val = link.setAttribute('href','http://www.google.com');
// val = link.hasAttribute('href');
// link.setAttribute('title','Google');
// val = link.removeAttribute('title');
// console.log(val)