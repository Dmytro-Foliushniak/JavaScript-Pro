import {useSelector, useDispatch} from "react-redux";
import {changeStatus, removeTask, editTask, saveTask} from "../store/slice/ToDoSlice"
import {useState} from "react";

export default function ToDo() {
    const tasks = useSelector(state => state.tasks.tasks)
    const dispatch = useDispatch()
    const [value, setValue] = useState('')

    const inputChange = (event) =>{
        setValue(event.target.value)
    }

    const editTaskClick = (id, event)=>{
        event.stopPropagation()
        dispatch(editTask({id}))
        setValue(tasks.find(task=> task.id === id).title)
    }

    const saveTaskClick = (id, value, event)=>{
        event.stopPropagation()
        dispatch(saveTask({id, value}))
    }

    return (
        <ul className='toDo-list'>
            {tasks.map(({title, id,completed, isEditing})=>(
                <li
                    onClick={()=>dispatch(changeStatus({id}))}
                    key={id}
                    className= {`toDo-item ${completed ? 'completed' : ''} ${isEditing ? 'editing' : ''}`}>
                    {isEditing ?
                        <>
                            <input
                                className='editTask'
                                name='title-task'
                                id='titleTask'
                                type='text'
                                onChange={inputChange}
                                value={value}
                                onClick={(event)=> event.stopPropagation()}/>
                            <button onClick={(event)=>saveTaskClick(id, value, event)} className='saveBtn'>SAVE</button>
                        </> :
                        <>
                            <input className='titleTask' name='title-task' id='titleTask' type='text' value={title} readOnly />
                            <div>
                                <button onClick={(event)=>editTaskClick(id, event)} className='editBtn btn'/>
                                <button onClick={()=>dispatch(removeTask({id}))} className='deleteBtn btn'/>
                            </div>
                        </>
                    }
                </li>
            ))}
        </ul>
    )
}
