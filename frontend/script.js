const API_URL = "http://localhost:5000/todos";
let allTodos = [];

// Load todos
async function loadTodos() {
    const res = await fetch(API_URL);
    allTodos = await res.json();
    displayTodos(allTodos);
}

// Display todos
function displayTodos(todos) {
    const list = document.getElementById("todoList");
    list.innerHTML = "";

    todos.forEach(todo => {
        const li = document.createElement("li");

        li.innerHTML = `
            <span>${todo.text}</span>
            <div class="action-buttons">
                <small onclick="editTodo(${todo.id})">✏️</small>
                <small onclick="deleteTodo(${todo.id})">❌</small>
            </div>
        `;

        list.appendChild(li);
    });
}

// Add new todo
async function addTodo() {
    const input = document.getElementById("todoInput");
    const text = input.value;

    if (!text.trim()) return;

    await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text })
    });

    input.value = "";
    loadTodos();
}

// Delete todo
async function deleteTodo(id) {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    loadTodos();
}

// Edit todo
async function editTodo(id) {
    const todo = allTodos.find(t => t.id === id);
    const newText = prompt("Edit task:", todo.text);

    if (!newText) return;

    await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: newText })
    });

    loadTodos();
}

// Search
function searchTodos() {
    const keyword = document.getElementById("searchInput").value.toLowerCase();
    const filtered = allTodos.filter(t => t.text.toLowerCase().includes(keyword));
    displayTodos(filtered);
}

loadTodos();
