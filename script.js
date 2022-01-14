const canvas=document.getElementById('canvas');
const ctx=canvas.getContext('2d');
canvas.height=window.innerHeight;
canvas.width=window.innerWidth;
ctx.strokeStyle='red';
ctx.lineJoin='round';
ctx.lineCap='round';
ctx.lineWidth=50;
let isdrawing=false;
let finalx=0;
let finaly=0;
let hue=0;
function draw(e){
    if(!isdrawing){
        return ;
    }
    console.log(e);
    ctx.beginPath();
    ctx.strokeStyle=`hsl(${hue},100%,50%)`;
    ctx.moveTo(finalx,finaly);
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
    hue++;
    finalx=e.offsetX;
    finaly=e.offsetY;
}
canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mousedown',(e)=>{
    finalx=e.offsetX;
    finaly=e.offsetY
    isdrawing=true;
})
canvas.addEventListener('mouseup',()=>{
    isdrawing=false;
})
canvas.addEventListener('mouseout',()=>{
    isdrawing=false;
})