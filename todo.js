const form =  document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos');

const todos = JSON.parse(localStorage.getItem('todos'));

// *********CONDITION STATEMENT
if (todos) {
    todos.forEach(todo => {

        addTodo(todo);
    });
}

//  ******************SUBMIT FORM
form.addEventListener('submit', (e) => {
   e.preventDefault();
   addTodo();
});


// *********ADD TODO FUNCTION 
function addTodo (todo) {   
    let todoText = input.value;
    // if we have a todo
    if (todo) {
        todoText = todo.text;
    }

if(todoText) {
    const todoEl = document.createElement('li');
    // if we have a todo and also todo.completed is true
    if (todo && todo.completed) {
        
        todoEl.classList.add('completed')
    }
    // The two if statement above checks for a particular condition and the condition is used to determine the value of todoEL
    todoEl.innerText =  todoText;
    // AFTER THE SERIES OF CHECKING WE WILL THEN APPEND IT TO THE UL  
    // #################
    todosUL.appendChild(todoEl);
    // add event listner to the todo item
        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed');
            updateLS()
        });
        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            todoEl.remove();
            updateLS();
        })
// reset the input back to empty.
    input.value = "";
    updateLS();
}
// todosUL.appendChild(todoEl);
};



// function addTodo () {

// }
function updateLS() {
    const todosEL = document.querySelectorAll("li");
    const todos = [];
    todosEL.forEach( (todoEl) => {
        todos.push({
            text:todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })
    localStorage.setItem('todos', JSON.stringify(todos));
}