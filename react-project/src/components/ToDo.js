import {useState} from 'react';
import '../styles/ToDo.css'
import classNames from 'classnames'

export default function ToDo() {
    const defaultInput = ''
    const [toDo, setToDoo] = useState([])
    let [text, setText] = useState(defaultInput)
    let currentStatus = true
    function handleClick(){
        if (text !== defaultInput){
            setToDoo( prevToDo=> [...prevToDo, <li data-status={currentStatus} key={prevToDo.length} className='toDo-item'>{text}</li>])
            setText(defaultInput)
        }
    }

    function handleChangeStatus(e){
        if (e.target.tagName === 'LI'){

            let currentStatus = e.target.getAttribute('data-status')

            e.target.className = classNames([
                'toDo-item', currentStatus === 'true' ? 'completed' : ''
            ])

            const newStatus = currentStatus=== 'true' ? 'false' : 'true'

            e.target.setAttribute('data-status', newStatus)
        }
    }

    function handleChange(e){
        setText(e.target.value)
    }

    return (
        <div className='toDo-box'>
            <h1>Task</h1>
            <ul onClick={handleChangeStatus} className='toDo-list'>
                <li className='toDo-item completed'>Make todo list</li>
                <li className='toDo-item' data-status = {currentStatus}>Make something news</li>
                {toDo}
            </ul>
            <div className='input-box'>
                <input className='input-text' onChange={handleChange} type="text" placeholder='New Task' value={text}/>
                <button className='input-btn' onClick={handleClick}>Add</button>
            </div>
        </div>
    )
}
