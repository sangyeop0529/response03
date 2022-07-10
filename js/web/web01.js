// fetch('https://www.google.com')
// .then((respone)=>respone.text())
// .then(result => {console.log(result)})

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))