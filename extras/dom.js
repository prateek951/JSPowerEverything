//Examine the document object
// console.dir(document);
// console.log(document.domain);
// console.table(document.url);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);  //returns the html collection
// console.log(document.all[10]);
// console.log(document.forms);
// console.log(document.forms[0].className);
// console.log(document.links);


//GET THE ELEMENT BY ID
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// headerTitle.textContent = 'Hello World';
// headerTitle.innerText = 'Prateek Madaan';
// headerTitle.innerHTML = '<h3>Hello</h3>'
// header.style.borderBottom = '2px solid red';


//GET THE ELEMENTS BY CLASSNAME
// var lis = document.getElementsByClassName('list-group-item');
// console.log(lis);   //html collection
// for (var i = 0; i < lis.length; i++) {
//     // console.log(lis[i].innerHTML);
//     console.log(lis[i]);
//     // lis[i].style.color = 'red';
//     lis[i].style.fontWeight = 'bold';
//     lis[i].style.backgroundColor = 'yellow';
// }


//QUERY SELECTOR with pseudo selectors 
// var header = document.querySelector('#main-header');
// header.style.borderBottom = '1px solid #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'Send';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var item2 = document.querySelector('li:last-child');
// item2.style.color = 'blue';

// var secondItem = document.querySelector('li:nth-child(2)');
// secondItem.style.color = 'coral';


//QuerySelectorAll
// var titles = document.querySelectorAll('.title');   //returns the nodelist
// console.log(titles);
// titles.forEach(title => console.log(title));


// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');
// odd.forEach(elem => elem.style.background ="#ccc");
// even.forEach(elem => elem.style.background='green');


//CRASH COURSE PART - 2
//TRAVERSING THE DOM
// var itemList = document.querySelector('#items');
// //parentNode property
// console.log(itemList.parentNode);
// itemList.parentNode.style.background = '#ccc';
// console.log(itemList.parentNode.parentNode.parentNode.parentNode);

// console.log(itemList.parentElement);
// itemList.parentElement.style.background = 'red';

//childNodes(not recommended)
// console.log(itemList.childNodes);

//children (recommended)
// console.log(itemList.children); //html collection
// console.log(itemList.children[1]);

//FirstChild
// console.log(itemList.firstChild);  //returns the text node
//FirstElementChild
// console.log(itemList.firstElementChild);   //returns the actual node

//LastChild
// console.log(itemList.lastChild);  //returns the text node
//LastElementChild
// console.log(itemList.lastElementChild); // returns the actual node

//nextSibling
// console.log(itemList.nextSibling); //returns the text node
//nextElementSibling
// console.log(itemList.nextElementSibling);   //returns the actual node

//previousSibling
// console.log(itemList.previousSibling); //returns the text node
//previousElementSibling
// console.log(itemList.previousElementSibling);   //returns the actual node

//createElement
//Create a div
// var newDiv = document.createElement('div');
// console.log(newDiv);
// newDiv.className = 'hello';
// newDiv.setAttribute('title','Hello Div');
// // console.log(newDiv);
// //create a text node
// newDiv.appendChild(document.createTextNode('Hello World'));
// console.log(newDiv);
// // Insert it into the dom
// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
// container.insertBefore(newDiv,h1);

// CRASH COURSE 3 EVENTS AND EVENT LISTENERS METHODS

// var button = document.getElementById('button').addEventListener('click',buttonClick);

// function buttonClick(e){
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);
    // console.log(e.target.classList);    //gives the dom token list
    // e.preventDefault();
    // document.getElementById('header-title').textContent = 'Go to hell';
    // document.querySelector('#main').style.background = '#ccc';
    // var output = document.getElementById('output');
    // console.log(output);
    // output.innerText = e.target.classList;
    // console.log(output);

    // console.log(e.type);

    // console.log(e.clientX); //position from the browser window
    // console.log(e.clientY); //position relative to the browser window
    // console.log(e.offsetX); //position relative to the element
    // console.log(e.altKey);
    // console.log(e.ctrlKey);
    // console.log(e.shiftKey);

    //Mouse Events
    // var button = document.getElementById('button');
    // button.addEventListener('click',runEvent);
    // button.addEventListener('dblclick',runEvent);
    // button.addEventListener('mousedown',runEvent);
    // button.addEventListener('mouseup', runEvent);
    
    // var box = document.getElementById('box');
    // box.addEventListener('mouseenter',runEvent);
    // box.addEventListener('mouseleave',runEvent);
    // box.addEventListener('mousemove', runEvent);
    // box.addEventListener('mouseover', runEvent);
    // function runEvent(e){
    //     e.preventDefault();
        
    //     console.log('Event type' + e.type);
    //     output.innerHTML = '<h3>MouseX:' + e.offsetX + 
    //     '</h3>';
    //     output.innerHTML += '<h3>MouseY:'+ e.offsetY + '</h3>';
    
    // }

    // var itemInput = document.querySelector('input[type="text"]');
    // var form = document.querySelector('form');
    
    // itemInput.addEventListener('keydown', runEvent);
    // itemInput.addEventListener('keyup',runEvent);
    // itemInput.addEventListener('focus',runEvent);
    // itemInput.addEventListener('blur',runEvent);

    //cut and paste events
    // itemInput.addEventListener('cut',runEvent);
    // itemInput.addEventListener('paste',runEvent);
    // itemInput.addEventListener('input',runEvent);

    //Looking for the change event to happen
    // var select = document.querySelector('select');
    // select.addEventListener('change',runEvent);
    //select.addEventListener('input',runEvent);
    // form.addEventListener('submit',runEvent);

    // function runEvent(e){
            // e.preventDefault();
    //     console.log(e.type);
    //     console.log(e.target.value);
    //     document.getElementById('output').innerHTML = '<h3>'+ e.target.value +'</h3>';
    // }

var form = document.getElementById('addForm');
var list = document.getElementById('items');
var filter = document.getElementById('filter');

filter.addEventListener('keypress',filterItems);
list.addEventListener('click', removeItem);
form.addEventListener('submit', addItem);

function addItem (e){
    e.preventDefault();
    var newItem = document.getElementById('item').value;
    //create the li element for the new item
    var li = document.createElement('li');
    //Associate a className to the li element
    li.className = 'list-group-item';
    //Complete the li
    li.appendChild(document.createTextNode(newItem));
    //Create a delete button element
    var deleteBtn = document.createElement('button');
    //Associate classes with the deleteBtn
    deleteBtn.className = 'btn btn-danger btn-sm float-right';
    deleteBtn.innerText = 'X';
    li.appendChild(deleteBtn);
    list.appendChild(li);    
}

// function removeItem(e){
//     if(e.target.classList.contains('.delete')){
//         if(confirm('Are you sure ?')){
//             var li = e.target.parentElement;
//             list.removeChild(li);
//         }
//     }
// }
function removeItem(e){
    e.preventDefault();
    if(e.target.classList.contains('.delete')){
        e.target.parentElement.remove();
    }
}
function filterItems(e){
   //convert everything to lowercase
    var text = e.target.value.toLowerCase();
    //primer //match for primer say
    var items = list.getElementsByTagName('li');
    // items is a html collection
    //Convert to array first
    Array.from(items).forEach(item => {
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })
}

