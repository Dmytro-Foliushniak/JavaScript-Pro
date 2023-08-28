

const votingEmoji = function (){
    const emoji = document.querySelector('.emoji')
    const emojiBox = document.querySelectorAll('.emoji-box')

    emoji.addEventListener('click', ()=>{
        const element = event.target
        for (let item of emojiBox){
            if (item.firstElementChild===element){
                let value = item.lastElementChild.getAttribute('value')
                item.lastElementChild.setAttribute('value', `${+value + 1}`)
            }
        }
    })
}

votingEmoji()


