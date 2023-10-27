import '../src/App.css'
import '../src/styles/ToDo.css'
import ToDo from "./components/ToDo";
import Form from "./components/Form";


function App() {
    // const [text, setText] = useState('')

    // function handleChange(e){
    //     setText(e.target.value)
    // }

    return(
        <div className='toDo-box'>
            <h1>Task</h1>
            <ToDo/>
            {/*<Form text = {text} handleChange = {handleChange}/>*/}
            <Form/>
        </div>
    )
}


export default App;
