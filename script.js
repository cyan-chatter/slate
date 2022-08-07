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
    // setting canvas objects Removes all the drawing on the canvas
});

const svgMap = {
  state: {
    domId: "stateWrapper",
    svg: [
      `
            <svg class="stateLogoSvg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32px" height="32px" viewBox="0 0 32 32" version="1.1">
            <g id="surface1">
            <path d="M 0.617188 32.007812 C 0.632812 32.007812 0.640625 32.007812 0.65625 32.007812 L 3.820312 31.785156 L 2.859375 29.148438 L 0.226562 28.1875 L 0.00390625 31.351562 C -0.0234375 31.6875 0.289062 32.007812 0.617188 32.007812 Z M 0.617188 32.007812 "/>
            <path d="M 4.445312 27.566406 L 5.539062 30.585938 L 8.902344 31.328125 L 27.867188 12.371094 L 19.632812 4.144531 L 0.671875 23.101562 L 1.421875 26.46875 Z M 4.445312 27.566406 "/>
            <path d="M 29.097656 11.023438 L 20.988281 2.90625 L 23.628906 0.265625 C 23.984375 -0.0859375 24.5625 -0.0859375 24.914062 0.265625 L 31.742188 7.09375 C 32.097656 7.449219 32.097656 8.023438 31.742188 8.382812 Z M 29.097656 11.023438 "/>
            </g>
            </svg>
        `,
      `
            <svg class="stateLogoSvg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32px" height="32px" viewBox="0 0 32 32" version="1.1">
            <g id="surface1">
            <path d="M 8.71875 11.347656 L 1.148438 18.914062 C 0.40625 19.65625 0 20.640625 0 21.6875 C 0 22.734375 0.40625 23.722656 1.148438 24.460938 L 7.53125 30.84375 L 15.398438 30.84375 L 21.804688 24.4375 Z M 8.71875 11.347656 "/>
            <path d="M 30.851562 9.84375 L 23.308594 2.304688 C 21.78125 0.773438 19.289062 0.773438 17.757812 2.304688 L 10.195312 9.871094 L 23.28125 22.960938 L 30.851562 15.394531 C 31.59375 14.652344 32 13.667969 32 12.617188 C 32 11.570312 31.59375 10.585938 30.851562 9.84375 Z M 30.851562 9.84375 "/>
            </g>
            </svg>
        `,
    ],
    alt: ["&#128397;", "&#9938;"],
  },
  brush: {
    domId: "brushBtnWrapper",
    svg: [
      `
            <svg id="brushLogoSvg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32px" height="32px" viewBox="0 0 32 32" version="1.1">
            <g id="surface1">
            <path d="M 0.617188 32.007812 C 0.632812 32.007812 0.640625 32.007812 0.65625 32.007812 L 3.820312 31.785156 L 2.859375 29.148438 L 0.226562 28.1875 L 0.00390625 31.351562 C -0.0234375 31.6875 0.289062 32.007812 0.617188 32.007812 Z M 0.617188 32.007812 "/>
            <path d="M 4.445312 27.566406 L 5.539062 30.585938 L 8.902344 31.328125 L 27.867188 12.371094 L 19.632812 4.144531 L 0.671875 23.101562 L 1.421875 26.46875 Z M 4.445312 27.566406 "/>
            <path d="M 29.097656 11.023438 L 20.988281 2.90625 L 23.628906 0.265625 C 23.984375 -0.0859375 24.5625 -0.0859375 24.914062 0.265625 L 31.742188 7.09375 C 32.097656 7.449219 32.097656 8.023438 31.742188 8.382812 Z M 29.097656 11.023438 "/>
            </g>
            </svg>
        `,
    ],
    alt: ["&#128397;"],
  },
  eraser: {
    domId: "eraserBtnWrapper",
    svg: [
      `
            <svg id="eraserLogoSvg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32px" height="32px" viewBox="0 0 32 32" version="1.1">
            <g id="surface1">
            <path d="M 8.71875 11.347656 L 1.148438 18.914062 C 0.40625 19.65625 0 20.640625 0 21.6875 C 0 22.734375 0.40625 23.722656 1.148438 24.460938 L 7.53125 30.84375 L 15.398438 30.84375 L 21.804688 24.4375 Z M 8.71875 11.347656 "/>
            <path d="M 30.851562 9.84375 L 23.308594 2.304688 C 21.78125 0.773438 19.289062 0.773438 17.757812 2.304688 L 10.195312 9.871094 L 23.28125 22.960938 L 30.851562 15.394531 C 31.59375 14.652344 32 13.667969 32 12.617188 C 32 11.570312 31.59375 10.585938 30.851562 9.84375 Z M 30.851562 9.84375 "/>
            </g>
            </svg>
        `,
    ],
    alt: ["&#9938;"],
  },
  clear: {
    domId: "clearCanvasBtnWrapper",
    svg: [
      `
        <svg version="1.1" id="clearLogoSvg"" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
        <g>
        <path d="M30,2c0,1.104,0.896,2,2,2c7.479,0,14.51,2.913,19.798,8.202C57.087,17.49,60,24.521,60,32c0,7.381-2.842,14.323-8,19.587
            V46c0-1.104-0.896-2-2-2s-2,0.896-2,2v12h12c1.104,0,2-0.896,2-2s-0.896-2-2-2h-4.776C60.885,48.032,64,40.257,64,32
            c0-8.547-3.329-16.583-9.374-22.627C48.583,3.329,40.547,0,32,0C30.896,0,30,0.896,30,2z"/>
        <path d="M9.374,54.627C15.417,60.671,23.453,64,32,64c1.104,0,2-0.896,2-2s-0.896-2-2-2c-7.479,0-14.51-2.913-19.798-8.202
            C6.913,46.51,4,39.479,4,32c0-7.381,2.842-14.323,8-19.587V18c0,1.104,0.896,2,2,2s2-0.896,2-2V6H4C2.896,6,2,6.896,2,8
            s0.896,2,2,2h4.776C3.115,15.968,0,23.743,0,32C0,40.547,3.329,48.583,9.374,54.627z"/>
        </g>
        </svg>
        `,
    ],
    alt: ["&#11119;"],
  },
  save: {
    domId: "saveBtnWrapper",
    svg: [
      `
        <svg id="saveLogoSvg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32px" height="32px" viewBox="0 0 32 32" version="1.1">
        <g id="surface1">
        <path d="M 10.035156 5.914062 L 21.996094 5.914062 C 22.351562 5.914062 22.640625 5.625 22.640625 5.269531 L 22.640625 0 L 9.386719 0 L 9.386719 5.269531 C 9.386719 5.625 9.679688 5.914062 10.035156 5.914062 Z M 10.035156 5.914062 "/>
        <path d="M 31.53125 8.054688 L 24.78125 1.277344 L 24.78125 5.269531 C 24.78125 6.804688 23.53125 8.054688 21.996094 8.054688 L 10.035156 8.054688 C 8.5 8.054688 7.25 6.804688 7.25 5.269531 L 7.25 0 L 2.9375 0 C 1.316406 0 0 1.316406 0 2.9375 L 0 29.09375 C 0 30.710938 1.316406 32.03125 2.9375 32.03125 L 29.09375 32.03125 C 30.710938 32.03125 32.03125 30.710938 32.03125 29.09375 L 32.03125 9.265625 C 32.03125 8.8125 31.851562 8.375 31.53125 8.054688 Z M 27.046875 25.289062 C 27.046875 26.234375 26.28125 27.003906 25.328125 27.003906 L 6.695312 27.003906 C 5.75 27.003906 4.984375 26.234375 4.984375 25.289062 L 4.984375 16.347656 C 4.984375 15.402344 5.75 14.632812 6.695312 14.632812 L 25.328125 14.632812 C 26.28125 14.632812 27.046875 15.402344 27.046875 16.347656 Z M 27.046875 25.289062 "/>
        <path d="M 23.375 17.382812 L 8.652344 17.382812 C 8.0625 17.382812 7.585938 17.863281 7.585938 18.453125 C 7.585938 19.042969 8.0625 19.523438 8.652344 19.523438 L 23.375 19.523438 C 23.96875 19.523438 24.445312 19.042969 24.445312 18.453125 C 24.445312 17.863281 23.96875 17.382812 23.375 17.382812 Z M 23.375 17.382812 "/>
        <path d="M 21.242188 21.65625 L 10.789062 21.65625 C 10.195312 21.65625 9.71875 22.132812 9.71875 22.726562 C 9.71875 23.3125 10.195312 23.789062 10.789062 23.789062 L 21.242188 23.789062 C 21.832031 23.789062 22.308594 23.3125 22.308594 22.726562 C 22.308594 22.132812 21.832031 21.65625 21.242188 21.65625 Z M 21.242188 21.65625 "/>
        </g>
        </svg>
      `,
    ],
  },
  up: {
    domId: "brushSizeIncBtnWrapper",
    svg: [
      `
        <svg id="upLogoSvg" width="30px" height="30px" viewBox="0 0 30 30" id="_24_-_Up" data-name="24 - Up" xmlns="http://www.w3.org/2000/svg">
        <path id="Path_213" data-name="Path 213" d="M16,1A15,15,0,1,0,31,16,15.007,15.007,0,0,0,16,1Zm0,2A13,13,0,1,1,3,16,13.006,13.006,0,0,1,16,3Z" transform="translate(-1 -1)" fill-rule="evenodd"/>
        <path id="Path_214" data-name="Path 214" d="M10.707,19.707,16,14.414l5.293,5.293a1,1,0,1,0,1.414-1.414l-6-6a1,1,0,0,0-1.414,0l-6,6a1,1,0,0,0,1.414,1.414Z" transform="translate(-1 -1)" fill-rule="evenodd"/>
        </svg>
        `,
    ],
    alt: ["&#11145;"],
  },
  down: {
    domId: "brushSizeDecBtnWrapper",
    svg: [
      `
        <svg id="downLogoSvg" width="30px" height="30px" viewBox="0 0 30 30" id="_22_-_Down" data-name="22 - Down" xmlns="http://www.w3.org/2000/svg">
        <path id="Path_209" data-name="Path 209" d="M16,1A15,15,0,1,0,31,16,15.007,15.007,0,0,0,16,1Zm0,2A13,13,0,1,1,3,16,13.006,13.006,0,0,1,16,3Z" transform="translate(-1 -1)" fill-rule="evenodd"/>
        <path id="Path_210" data-name="Path 210" d="M21.293,12.293,16,17.586l-5.293-5.293a1,1,0,0,0-1.414,1.414l6,6a1,1,0,0,0,1.414,0l6-6a1,1,0,1,0-1.414-1.414Z" transform="translate(-1 -1)" fill-rule="evenodd"/>
        </svg>
        `,
    ],
    alt: ["&#11147;"],
  },
  mode: {
    domId: "brushModeBtnWrapper",
    svg: [
      `
        <svg id="mode1LogoSvg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32px" height="32px" viewBox="0 0 32 31" version="1.1">
        <g id="surface1">
        <path d="M 11.734375 30.320312 C 11.734375 30.703125 12.054688 31.015625 12.449219 31.015625 L 23.019531 31.015625 C 23.410156 31.015625 23.734375 30.703125 23.734375 30.320312 L 23.734375 28.734375 L 11.734375 28.734375 Z M 11.734375 30.320312 "/>
        <path d="M 11.496094 11.183594 L 11.496094 6.117188 C 11.496094 5.53125 11.726562 4.984375 12.144531 4.574219 C 12.609375 4.125 13.273438 3.867188 13.976562 3.867188 C 14.523438 3.867188 15.046875 4.03125 15.457031 4.324219 C 15.949219 4.675781 16.257812 5.210938 16.320312 5.820312 C 16.320312 5.832031 16.601562 8.476562 16.855469 10.839844 C 18.632812 9.828125 19.832031 7.960938 19.832031 5.820312 C 19.832031 2.605469 17.144531 0 13.824219 0 C 10.507812 0 7.820312 2.605469 7.820312 5.820312 C 7.816406 8.230469 9.332031 10.300781 11.496094 11.183594 Z M 11.496094 11.183594 "/>
        <path d="M 25.605469 17.796875 C 25.605469 17.121094 25.160156 16.523438 24.496094 16.3125 C 22.511719 15.6875 18.503906 14.4375 17.894531 14.320312 C 17.703125 14.285156 17.519531 14.265625 17.339844 14.265625 C 16.855469 14.265625 16.433594 14.394531 16.179688 14.613281 C 16.179688 14.613281 16.179688 14.613281 16.179688 14.609375 C 16.175781 14.582031 15.25 5.941406 15.25 5.925781 C 15.175781 5.234375 14.582031 4.90625 13.972656 4.90625 C 13.277344 4.90625 12.5625 5.328125 12.566406 6.113281 L 12.558594 20.117188 C 12.558594 20.285156 12.433594 20.421875 12.261719 20.445312 C 12.257812 20.445312 12.257812 20.445312 12.253906 20.445312 C 12.242188 20.449219 12.222656 20.449219 12.210938 20.449219 C 12.207031 20.449219 12.203125 20.449219 12.199219 20.449219 C 11.710938 20.4375 10.613281 20.421875 9.546875 18.921875 C 9.402344 18.726562 9.273438 18.542969 9.15625 18.378906 C 8.785156 17.863281 8.285156 17.640625 7.820312 17.640625 C 6.996094 17.640625 6.257812 18.328125 6.433594 19.359375 C 6.691406 20.859375 8.386719 24.351562 11.726562 27.628906 L 23.726562 27.628906 L 24.9375 25.644531 C 25.371094 24.941406 25.597656 24.136719 25.597656 23.316406 Z M 25.605469 17.796875 "/>
        </g>
        </svg>
        `,
      `
        <svg id="mode2LogoSvg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32px" height="32px" viewBox="0 0 32 32" version="1.1">
        <g id="surface1">
        <path d="M 7.617188 8.027344 L 10.199219 8.027344 C 10.683594 8.027344 11.074219 7.632812 11.074219 7.148438 C 11.074219 6.664062 10.683594 6.269531 10.199219 6.269531 L 7.617188 6.269531 C 7.132812 6.269531 6.738281 6.664062 6.738281 7.148438 C 6.738281 7.632812 7.132812 8.027344 7.617188 8.027344 Z M 7.617188 8.027344 "/>
        <path d="M 14.765625 3.460938 L 14.765625 0.878906 C 14.765625 0.394531 14.371094 0 13.886719 0 C 13.402344 0 13.007812 0.394531 13.007812 0.878906 L 13.007812 3.460938 C 13.007812 3.945312 13.402344 4.339844 13.886719 4.339844 C 14.371094 4.339844 14.765625 3.945312 14.765625 3.460938 Z M 14.765625 3.460938 "/>
        <path d="M 20.15625 8.027344 C 20.640625 8.027344 21.035156 7.632812 21.035156 7.148438 C 21.035156 6.664062 20.640625 6.269531 20.15625 6.269531 L 17.574219 6.269531 C 17.089844 6.269531 16.695312 6.664062 16.695312 7.148438 C 16.695312 7.632812 17.089844 8.027344 17.574219 8.027344 Z M 20.15625 8.027344 "/>
        <path d="M 24.769531 26.535156 C 25.195312 25.820312 25.421875 25.007812 25.421875 24.175781 L 25.421875 18.578125 C 25.421875 17.894531 24.980469 17.285156 24.328125 17.074219 C 22.378906 16.4375 18.445312 15.171875 17.84375 15.050781 C 17.152344 14.914062 16.507812 15.042969 16.160156 15.347656 C 16.160156 15.347656 16.160156 15.347656 16.160156 15.34375 C 16.140625 15.183594 15.25 6.542969 15.25 6.535156 C 15.164062 5.789062 14.53125 5.4375 13.90625 5.457031 C 13.234375 5.484375 12.605469 6.027344 12.609375 6.726562 L 12.605469 20.929688 C 12.605469 21.097656 12.480469 21.238281 12.3125 21.261719 C 12.308594 21.261719 12.308594 21.261719 12.304688 21.261719 C 12.289062 21.265625 12.269531 21.265625 12.253906 21.265625 C 11.773438 21.25 10.695312 21.238281 9.644531 19.714844 C 9.503906 19.515625 9.378906 19.332031 9.261719 19.164062 C 8.261719 17.726562 6.316406 18.523438 6.585938 20.15625 C 6.839844 21.675781 8.503906 25.21875 11.785156 28.542969 L 23.582031 28.542969 Z M 24.769531 26.535156 "/>
        <path d="M 11.792969 31.28125 C 11.792969 31.667969 12.109375 31.984375 12.496094 31.984375 L 22.878906 31.984375 C 23.265625 31.984375 23.582031 31.667969 23.582031 31.28125 L 23.582031 29.671875 L 11.792969 29.671875 Z M 11.792969 31.28125 "/>
        </g>
        </svg>
        `,
    ],
    alt: ["&#8652;"],
  },
};


