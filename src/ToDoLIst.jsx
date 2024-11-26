import { useState } from "react"

function ToDoList() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {

        if ((document.getElementById('taskInput').value).trim() !== "") {
            setTasks(t => [...t, newTask])
            document.getElementById('taskInput').value = "";
        }

    }
    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks)

    }
    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]]
            setTasks(updatedTasks)
        }

    }
    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]
            setTasks(updatedTasks)
        }


    }

    return (<div className="container">
        <h1>TO-DO LIST</h1>
        <div>
            <input placeholder="enter task" id="taskInput" onChange={handleInputChange} />
            <button onClick={addTask} className="add-button">Add task</button>
        </div>
        <ol>
            {tasks.map((task, index) => (
                <li key={index} >
                    <span className="text">{task}</span>
                    <button className="delete-button" onClick={() => deleteTask(index)}>delete</button>
                    <button className="move" onClick={() => moveTaskUp(index)}>⬆️</button>
                    <button className="move" onClick={() => moveTaskDown(index)}>⬇️</button>
                </li>
            ))}
        </ol>
    </div>)
} export default ToDoList