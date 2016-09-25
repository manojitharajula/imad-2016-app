console.log('DOne!');
var element=document.getElementById('main-text');
element.innerHTML='changeD';
var img=document.getElementById('image');
var marginLeft=0;
function moveRight(){
    magrinLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick = function(){
    var Interval=setInterval(moveRight,10);
    
} 