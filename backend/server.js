const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

function getTodos() {
  try {
    return JSON.parse(fs.readFileSync("todos.json", "utf8"));
  } catch {
    return [];
  }
}

function saveTodos(todos) {
  fs.writeFileSync("todos.json", JSON.stringify(todos, null, 2));
}

app.get("/todos", (req, res) => {
  res.json(getTodos());
});

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

app.delete("/todos/:id", (req, res) => {
  const todos = getTodos().filter(t => t.id != req.params.id);
  saveTodos(todos);
  res.json({ message: "Deleted" });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

