// import { useState } from 'react'
import Taskform from './components/Taskform'
import TaskList from './components/TaskList'
import ProgressTracker from './components/ProgressTracker'
import './App.css'
import { useEffect, useState } from 'react'



 function App() {

  const [tasks,setTasks] =useState([]);

  useEffect(() => {
    localStorage.setItem("tasks",JSON.stringify(tasks));
  })

const addTask =(task) => {
    setTasks([...tasks,task]);
}

  return ( 
    <>
    <h1>Task Buddy</h1>
    <p>Your friendly Task Manager</p>
    <Taskform addTask={addTask}/>
    <ProgressTracker />
    <TaskList />
    <button>Clear all Tasks</button>
    </>
  )
}

export default App
