const inputText = document.querySelector('#inputText');
inputText.style.marginRight = '10px';

const box = document.querySelector('.box');
box.style.display = 'flex';

const div = document.createElement('div');
div.innerHTML = 'Some Text';
box.append(div);
div.hidden = true;

inputText.addEventListener('focus', ()=> {
div.hidden = false;
});
inputText.addEventListener('focusout', ()=> {
    div.hidden = true;
});