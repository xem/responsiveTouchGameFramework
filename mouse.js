/* Compute mouse / touch coordinates on the canvas */

down = 0;

update_mouse = e => {

  pointer = {};
  if(e.changedTouches){
    pointer = e.changedTouches[0];
  }
  else {
    pointer = e;
  }
  
  return [
    ~~(((pointer.pageX) - canvas_left) * canvas_width / canvas_real_width),
    ~~(((pointer.pageY) - canvas_top) * canvas_height / canvas_real_height)
  ];
}

/* Click */
onclick = e => {
  e.preventDefault();
  [click_x, click_y] = update_mouse(e);
  
  /* your click code here */
  log.value += "click " + click_x + " " + click_y + "\n";
  log.scrollTop = log.scrollHeight;
  /* end */
};

/* Mousedown / touchstart */
onmousedown = ontouchstart = e => {
  e.preventDefault();
  down = 1;
  [down_x, down_y] = update_mouse(e);
  
  /* your mousedown code here: */
  log.value += "down " + down_x + " " + down_y + "\n";
  log.scrollTop = log.scrollHeight;
  /* end */
  
};

/* Mousemove / touchmove */
onmousemove = ontouchmove = e => {
  e.preventDefault();
  [move_x, move_y] = update_mouse(e);
  
  /* your mousemove code here: */
  log.value += "move " + move_x + " " + move_y + "\n";
  log.scrollTop = log.scrollHeight;
  /* end */
};

/* Mouseup / touchend */
onmouseup = ontouchend = e => {
  e.preventDefault();
  down = 0;
  [up_x, up_y] = update_mouse(e);
  
  /* your mouseup code here: */
  log.value += "up " + up_x + " " + up_y + "\n";
  log.scrollTop = log.scrollHeight;
  /* end */
  
  /* Add click on mobile */
  if(e.changedTouches){
    onclick();
  }
};

/* Right click */
oncontextmenu = e => {
  e.preventDefault();
};