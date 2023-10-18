import SmileVoice from "./components/SmileVoice";
import EmojiWinner from "./components/EmojiWinner";
import {useState} from 'react';
import '../src/App.css'


function App() {
    const [Emoji, setEmoji] = useState(null)
    const [maxVotes, setMaxVotes] = useState(null)
    const [renderWinner, setRenderWinner] = useState(false)
    const [votesWinner, setVotesWinner] = useState(null)
    const [emojiWinner, setEmojiWinner] = useState(null)

    function updateValue(emojiId, count){

         if (count > maxVotes){
             setMaxVotes(count)
             setEmoji(emojiId)
        }

    }

    function showResult(){
        if (maxVotes){
            setVotesWinner(maxVotes)
            setEmojiWinner(Emoji)
            setRenderWinner(true)
        }
    }

    return (
        <div className="App">
            <ul className="emoji">
                <SmileVoice onChange ={updateValue} emojiId={1}/>
                <SmileVoice onChange ={updateValue} emojiId={2}/>
                <SmileVoice onChange ={updateValue} emojiId={3}/>
                <SmileVoice onChange ={updateValue} emojiId={4}/>
            </ul>
            <button className="btn-winner" onClick={showResult}>Show Results</button>
            {renderWinner && <EmojiWinner winner ={emojiWinner} maxVotes={votesWinner}/>}
        </div>
    );
}

export default App;