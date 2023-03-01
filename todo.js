    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
},
{
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
}]

const fetchTodos = () => {
  fetch('')
  .then((response)=> {
    return stuff
  })
  .then((data)=> {

  })

    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => {
      console.log('response:', response)
      return response.json()
    })
    .then( (json) => {
      console.log('json:', json)
      arrayOfTodos = json
    })
}


const logTodos = () => {
    console.log(arrayOfTodos)
}
const populateTodos = () => {
  // get OL element from HTML page
  // loop thru arrayOfTodos
  // inside loop
    //create LI element
    //create text using the title of each obj in the array
    // append text to LI element
    // append LI element to  OL element
}
const populateTodosWalkThru = () => {
    let firstUser = arrayOfTodos[0]
    console.log('firstUser:', firstUser.completed)
    for (let index = 0; index < arrayOfTodos.length; index++) {
      const todo = arrayOfTodos[index];
      console.log('todo:', todo)
    }
     
}