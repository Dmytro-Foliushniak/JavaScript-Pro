import { useState } from 'react';
import '../styles/emoji.css'
function SmileVoice ({emoji}){
    const [count, setCount] = useState(0);
    function countClick() {
        setCount(count + 1);
    }

    return (
            <li className="emoji-list">
                <input className="emoji-img" type="image" src={`/img/${emoji}.jpg`} alt="image" onClick={countClick}/>
                <input className="voting" type="text" name="" id="" disabled value={count}/>
            </li>
        )
}

export default SmileVoice