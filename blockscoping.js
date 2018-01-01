//global scope
var a = 1;
let b = 2;
const c = 3;

function test(){
    //Here a b c are in the scope of the function
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Function scope:',a,b,c);
}
test();

if(true){
    //Block scope
    var a = 4;  //a was changed in the block scope
    let b = 5;
    const c = 6;
    console.log('If scope: ',a,b,c);
        
}







console.log('Global scope: ',a,b,c);
