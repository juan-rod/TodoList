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
    // loop thru arrayOfTodos
      // individual todo item in arrayOfTodos array
      //create LI element
      //create text using the title of each obj in the array
      // append text to LI element
      // append LI element to  OL element

    // // get OL element from HTML page
    // let orderedListElement = document.querySelector('#todo-list')
    // // loop thru arrayOfTodos
    // for (let index = 0; index < arrayOfTodos.length; index++) {
    //   // individual todo item in arrayOfTodos array
    //   const todo = arrayOfTodos[index];
    //   //create LI element
    //   const listItem = document.createElement('li')
    //   //create text using the title of each obj in the array
    //   const text = document.createTextNode(todo.title)
    //   // append text to LI element
    //   listItem.appendChild(text)
    //   // append LI element to  OL element
    //   orderedListElement.appendChild(listItem)
    }
  }

  const filterTodosOldSchool = () => {
    let filtered = []
    for (let index = 0; index < arrayOfTodos.length; index++) {
      const todo = arrayOfTodos[index];
      let userId = 2
      if (todo.userId === userId) {
        filtered.push(todo)
      }
    }
    console.log('filtered:', filtered)
  }
  const filterTodos = () => {
    let filteredByUserId = arrayOfTodos.filter((todo) => {
      let userId = 2
      // return todo
      if (todo.userId === userId && todo.completed) {
        return todo
      }
    })
    console.log('filteredByUserId:', filteredByUserId)
  }
