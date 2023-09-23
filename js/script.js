const input = document.querySelector('input');
const btn = document.querySelector('.btn');

const getPostsAPI = async function (){

    const DATA_API = fetch('https://jsonplaceholder.typicode.com/posts');
    const response = await DATA_API;
    const posts = await response.json();

    getPost(posts);
}

const getPost = function (data){
    const main = document.querySelector('.main');
    const postBlock = document.createElement('div');
    postBlock.className = 'post-block';
    let patternPost = '';
    data.forEach(item=>{
        if (+input.value === item.id){
            patternPost = `
            <h3>Ваш пост</h3>
            <h4 class="post-title">${item.title}</h4>
            <p class="post-text">${item.body}</p>
            <button class="btn-comment">Комментар</button>
            <hr>`
        }
    });
    postBlock.innerHTML = patternPost;
    main.append(postBlock);

    if (postBlock){
        const comment = document.querySelector('.btn-comment');
        comment.addEventListener('click', (event)=>{
            comment.remove();
            postBlock.insertAdjacentHTML('beforeend', `<div class="comment-box">
            <h4>Ваш комментар</h4>
            <textarea class="comment"></textarea>
            <button type="submit">Відправити</button>
            <button type="submit">Відміна</button>
            </div>`);
        });
    }
};
btn.addEventListener('click', (event)=>{
    event.preventDefault();
    if ((!input.validity.rangeUnderflow && !input.validity.rangeOverflow) && !input.validity.valueMissing){
        getPostsAPI();
    }
    if (document.querySelector('.post-block')){
        document.querySelector('.post-block').remove();
    }
});