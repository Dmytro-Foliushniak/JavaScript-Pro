const input = document.querySelector('input');
const btn = document.querySelector('.btn');
const main = document.querySelector('.main');

const getPostsAPI = async function (){

    try {
        const DATA_API = fetch(`https://jsonplaceholder.typicode.com/posts?id=${input.value}`);
        const response = await DATA_API;
        const posts = await response.json();
        getPost(posts);
    }catch(error) {
        console.log(error);
    }

    const btnComments = document.querySelector('.btn-comment');
    btnComments.addEventListener('click', ()=>{
        try {
            getComments();
        }catch (error){
            console.log(error);
        }

    })
}

const getPost = function (data){
    const postBlock = document.createElement('div');
    postBlock.className = 'post-block';
    let patternPost = '';
    data.forEach(item=>{
            patternPost = `
            <h3>Ваш пост</h3>
            <h4 class="post-title">${item.title}</h4>
            <p class="post-text">${item.body}</p>
            <button class="btn-comment">Комментар</button>
            <hr>`
    });
    postBlock.innerHTML = patternPost;
    main.append(postBlock);
};

const getComments = async function(){
    const COMMENTS_API = fetch(`https://jsonplaceholder.typicode.com/comments?postId=${input.value}`);
    const response = await COMMENTS_API;
    const comments = await response.json()
    createCommentsForm(comments)
}

const createCommentsForm = function (DataComments){
        if (document.querySelector('.comment-form')){
            document.querySelector('.comment-form').remove();
        }
        const commentForm = document.createElement('form')
        commentForm.className = 'comment-form'

        DataComments.forEach(item=>{
            commentForm.insertAdjacentHTML('beforeend', `<div class="comment-block">
        <label for="comment-name">Тема комментаря</label>
        <input type="text" name="comment-name" id="comment-name" value="${item.name}"disabled size="10" onkeydown="size=value.length||10">
        <label for="comment-email">Пошта</label>
        <input type="email" name="comment-email" id="comment-email" value="${item.email}" disabled>
        <label for="comment-body">Комментар</label>
        <textarea name="comment-body" id="comment-body" cols="30" rows="10" disabled>${item.body}</textarea>
        </div>`)
        })
        main.append(commentForm)

}

btn.addEventListener('click', (event)=>{
    event.preventDefault();
    if ((!input.validity.rangeUnderflow && !input.validity.rangeOverflow) && !input.validity.valueMissing){
        getPostsAPI();
    }
    if (document.querySelector('.post-block')){
        document.querySelector('.post-block').remove();
    }
    if (document.querySelector('.comment-form')){
        document.querySelector('.comment-form').remove();
    }
});
