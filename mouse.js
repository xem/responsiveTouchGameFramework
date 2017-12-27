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
  i.value += "click " + click_x + " " + click_y + "\n";
  i.scrollTop = i.scrollHeight;
  /* end */
};

/* Mousedown / touchstart */
onmousedown = ontouchstart = e => {
  e.preventDefault();
  down = 1;
  [down_x, down_y] = update_mouse(e);
  
  /* your mousedown code here: */
  i.value += "down " + down_x + " " + down_y + "\n";
  i.scrollTop = i.scrollHeight;
  /* end */
  
};

/* Mousemove / touchmove */
onmousemove = ontouchmove = e => {
  e.preventDefault();
  [move_x, move_y] = update_mouse(e);
  
  /* your mousemove code here: */
  i.value += "move " + move_x + " " + move_y + "\n";
  i.scrollTop = i.scrollHeight;
  /* end */
};

/* Mouseup / touchend */
onmouseup = ontouchend = e => {
  e.preventDefault();
  down = 0;
  [up_x, up_y] = update_mouse(e);
  
  /* your mouseup code here: */
  i.value += "up " + up_x + " " + up_y + "\n";
  i.scrollTop = i.scrollHeight;
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