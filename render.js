/* Render */
render = e => {
  
  // Reset
  a.width = a.width;
  
  // Drax square
  c.rect(x,y,30,30)
  c.fill();
  
  // Grab
  if(!grab && pointer_down && c.isPointInPath(down_x, down_y)){
    grab = true;
    grab_x = down_x - x;
    grab_y = down_y - y;
    log("grab");
  }
  
  // Let go
  if(grab && !pointer_down){
    grab = false;
    log("let go");
  }
  
  // Follow mouse / finger
  if(grab){
    x = move_x - grab_x;
    y = move_y - grab_y;
  }
}