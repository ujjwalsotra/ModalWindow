'use strict';

const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const close=document.querySelector('.close-modal');
const btnOpen=document.querySelectorAll('.show-modal');

const closedModal=function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

const OpenModal=function()
{
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for(let i=0;i<btnOpen.length;i++)
{
    btnOpen[i].addEventListener('click',OpenModal);
}
close.addEventListener('click',closedModal);

// close the modal window when we click outside of the modal

overlay.addEventListener('click',closedModal);

document.addEventListener('keydown',function(e){
    if(e.key=='Escape'&&(!modal.classList.contains('hidden')))
    {
            closedModal();
    }
});