var short = 100
var planepos = -1
var planed = 0
var teams = 8
if(window.screen.availWidth > window.screen.availHeight){
  short = window.screen.availHeight
}else {
  short = window.screen.availWidth
}
var canvas = document.getElementById("myCanvas");
canvas.setAttribute("width", short)
canvas.setAttribute("height", short)
var ctx = canvas.getContext("2d");
function drawStartFrame() {
  ctx.beginPath();
  ctx.rect(0, 0, 100 * (short/100), 100 * (short/100));
  ctx.fillStyle = "blue";
  ctx.fill();
  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.arc(50 * (short/100),50 * (short/100),30 * (short/100),0,2*Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(10 * (short/100),10 * (short/100),10 * (short/100),0,2*Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(85 * (short/100),15 * (short/100),15 * (short/100),0,2*Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(85 * (short/100),85 * (short/100),15 * (short/100),0,2*Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse((10 + (planepos * (short/100))) * (short/100), 50 * (short/100), 10 * (short/100), 5 * (short/100), 0, 0, 2 * Math.PI);
  ctx.fillStyle = "gray";
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo((5 + (planepos * (short/100)))  * (short/100), 50  * (short/100));
  ctx.lineTo((15 + (planepos * (short/100)))  * (short/100), 50  * (short/100));
  ctx.lineTo((5 + (planepos * (short/100)))  * (short/100), 35  * (short/100));
  ctx.lineTo((5 + (planepos * (short/100)))  * (short/100), 50  * (short/100));
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo((5 + (planepos * (short/100)))  * (short/100), 50  * (short/100));
  ctx.lineTo((15 + (planepos * (short/100)))  * (short/100), 50  * (short/100));
  ctx.lineTo((5 + (planepos * (short/100)))  * (short/100), 65  * (short/100));
  ctx.lineTo((5 + (planepos * (short/100)))  * (short/100), 50  * (short/100));
  ctx.fill();
  planepos++
}
function drawStartFrameB() {
  ctx.beginPath();
  ctx.rect(0, 0, 100 * (short/100), 100 * (short/100));
  ctx.fillStyle = "blue";
  ctx.fill();
  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.arc(50 * (short/100),50 * (short/100),30 * (short/100),0,2*Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(10 * (short/100),10 * (short/100),10 * (short/100),0,2*Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(85 * (short/100),15 * (short/100),15 * (short/100),0,2*Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(85 * (short/100),85 * (short/100),15 * (short/100),0,2*Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse((10 + planepos * (short/100)) * (short/100), (50 + (planed / 56)) * (short/100), (10 - planed * 2) * (short/100), (5 - planed) * (short/100), 0, 0, 2 * Math.PI);
  ctx.fillStyle = "gray";
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(((5 + planed) + planepos * (short/100))  * (short/100), 50  * (short/100));
  ctx.lineTo(((15 - planed) + planepos * (short/100))  * (short/100), 50  * (short/100));
  ctx.lineTo((5 + planepos * (short/100))  * (short/100), (35 + planed * 3)  * (short/100));
  ctx.lineTo(((5 + planed) + planepos * (short/100))  * (short/100), 50  * (short/100));
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(((5 + planed) + planepos * (short/100))  * (short/100), 50  * (short/100));
  ctx.lineTo(((15 - planed) + planepos * (short/100))  * (short/100), 50  * (short/100));
  ctx.lineTo((5 + planepos * (short/100))  * (short/100), (65 - planed * 3)  * (short/100));
  ctx.lineTo(((5 + planed) + planepos * (short/100))  * (short/100), 50  * (short/100));
  ctx.fill();
  planed++
}
function backrond() {
  ctx.beginPath();
  ctx.rect(0, 0, 100 * (short/100), 100 * (short/100));
  ctx.fillStyle = "blue";
  ctx.fill();
  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.arc(50 * (short/100),50 * (short/100),30 * (short/100),0,2*Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(10 * (short/100),10 * (short/100),10 * (short/100),0,2*Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(85 * (short/100),15 * (short/100),15 * (short/100),0,2*Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(85 * (short/100),85 * (short/100),15 * (short/100),0,2*Math.PI);
  ctx.fill();
  if(teams == 8){
    //2
    ctx.beginPath();
    ctx.moveTo(0,50 * (short/100),50 * (short/100))
    ctx.lineTo(100* (short/100), 50 * (short/100))
    ctx.stroke();
    //4
    ctx.beginPath();
    ctx.moveTo(50 * (short/100),0 * (short/100))
    ctx.lineTo(50* (short/100), 100 * (short/100))
    ctx.stroke();
    //8
    ctx.beginPath();
    ctx.moveTo(0,0)
    ctx.lineTo(100* (short/100), 100 * (short/100))
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(100 * (short/100),0)
    ctx.lineTo(0, 100 * (short/100))
    ctx.stroke();
  }
}

function introPartA() {

  setTimeout(function(){
    drawStartFrame()
    drawStartFrameB()
    setTimeout(function(){
      drawStartFrame()
      drawStartFrameB()
      setTimeout(function(){
        drawStartFrame()
        drawStartFrameB()
        setTimeout(function(){
          drawStartFrame()
          drawStartFrameB()
          setTimeout(function(){
            drawStartFrame()
            drawStartFrameB()
            setTimeout(function(){
              backrond()
          },300)
          },300)
        },300)
      },300)
    },300)
  },300)

}
