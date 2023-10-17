import { useState } from 'react';
import '../styles/emoji.css'
function SmileVoice ({onChange, emoji}){
    const [count, setCount] = useState(0);

    function countClick(e) {
        let newValue = e.target.nextSibling;
        onChange(newValue);
        setCount(count + 1);
    }



    return (
            <li className="emoji-list">
                <input className="emoji-img" type="image" src={`/img/${emoji}.jpg`} alt="image" onClick={(e)=>{countClick(e) }}/>
                <input className="voting" type="text" name="" id="" disabled value={count}/>
            </li>
        )
}

export default SmileVoice