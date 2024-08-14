
var todos = []

function addTask(){
   const todoInput =  document.getElementById('todoInput')
   const todoValue = todoInput.value
   if(todoValue !== ""){
       todos.push({
        text : todoValue, 
        completed : false 
       })
       todoInput.value = ""
       updateTodoList()
   }
}


function updateTodoList(){
  const todoList=  document.getElementById('todoList')
  todoList.innerHTML = "" // clear existing data 
  todos.forEach(function(task){
    const listItem = document.createElement('li')
    listItem.textContent = task.text
    listItem.className = task.completed ? 'completed' : ''
    listItem.onclick = function(){
        toggleCompleted(task)
    }
    todoList.appendChild(listItem)
    updateCount()
  })

}

function toggleCompleted(task){
    task.completed = !task.completed 
    updateTodoList()
}

function updateCount(){
    const totalTasks = document.getElementById('totalTasks')
    const completedTasks = document.getElementById('completedTasks')
    const total = todos.length 
    totalTasks.textContent = total 
    const completed = todos.reduce(function(acc,todo){
        return todo.completed ? acc + 1 : acc
    },0)
    completedTasks.textContent = completed 
}

function filterTodo(){
    const searchInput = document.getElementById('searchInput')
    const searchValue = searchInput.value 
   const filteredTasks =  todos.filter(function(todo){
        return todo.text.includes(searchValue)
    })
    updateTodoListWithFilteredTasks(filteredTasks)
}


function updateTodoListWithFilteredTasks(filteredTasks){
    const todoList=  document.getElementById('todoList')
    todoList.innerHTML = "" 
    filteredTasks.forEach(function(task){
      const listItem = document.createElement('li')
      listItem.textContent = task.text
      listItem.className = task.completed ? 'completed' : ''
      listItem.onclick = function(){
          toggleCompleted(task)
      }
      console.log(listItem)
      todoList.appendChild(listItem)
    })
    updateCount()
}