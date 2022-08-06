// try file for updates

class Canvas{
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.width = canvas.width;
        this.height = canvas.height;
        this.centerX = this.width/2;
        this.centerY = this.height/2;
        this.radius = this.width/2;
        this.angle = 0;
        this.speed = 0.01;
        this.color = "red";
        this.draw();
    }
    draw(){
        this.ctx.clearRect(0,0,this.width,this.height);
        this.ctx.beginPath();
        this.ctx.arc(this.centerX,this.centerY,this.radius,0,Math.PI*2);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }
    update(){
        this.angle += this.speed;
        this.draw();
    }
}


class Pen{
    constructor(pen){
        this.pen = pen;
        this.isPen = true;
        this.isEraser = false;
        this.size = 5;
        this.fill = 'cyan';
    }
}

class Brush{
    constructor(brush){
        this.brush = brush;
        this.isBrush = true;
        this.isEraser = false;
        this.size = 5;
        this.fill = 'cyan';
    }
}