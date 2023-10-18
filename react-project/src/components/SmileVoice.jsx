import { useState } from 'react';
import '../styles/emoji.css'

export default SmileVoice
function SmileVoice ({onChange, emojiId}){
    const [count, setCount] = useState( 0);

    function countClick(e) {
        e.preventDefault();

        const newValue = count + 1;
        setCount(newValue);
        onChange(emojiId, newValue);
    }

    return (
        <li className="emoji-list" style={{cursor: "pointer"}} onClick={(e)=>{countClick(e) }}>
            <img className="emoji-img" src={`/img/${emojiId}.jpg`} alt="img" />
            <span>{count}</span>
        </li>
    )
}