const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
const PORT = 5000;

// Enable CORS
app.use(cors());
app.use(express.json());

// Read todos from file
function getTodos() {
  try {
    const data = fs.readFileSync("todos.json", "utf8");
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

// Write todos to file
function saveTodos(todos) {
  fs.writeFileSync("todos.json", JSON.stringify(todos, null, 2));
}

// GET: All todos
app.get("/todos", (req, res) => {
  const todos = getTodos();
  res.json(todos);
});

// POST: Add todo
app.post("/todos", (req, res) => {
  const todos = getTodos();
  const newTodo = {
    id: Date.now(),
    text: req.body.text,
    completed: false
  };
  todos.push(newTodo);
  saveTodos(todos);
  res.json(newTodo);
});

// DELETE: Remove todo
app.delete("/todos/:id", (req, res) => {
  const todos = getTodos();
  const updated = todos.filter(t => t.id != req.params.id);
  saveTodos(updated);
  res.json({ message: "Todo deleted" });
});

// Clear all (optional)
app.post("/todos/clear", (req, res) => {
  saveTodos([]);
  res.json({ message: "cleared" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
