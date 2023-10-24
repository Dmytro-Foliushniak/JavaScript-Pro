import {useState} from 'react';
import '../styles/ToDo.css'

export default function ToDo() {

    const [tasks, setTask] = useState([
        {title:'Make todo list', completed: true, id: 0},
        {title:'Make something news', completed: false, id: 1}
    ])

    let [text, setText] = useState('')

    function addTask(){
        setTask([...tasks, {title: text, completed: false, id: tasks.length}])
        setText('')

    }

    function handleChange(e){
        setText(e.target.value)
    }

    function changeStatus(id){
        setTask(tasks.map(task=>task.id === id ? {...task, completed: !task.completed} : task))
    }

    return (
    <div className='toDo-box'>
        <h1>Task</h1>
        <ul className='toDo-list'>
            {tasks.map(({title, id,completed})=>(
                    <li onClick={()=>changeStatus(id)} key={id} className= {`toDo-item ${completed ? 'completed' : ''}`}>{title}</li>
            ))}
        </ul>
        <div className='input-box'>
            <input className='input-text' onChange={handleChange} type="text" placeholder='New Task' value={text}/>
            <button className='input-btn' onClick={addTask}>Add</button>
        </div>
    </div>

    )

}
