function upobj(x,y) {
  if(world[x][y].type == "fe"){
    ctx.beginPath();
    ctx.rect(x * (short/100),y * (short/100), 1 * (short/100), 1 * (short/100));
    ctx.fillStyle = "gray";
    ctx.fill();
  }
  if(world[x][y].player == "aaaa"){
    ctx.beginPath();
    ctx.rect(x * (short/100),y * (short/100), 1 * (short/100), 1 * (short/100));
    ctx.fillStyle = "black";
    ctx.fill();
  }else if(world[x][y].player != undefined){
    ctx.beginPath();
    ctx.rect(x * (short/100),y * (short/100), 1 * (short/100), 1 * (short/100));
    ctx.fillStyle = "red";
    ctx.fill();
  }
}
