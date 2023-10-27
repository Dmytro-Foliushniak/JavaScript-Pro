import {createSlice} from "@reduxjs/toolkit";


const ToDoSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [
            {id: (~~(Math.random()*1e8)).toString(16), title:'Make todo list', completed: true, isEditing: false },
            {id: (~~(Math.random()*1e8)).toString(16), title:'Make something news', completed: false, isEditing: false}
        ],
        text: ''
    },

    reducers: {
        addTask(state, action){
            state.tasks.push({id: (~~(Math.random()*1e8)).toString(16), title: action.payload.text, completed: false,isEditing: false })
            state.text = ''
        },
        changeStatus: (state, action)=>{
            state.tasks.map(task=>task.id === action.payload.id ?  task.completed = !task.completed : task)
        },
        listenText: (state, action)=> {
            state.text = action.payload.text
        },
        removeTask: (state, action)=>{
            state.tasks = state.tasks.filter(task=>task.id !== action.payload.id)
        },
        editTask: (state, action)=>{
            state.tasks = state.tasks.map(task=>task.id === action.payload.id ? {...task, isEditing: true, completed: false} : task)
        },
        saveTask: (state, action)=>{
            state.tasks = state.tasks = state.tasks.map(task=> task.id === action.payload.id ? {...task, title: action.payload.value, isEditing: false}: task)
        }
    }
})

export const {addTask, changeStatus, listenText, removeTask, editTask, saveTask} = ToDoSlice.actions

export default ToDoSlice.reducer