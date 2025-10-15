require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());
app.use(cors());

const users = [];

let tasks = JSON.parse(fs.readFileSync(process.env.TASKS_FILE || "tasks.json", "utf-8") || "[]");

const saveTasks = () => fs.writeFileSync(process.env.TASKS_FILE || "tasks.json", JSON.stringify(tasks, null, 2));


app.post("/register", (req, res) => {
    const {username, password} = req.body;

    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return res.status(400).json({message: "User already exists"});
    } else if (res.status === 200) {
        console.log(users);
    }

    users.push({username, password});
    res.json({message: "User registered successfully"})
})

app.post("/login", (req, res) => {
    const {username, password} = req.body;

    const user = users.find(
        user => user.username === username && user.password === password
    )

    if (!user) {
        return res.status(401).json({message: "Invalid credentials"});
    }

    const token = jwt.sign({username}, process.env.JWT_SECRET)
    res.json({token})
})

app.get("/tasks", (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({message: "Unauthorized"});
    }

    res.json(tasks);
})

app.post("/tasks", (req, res) => {
    const {task} = req.body;
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({message: "Unauthorized"});

    const newTask = {id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1, task, completed: false};
    tasks.push(newTask);
    res.json(newTask);
});


app.put("/tasks/:id", (req, res) => {
    const {id} = req.params;
    const {task, completed} = req.body;
    const index = tasks.findIndex(t => t.id === parseInt(id));
    if (index === -1) {
        return res.status(404).json({message: "Task not found"});
    }
    tasks[index] = {...tasks[index], task, completed};
    res.json(tasks[index]);
});


app.delete("/tasks/:id", (req, res) => {
    const {id} = req.params;
    const index = tasks.findIndex(t => t.id === parseInt(id));
    if (index === -1) {
        return res.status(404).json({message: "Task not found"});
    }
    tasks = tasks.filter(t => t.id !== parseInt(id));
    res.json({message: "Task deleted successfully"});
})

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.PORT || 5000}`);
})
