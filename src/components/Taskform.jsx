import { useState } from "react"

export default function Taskform({addTask}) {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [category, setCategory] = useState('General');
  
  const handleSubmit = (e) => {
      e.preventDefault();
      addTask({text:task, priority,category,completed:false});

      setTask('');
      setPriority('medium');
      setCategory('General');
  }

  return (
      <form onSubmit={handleSubmit} id="task-form"> 
        <div id="inp">
          <input value={task} type='text' placeholder='Enter the task'
          onChange={(e)=> setTask(e.target.value)}/>
          <button type="submit">Add task</button>
          {/* <h1>{task}</h1> */}
        </div>

      <div id='btns'>
      <select value={priority} onChange={(e)=> setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="low">low</option>
      </select>

      <select value={category} onChange={(e)=>setCategory(e.target.value)}>
        <option value="general">General</option>
        <option value="work">work</option>
        <option value="personal">personal</option>
      </select>
      </div>

      {/* <h1>{task} {priority} {category}</h1> */}
   </form>

  )
}