import '../styles/emoji.css'

function EmojiWinner({winner, maxVotes, some}){
    return (
        <div className="winner-box">
            <h2>Переможець голосування</h2>
            <li className="emoji-list emoji-winner">
                <img className="emoji-img" src={`/img/${winner}.jpg`} alt="img" />
                <span>{maxVotes}</span>
            </li>
        </div>
    )
}

export default EmojiWinner