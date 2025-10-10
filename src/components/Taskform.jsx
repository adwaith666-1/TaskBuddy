import React, { useState } from "react";

export default function Taskform() {
    const [task, setTask] = useState("");
    const [priority, setPriority] = useState('medium');
    const [category, setCategory] = useState('general');
    return (
        <form id="task-form">
            <div id="inp">
                <input type="text" placeholder="Enter the task" onChange={(e) => setTask(e.target.value)}/>
                <span><button type="submit">Add Task</button></span>
                {/* <h1>{task}</h1> */}
            </div>

            <div id="btns">
                <select name="priority" id="" onChange={(e) => setPriority(e.target.value)}>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="low">Low</option>
                </select>
                {/* <h1>{priority}</h1> */}

                <select name="Type" id="" onChange={(e) => setCategory(e.target.value)}>
                    <option value="General">General</option>
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                </select>
                {/* <h1>{category}</h1> */}
            </div>
        </form>
    )
}