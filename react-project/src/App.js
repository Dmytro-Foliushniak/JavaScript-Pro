import SmileVoice from "./components/SmileVoice";
import { useState } from 'react';
import '../src/App.css'


function App() {
    const [winner, setWinner] = useState(null)

    const showResult = () => {
        const emoji = document.querySelectorAll('.emoji-list')
        let maxVotes = null;
        let winnerId = null;
        emoji.forEach((item, index)=>{
            const votes = +item.querySelector('.voting').value
            if (votes > maxVotes){
                maxVotes = votes;
                winnerId = index + 1
            }
        })
        if (winnerId >= 1) {
            const winnerHTML = emoji[winnerId-1].innerHTML
            setWinner(winnerHTML);
        }
    }
  return (
    <div className="App">
        <ul className="emoji">
            <SmileVoice emoji={1}/>
            <SmileVoice emoji={2}/>
            <SmileVoice emoji={3}/>
            <SmileVoice emoji={4}/>
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
