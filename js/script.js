
const imageBox = document.querySelector(`.imageBox`)

const img = document.createElement('img')

imageBox.append(img)

imgRandom = function (){
    let random = null
    for (let i = 1; i <= 5; i++){
        random =  Math.ceil(Math.random() * i) + `.jpg`
    }
    return random
}

img.src = `/image/${imgRandom()}`
imageBox.style.cssText = `
display: flex;
justify-content: center;
height: 100vh
`;