const mouse = {
  x: undefined,
  y: undefined,
};

let size = 5;
let fill = "cyan";
let esize = 5;

let mode = true;
let isBrush = false;
let isEraser = false;

const changeStateSize = () =>{
  const stateWrapper = document.getElementById("state-wrapper");
  const state = document.getElementById("state");
  let currsize = 0;
  if(isEraser) currsize = esize;
  else currsize = size;
  stateWrapper.style.width = 3 + currsize / 7.5 + "em";
  stateWrapper.style.height = 3 + currsize / 7.5 + "em";
  stateWrapper.style.borderRadius = 2 + currsize / 10 + "em";
  state.style.bottom = 1 - currsize / 15 + "em";
  state.style.left = 1.5 - currsize / 15 + "em";
}

const changeStateLogo = (isEraser) => {
  const state = document.getElementById("state");
  state.style.opacity = 0;
  setTimeout(function () {
    //timeout for fade effect
    document.getElementById("state-wrapper").innerHTML =
      svgMap["state"].svg[isEraser ? 1 : 0];
    state.style.opacity = 1;
  }, 500);
  changeStateSize();
};

const changeModeLogo = (mode) => {
  document.getElementById("brushModeBtnWrapper").innerHTML = mode
    ? svgMap["mode"].svg[0]
    : svgMap["mode"].svg[1];
};



const attachSVGIcons = () => {
  for (const key in svgMap) {
    const icon = svgMap[key];
    const iconBtnWrapper = document.getElementById(icon.domId);
    if (iconBtnWrapper) iconBtnWrapper.innerHTML = icon.svg[0];
  }
  changeStateLogo(0);
};

attachSVGIcons();

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
    changeModeLogo(mode);
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
    changeStateLogo(isEraser);
})
document.getElementById('brushBtn').addEventListener('click', () => {
    isEraser = false;
    changeStateLogo(isEraser);
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


let btnRotation = 0; //for ui button rotation
document.getElementById("clearCanvasBtn").addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  document.getElementById("clearCanvasBtnWrapper").style.transform = `rotate(${
    btnRotation + 180
  }deg)`;
  btnRotation += 180;
});



/* NOTES
1. FIXME: State Wrapper Flickers a bit from its centre when size is changed
2. FIXME: colors overlap when window is resized to a smaller width
*/