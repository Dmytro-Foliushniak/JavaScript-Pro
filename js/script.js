
const imageBox = document.querySelector(`.imageBox`)

const img = document.createElement('img')

imageBox.append(img)

const imgArr = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg']

const randomIndex = Math.floor(Math.random()* (imgArr.length))

const randomImg = imgArr[randomIndex]

img.src = `/image/${randomImg}`
imageBox.style.cssText = `
display: flex;
justify-content: center;
height: 100vh
`;