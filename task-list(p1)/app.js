// Task 1 add an li to the ul element

const list = document.querySelector('ul.collection');   //returns the node list of the listitems  
// console.log(list);
const listItem = document.querySelector('li.collection-item');

const li = document.createElement('li');
li.className = 'collection-item';
li.setAttribute('title','New Item');
li.appendChild(document.createTextNode('Hello World'));
const link = document.createElement('a');
link.className = 'delete-item secondary-content';
//Now since in the a tag there is no text node simpy insert the i tag using innerHTML method
link.innerHTML = '<i class="fa fa-remove"></i>'
li.appendChild(link);
list.appendChild(li);