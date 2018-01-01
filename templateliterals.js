// Template literals
const name = 'Prateek';
const age = 21;
const job = 'Web Developer';
const city = 'Delhi';
let html;

//without template literals using es5
html = '<ul><li>Name : ' + name + '</li><li>'+ age + '</li></ul>';

document.body.innerHTML = html;

function hello(){
    return 'hello';
}


//With template literals using ES6
html = `<ul>
        <li> Name : ${name}</li>
        <li>Age : ${age}</li>
        <li>Job : ${job}</li>
        <li>${hello()}</li>
        <li>${2+2}</li>
        <li>${age>30 ? 'Over 30' : 'Young'}</li>
        </ul>`;
document.body.innerHTML = html;
