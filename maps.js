    function setTodos(todos, id) {
        return todos.map(todo => 
            todo.id === id ? {...todo,  completed: !todo.completed } : todo
        );
    }

// Example usage:
let todos = [
    { id: 1, text: "Learn JavaScript", completed: false },
    { id: 2, text: "Build a project", completed: true },
    { id: 3, text: "Deploy the project", completed: false }
];

// Update the completion status of a todo with ID 2
todos = setTodos(todos, 3);
// Print updated todos.
    
console.log(todos);
