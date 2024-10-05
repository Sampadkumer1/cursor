const main = document.querySelector('#main');
const cursor= document.querySelector('.cursor');

main.addEventListener('mousemove',function(cor){
    cursor.style.left = cor.x+'px'
    cursor.style.top = cor.y+'px'
    
})