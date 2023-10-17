import SmileVoice from "./components/SmileVoice";
import {useState} from 'react';
import '../src/App.css'


function App() {
    const [winner, setWinner] = useState(null)
    const [elem, setElement] = useState('')

     function updateValue(elem){
        setElement(elem)
    }

    function showResult(){
        let maxVotes = null;
        let winnerId = null;
            const votesT = elem.value
            if (votesT > maxVotes){
                maxVotes = votesT
                winnerId = elem
            }
        if (winnerId) {
            const winnerHTML = winnerId.parentNode.innerHTML
            setWinner(winnerHTML);
        }
    }
  return (
    <div className="App">
        <ul className="emoji">
            <SmileVoice onChange ={updateValue} emoji={1}/>
            <SmileVoice onChange ={updateValue} emoji={2}/>
            <SmileVoice onChange ={updateValue} emoji={3}/>
            <SmileVoice onChange ={updateValue} emoji={4}/>
        </ul>
        <button className="btn-winner" onClick={showResult}>Show Results</button>
        {winner ? (
            <div className="winner-box">
                <h2>Переможець голосування</h2>
                <div className="emoji-winner" dangerouslySetInnerHTML={{ __html: winner }} />
            </div>
        ) : null}
            </div>
  );
}

export default App;
