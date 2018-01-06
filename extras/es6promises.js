// Promises alternative way to handle asynchronous callbacks
// and its much easy to use and not become cumbersome
const posts = [
    {
        title : 'POST ONE',
        body : 'This is the post one'
    },
    {
        title : 'POST TWO',
        body : 'This is the post two'
    }
]

function createPost(post){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = true;
            if(!error){
                resolve();   
            }else {
                reject('Error : Something went wrong');
            }
        },2000);
    })
}



createPost({title : 'This is the post three',
body : 'This is the post three'
}).then(getPost).catch(err => console.log(err));