const posts = [
    {
        title : 'Post One',
        body : 'This is the POST ONE'
    },
    
    {
        title : 'Post Two',
        body : 'This is the POST TWO'
    },

    
    {
        title : 'Post Three',
        body : 'This is the POST THREE'
    },

    
    {
        title : 'Post Four',
        body : 'This is the POST FOUR'
    }
];

function getPosts(){
    setTimeout(function(){
        let output = '';
        posts.forEach(post => output+= `<li>${post.title}</li>`);
        document.body.innerHTML = output;
    },1000);
   
}

function createPost(post){
    setTimeout(function(){
        posts.push(post)
    },2000);
}

createPost({title : 'Post Five',body : 'This is Post Five'});
getPosts();