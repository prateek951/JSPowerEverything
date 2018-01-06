document.querySelector('#button1').addEventListener('click', function(){

    const xhr = new XMLHttpRequest()

    xhr.open('GET','customer.json',true);

    xhr.onload = function(){
        if(this.status == 200){
            // console.log(this.responseText);
            // console.log(JSON.parse(this.responseText));
            const customer = JSON.parse(this.responseText);
            // console.log(customer.firstName);
            document.getElementById('customer').innerHTML = `
            <ul>
            <li>Id : ${customer.id}</li>
            <li>FirstName : ${customer.firstName}</li>
            <li>LastName : ${customer.lastName}</li>
            <li>Phone : ${customer.phone}</li>
            <li>Company: ${customer.company}</li>
            </ul>
            `
        }
}
    xhr.send();
})



document.getElementById('button2').addEventListener('click',function(){

    const xhr = new XMLHttpRequest();
    xhr.open('GET','customers.json',true)

    xhr.onload = function(){
        if(this.status == 200){
            // console.log(this.responseText);
            const customers = JSON.parse(this.responseText);
            // console.log(customers);
            document.getElementById('customers').innerHTML = ' ';

            customers.forEach(customer => {
                document.getElementById('customers').innerHTML += `
                <ul>
                <li>Id : ${customer.id}</li>
                <li>FirstName : ${customer.firstName}</li>
                <li>LastName : ${customer.lastName}</li>
                <li>Phone : ${customer.phone}</li>
                <li>Company: ${customer.company}</li>
                </ul>
                
                `;
            });
        }
    }
    xhr.send();


})