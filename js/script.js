const emoji = document.querySelector('.emoji')
const emojiBox = document.querySelectorAll('.emoji-box')
console.log(emojiBox)

emoji.addEventListener('click', ()=>{
    const element = event.target
    for (let item of emojiBox){
       if (item.firstElementChild===element){

           let value = item.lastElementChild.getAttribute('value')
           item.lastElementChild.setAttribute('value', `${+value + 1}`)
       }
    }
})
