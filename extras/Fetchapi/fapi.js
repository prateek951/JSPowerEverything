document.getElementById('button1').addEventListener('click', getText);

//get request for text files using fetch api
function getText() {
    fetch('data.txt')
    .then(response => response.text())
    .then(data => {
        document.getElementById('output').innerHTML = data;
    })
    .catch(err => console.log(err));
}

document.getElementById('button2').addEventListener('click',()=> {
    // here I want to get json from the data.json file
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('output').innerHTML = ' ';
        data.forEach(post => {
        // console.log(post);  
        document.getElementById('output').innerHTML += `
        <ul>
            <li>${post.title}</li>
            <li>${post.body}</li>
        </ul>
        `
   
    })});
});


document.getElementById('button3').addEventListener('click',getApidata);

function getApidata(){
    fetch('http://api.github.com/users')
    .then(response => response.json())
    .then(users => {
        document.getElementById('output').innerHTML = ' ';
        users.forEach(user => 
           {
                        
            document.getElementById('output').innerHTML += `
            <ul>
                <li>${user.login}</li>
            </ul>
        `
           }
    );
    })
}