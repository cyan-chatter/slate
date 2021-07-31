const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
console.log(ctx);  
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.fillStyle = 'white';
ctx.fillRect(1, 1, 2, 2);

window.addEventListener('resize', ()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    //setting canvas objects Removes all the drawing on the canvas
    ctx.fillStyle = 'white';
    ctx.fillRect(1, 1, 2, 2);
});

const mouse = {
    x:undefined,
    y:undefined
}

let mode = true;
let isBrush = false;

const drawCircle = (fill='cyan', size=5) => {
    let rad = size;
    ctx.fillStyle = fill;
    ctx.lineWidth = 5;
    ctx.beginPath(); // lets js know a new shape is starting ie disconnected from the prev shape
    ctx.arc(mouse.x,mouse.y,rad,0,Math.PI*2);
    ctx.fill();
}

const attachBrush = (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
    drawCircle();
}

let controller = new AbortController();

document.getElementById('brushModeBtn').addEventListener('click', () => {
    //console.log('Before: ', 'brush: ' + isBrush, 'mode: ' + (mode?1:2));
    mode = !mode;
    isBrush = false;
    controller.abort();
    controller = new AbortController();
    drawWithBrush();
    //console.log('After: ', 'brush: ' + isBrush, 'mode: ' + (mode?1:2));
})

const drawWithBrush = () => {
    if(mode){
        canvas.addEventListener('mousedown', () => isBrush = true, { signal: controller.signal });
        canvas.addEventListener('mouseup', () => isBrush = false, { signal: controller.signal });
        canvas.addEventListener('mousemove', (event) => {
            if(isBrush) attachBrush(event);
        }, { signal: controller.signal });    
    }
    else{
        const toggleBrush = (isBrush) => {
            if(isBrush) canvas.addEventListener('mousemove', attachBrush, { signal: controller.signal });
            else canvas.removeEventListener('mousemove', attachBrush, { signal: controller.signal });
        }
        canvas.addEventListener('click', ()=>{
            drawCircle();
            isBrush = !isBrush;
            toggleBrush(isBrush);  
        }, { signal: controller.signal })        
    }
}

drawWithBrush();