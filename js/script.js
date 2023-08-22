const btnNext = document.querySelector('.btn-next');
const btnBack = document.querySelector('.btn-back');
const image = document.querySelectorAll('.image');

const slider = function (back,next){
    let i = 0;

    btnBack.hidden = true;

    const operationWithClass = function (arg){
        if (image[i].classList.contains('active')){
            image[i].classList.remove('active');
            image[i].hidden = true;
        }
        if (arg === 'plus'){
            i++;
        }
        if (arg === 'minus'){
            i--;
        }

        image[i].classList.add('active');
        image[i].hidden = false;
    };

    next.addEventListener('click', ()=>{
        btnBack.hidden = false;
        operationWithClass('plus');

        if (image.item(image.length-1) === image[i]){
            btnNext.hidden = true;
        }
    });

    back.addEventListener('click', ()=>{
        btnNext.hidden = false;
        operationWithClass('minus');

        if (image.item(0) === image[i]){
            btnBack.hidden = true;
        }
    });
};

slider(btnBack,btnNext);
