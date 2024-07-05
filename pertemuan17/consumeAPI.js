
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        data.pop();
        data.push({id:101})
        data.map(item => {
            console.log(item.id);
        });
    })
    .catch(err => console.log(err))