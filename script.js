const btn = document.querySelector('.btn');
const modal__close = document.querySelector('.modal__close');
const modal__container = document.querySelector('.modal__container');
btn.addEventListener('click',() =>{
    modal__container.style.visibility = "visible";
})

modal__close.addEventListener('click',() =>{
    modal__container.style.visibility = "hidden";

})