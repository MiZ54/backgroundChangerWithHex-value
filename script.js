const btn = document.querySelector('.btn');
const body = document.querySelector('body');
const value = document.querySelector('.value');
const hexValue = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

btn.addEventListener('click',function(){
    let hex = '#';

    for(let i=0; i<6; i++){
        const index = Math.floor(Math.random()*hexValue.length);
        hex += hexValue[index];
    }

    value.innerHTML = hex;
    body.style.background=hex;
})