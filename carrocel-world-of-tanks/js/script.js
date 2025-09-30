let btnNext = document.querySelector('.next');
let btnBack = document.querySelector('.back');

let container = document.querySelector('.container');
let list = document.querySelector('.list');
let thumb = document.querySelector('.thumb');



function moveItemsOnClick(type){
    let listItems = document.querySelectorAll('.list-item')
    let thumbItems = document.querySelectorAll('.thumb-item')

    if(type == 'next'){
        list.appendChild(listItems[0])
        thumb.appendChild(thumbItems[0])
        container.classList.add('nextjs')
    }else{
        list.prepend(listItems[listItems.length - 1])
        thumb.prepend(thumbItems[thumbItems.length - 1])
        container.classList.add('backjs')
    }

    setTimeout(() => {
        container.classList.remove('nextjs')
        container.classList.remove('backjs')
    },3000)
}