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
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
}


const logTodos = () => {
    console.log(arrayOfTodos)
}
const populateTodos = () => {
  // get OL element from HTML page
  let orderedListElement = document.querySelector('#todo-list')
  // loop thru arrayOfTodos
  for (let index = 0; index < arrayOfTodos.length; index++) {
    // individual todo item in arrayOfTodos array
    const todo = arrayOfTodos[index];
    //create LI element
    const listItem = document.createElement('li')
    //create text using the title of each obj in the array
    const text = document.createTextNode(todo.title)
    // append text to LI element
    listItem.appendChild(text)
    // append LI element to  OL element
    orderedListElement.appendChild(listItem)
  }
}
const populateTodosStyled = () => {
    // get OL element from HTML page
    let parentElement = document.querySelector('.checkList')
    // loop thru arrayOfTodos
    for (let index = 0; index < arrayOfTodos.length; index++) {
      // individual todo item in arrayOfTodos array
      const todo = arrayOfTodos[index];
      // create element template using template strings
      let checklist = `
        <div class="checkList-container">
          <input type="checkbox" checked="${todo.completed}">
          <label>${todo.title}</label>
        </div>
      `
      parentElement.insertAdjacentHTML('beforeend', checklist);
    }
}