import {addTask, listenText} from "../store/slice/ToDoSlice";
import {useDispatch, useSelector} from "react-redux";

export default function Form (){

    const text = useSelector(state => state.tasks.text)

    const dispatch = useDispatch()

    const inputChange = (event) => {
        const newText = event.target.value
        dispatch(listenText({text:newText}))
    }


    return (
    <form className='input-box' onSubmit={(event)=> event.preventDefault()}>
        <input className='input-text' onChange={inputChange} type="text" placeholder='New Task' value={text}/>
        <button type='submit' className='input-btn' onClick={()=>dispatch(addTask({text}))}>Add</button>
    </form>
    )
}