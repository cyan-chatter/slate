const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
console.log(ctx);  
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.fillStyle = 'white';
ctx.fillRect(1, 1, 2, 2);

iconMap = {
  state: {
    domId: "state",
    iconUrl: [
      "https://img.icons8.com/external-kmg-design-glyph-kmg-design/32/000000/external-pen-education-kmg-design-glyph-kmg-design.png",
      "https://img.icons8.com/ios-glyphs/30/000000/eraser.png",
    ],
    alt: ["&#128397;", "&#9938;"],
  },
  brush: {
    domId: "brushBtn",
    iconUrl: [
      "https://img.icons8.com/external-kmg-design-glyph-kmg-design/32/000000/external-pen-education-kmg-design-glyph-kmg-design.png",
    ],
    alt: ["&#128397;"],
  },
  eraser: {
    domId: "eraserBtn",
    iconUrl: [
      "https://img.icons8.com/ios-glyphs/30/000000/eraser.png",
      "https://img.icons8.com/ios/50/000000/eraser.png",
      "https://img.icons8.com/sf-ultralight-filled/50/000000/eraser.png",
    ],
    alt: ["&#9938;"],
  },
  clear: {
    domId: "clearCanvasBtn",
    iconUrl: [
      "https://img.icons8.com/material-rounded/24/000000/rotate.png",
      "https://img.icons8.com/pastel-glyph/64/000000/rotate-left.png",
    ],
    alt: ["&#11119;"],
  },
  save: {
    domId: "saveBtn",
    iconUrl: ["https://img.icons8.com/sf-black-filled/64/000000/save.png"],
  },
  up: {
    domId: "brushSizeIncBtn",
    iconUrl: ["https://img.icons8.com/sf-black-filled/32/000000/up.png"],
    alt: ["&#11145;"],
  },
  down: {
    domId: "brushSizeDecBtn",
    iconUrl: ["https://img.icons8.com/sf-black/32/000000/down.png"],
    alt: ["&#11147;"],
  },
  mode: {
    domId: "brushModeBtn",
    iconUrl: [
      "https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/000000/external-toggle-off-interface-royyan-wijaya-detailed-outline-royyan-wijaya.png",
      "https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/000000/external-toggle-on-interface-royyan-wijaya-detailed-outline-royyan-wijaya.png",
    ],
    alt: ["&#8652;"],
  },
};

const attachIcons = () => {
    for (const key in iconMap){
        const icon = iconMap[key]
        const iconBtn = document.getElementById(icon.domId);
        if(iconBtn){
            const iconImg = document.createElement("IMG");
            iconImg.setAttribute("id", `${icon.domId}Icon`);
            iconImg.src = icon.iconUrl[0];
            iconBtn.appendChild(iconImg);
        }
    }
}

attachIcons();

window.addEventListener('resize', ()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // setting canvas objects Removes all the drawing on the canvas
});

const colorPicker1 = document.getElementById('color-picker-1');
const colorPicker2 = document.getElementById('color-picker-2');

const addHSLColorToPicker = (color,parent) => {
    const colordiv = document.createElement("DIV");
    colordiv.className = 'color';
    colordiv.id = 'color' + color.index;
    colordiv.hue = color.hue; 
    colordiv.sat = color.sat;   
    colordiv.lit = color.lit;
    colordiv.style.background = `hsl(${colordiv.hue},${colordiv.sat}%,${colordiv.lit}%)`; 
    parent.appendChild(colordiv);
}

const whitecolor = {
    index : 100,
    hue : 0,
    sat : 100,
    lit : 100
}

const greycolor = {
    index : 101,
    hue : 180,
    sat : 0,
    lit : 70
}

const redcolor = {
    index : 25,
    hue : 0,
    sat : 100,
    lit : 65
}

for(let i=0; i<24; ++i){
    const color = {
        index : i,
        hue : i*15,
        sat : 100,
        lit : 100
    }

    if(i%2 == 1){
        color.lit = 70;
    } 
    else{
        color.lit = 75;
    }
    addHSLColorToPicker(color,colorPicker1);

    if(i===11) addHSLColorToPicker(whitecolor,colorPicker1);
}

for(let i=0; i<24; ++i){
    const color = {
        index : i+24,
        hue : i*15,
        sat : 100,
        lit : 65
    }

    // if(i%2 == 1){
    //     color.lit = 70;
    // } 
    // else{
    //     color.lit = 75;
    // }

    addHSLColorToPicker(color,colorPicker2);
    if(i===11) addHSLColorToPicker(greycolor,colorPicker2);
}



