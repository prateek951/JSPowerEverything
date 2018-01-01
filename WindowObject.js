//Window Object is the global object in Javascript
// window.console.log(123);

//Alert
// window.alert('Hello World');
alert('Hello World');

//Prompt
const input = prompt();
alert(input);

//Confirm(for generally deleting purpose)
if(confirm('Are you sure?')){
    console.log('yes');
}else{
    console.log('No');
}

//Properties of the window
let val;

//Outer height and width
val = window.outerHeight;
val = window.outerWidth;

//Inner height and width
val = window.innerHeight;
val = window.innerWidth;

//Scroll points
val = window.scrollX;
val = window.scrollY;

//location object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;
//redirect 
window.location.href = 'http://www.google.com';
//reload the page constantly
window.location.reload();



//History object
//Go to the previous page
window.history.go(-1);

//Check out the history length
val = window.history.length;


//Navigator object(related to the browser itself)
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;






console.log(val);
