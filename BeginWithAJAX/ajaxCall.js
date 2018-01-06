var button = document.querySelector('button');

button.addEventListener('click', function(){
    //here we will load the data using ajax call
    //create an XHR object
    const xhr = new XMLHttpRequest();
    xhr.open('GET','data.txt',true);

    // console.log('READY STATE' ,xhr.readyState);

    // xhr.onreadystatechange = function(){
    //     if(this.status == 200 && this.readyState == 4){
    //         console.log(this.responseText);

    //     }
    // }
    // used for spinners and loaders
    xhr.onprogress = function(){
        console.log(xhr.readyState);
    }
    xhr.onload = function(){
        // console.log('READY STATE' ,xhr.readyState);
        if(this.status == 200){
            // data is coming from data.txt
            // console.log(this.responseText);
            document.getElementById('output').innerHTML = this.responseText;
        }
    }

    xhr.onerror = function(){
        console.log('REQUEST ERROR.....');
    }

    xhr.send();



})