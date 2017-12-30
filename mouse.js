/* Compute mouse / touch coordinates on the canvas */

pointer_down = false;

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
  
};

/* Mousedown / touchstart */
onmousedown = ontouchstart = e => {
  e.preventDefault();
  pointer_down = true;
  [down_x, down_y] = update_mouse(e);
};

/* Mousemove / touchmove */
onmousemove = ontouchmove = e => {
  e.preventDefault();
  [move_x, move_y] = update_mouse(e);
};

/* Mouseup / touchend */
onmouseup = ontouchend = e => {
  e.preventDefault();
  pointer_down = false;
  [up_x, up_y] = update_mouse(e);
  
  /* Add click on mobile */
  if(e.changedTouches){
    onclick();
  }
};

/* Right click */
oncontextmenu = e => {
  e.preventDefault();
};