# 📝 To-Do List Web App

A simple full-stack To-Do List application built using **HTML, CSS, JavaScript, Node.js, and Express**. This project demonstrates how a frontend communicates with a backend using REST APIs, with data stored in a JSON file.

---

## 🚀 Features
- Add new tasks
- View tasks
- Edit tasks
- Delete tasks
- Search tasks
- Lightweight JSON storage
- Smooth frontend–backend communication

---

## 📦 Tech Stack

### **Frontend**
- HTML
- CSS
- JavaScript (Fetch API)

### **Backend**
- Node.js
- Express.js
- CORS
- JSON-based storage (`todos.json`)

### **Tools**
- VS Code + Live Server extension
- Node.js runtime

---

## 📁 Folder Structure
```
todo/
 ├── backend/
 │    ├── server.js
 │    ├── package.json
 │    └── todos.json
 │
 └── frontend/
      ├── index.html
      ├── style.css
      └── script.js
```

---

## ⚙️ Backend Setup

### 1️⃣ Navigate to backend folder
```bash
cd backend
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Start the server
```bash
node server.js
```

Backend runs at:
```
http://localhost:5000
```

---

## 🔌 API Endpoints

### ✔ GET /todos
Fetch all todos.

### ✔ POST /todos
Add a new todo.
**Body Example:**
```json
{ "text": "Buy groceries" }
```

### ✔ DELETE /todos/:id
Delete a todo by ID.

### ✔ POST /todos/clear
Optional endpoint to clear all todos.

Data is stored in:
```
backend/todos.json
```

---

## 🖥 Frontend Setup

### Run using VS Code Live Server:
1. Open **frontend/** in VS Code
2. Right-click `index.html`
3. Select **Open with Live Server**

Example URL:
```
http://127.0.0.1:5500
```

### Why Live Server?
Opening using file:// causes CORS problems.
Live Server provides a proper http:// origin so backend works correctly.

---

## 🔄 How the App Works
1. Frontend loads → sends GET request
2. Backend returns todos
3. User adds/edits/deletes a task → frontend sends request
4. Backend updates `todos.json`
5. Frontend refreshes the list automatically

---

## ❗ Important Note
If you **close the backend terminal**, the app stops working.
Frontend must communicate with backend to function.

To run the app:
- Start backend with `node server.js`
- Open frontend with Live Server

---

## 📌 Future Enhancements
- Tick/checkbox for completed tasks
- Responsive design
- Dark mode
- Priority labels
- Database support (MongoDB/MySQL/PostgreSQL)
- Authentication system
- Cloud deployment

---

## 👨‍💻 Author
Made for practicing full-stack basics and API communication.