var r = document.querySelector(':root');

const mouse = {
    x:undefined,
    y:undefined
}

let size = 5;
let fill = 'cyan'
let esize = 5;

let mode = true;
let isBrush = false;
let isEraser = false;


const state = document.getElementById("state");
const stateIcon = document.getElementById("stateIcon");
stateIcon.style.fill = fill;

const constFontSize = 1.5;

const changeStateSize = () => {
    state.style.fontSize = (constFontSize + ((isEraser ? esize : size)/10)) + "em" ;
}

// changeStateSize();

const changeStateLogo = () => {
    state.style.opacity = 0;
    setTimeout(function () { //timeout for fade effect
        stateIcon.src = iconMap.state.iconUrl[isEraser ? 1 : 0]
        state.style.opacity = 1 
    }, 500)
    changeStateSize();
}



const drawCircle = (size=5,fill='cyan') => {
    let rad = size;
    ctx.fillStyle = fill;
    ctx.lineWidth = 5;
    ctx.beginPath(); 
    ctx.arc(mouse.x,mouse.y,rad,0,Math.PI*2);
    ctx.fill();    
}

const attachBrush = (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
    if(!isEraser) drawCircle(size,fill);
    else drawCircle(esize,'black');
}

const drawLine = (ax,ay,size=5,fill='cyan') => {
    ctx.strokeStyle = fill;
    ctx.lineWidth = size;
    ctx.lineTo(ax,ay);
    ctx.stroke();
}

const attachPen = (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
    if(!isEraser) drawLine(mouse.x,mouse.y,size,fill);
    else drawLine(mouse.x,mouse.y,esize,'black');
}

let controller = new AbortController();

document.getElementById('brushModeBtn').addEventListener('click', () => {
    mode = !mode;
    isBrush = false;
    controller.abort();
    controller = new AbortController();
    drawWithBrush();
    document.getElementById('brushModeBtnIcon').src = iconMap.mode.iconUrl[mode ? 0 : 1];
})

const drawWithBrush = () => {

    if(mode){
        canvas.addEventListener('mousedown', (event) => {
             isBrush = true; 
             ctx.beginPath();
        }, { signal: controller.signal });
        canvas.addEventListener('mouseup', () => {
             isBrush = false; 
        }, { signal: controller.signal });
        canvas.addEventListener('mousemove', (event) => {        
            if(isBrush){
                attachPen(event);
            }
        }, { signal: controller.signal });    
    }
    else{
        const toggleBrush = (isBrush) => {
            if(isBrush){
                ctx.beginPath();
                canvas.addEventListener('mousemove', attachPen, { signal: controller.signal });
            } 
            else canvas.removeEventListener('mousemove', attachPen, { signal: controller.signal });
        }
        canvas.addEventListener('click', ()=>{
            isBrush = !isBrush;
            toggleBrush(isBrush);  
        }, { signal: controller.signal })        
    }
}

drawWithBrush();


let btnRotation = 0; //for ui button rotation
document.getElementById('clearCanvasBtn').addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    document.getElementById("clearCanvasBtnIcon").style.transform=`rotate(${btnRotation - 360}deg)`;
    btnRotation -= 360;
})


document.getElementById('brushSizeIncBtn').addEventListener('click', () => {
    if(isEraser) ++esize;
    else ++size;
    if(size > 20) size = 20;
    if(esize > 20) esize = 20;
    changeStateSize();
})
document.getElementById('brushSizeDecBtn').addEventListener('click', () => {
    if(isEraser) --esize;
    else --size;
    if(size < 1) size = 1;
    if(esize < 1) esize = 1;
    changeStateSize();
})
document.getElementById('eraserBtn').addEventListener('click', () => {
    isEraser = true;
    changeStateLogo();
})
document.getElementById('brushBtn').addEventListener('click', () => {
    isEraser = false;
    changeStateLogo();
})

document.querySelectorAll('.color').forEach((e)=>{
    e.addEventListener('click', (el) => {
        fill = `hsl(${el.target.hue},${el.target.sat}%,${el.target.lit}%)`;
        r.style.setProperty('--defcolor', fill);
    })
})

document.getElementById("header").addEventListener('click', () => location.assign("https://github.com/cyan-chatter"));

document.getElementById("header").addEventListener('mouseover', () => {
    document.getElementById("header-tooltip").style.opacity = 1;
});
document.getElementById("header").addEventListener('mouseout', () => {
    document.getElementById("header-tooltip").style.opacity = 0;
});
