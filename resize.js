/* Canvas offsets (changed onresize) */
canvas_left = 0;
canvas_top = 0;

/* Canvas "real" size (changed onresize) */
canvas_real_width = 0;
canvas_real_height = 0;

/* Resize */
onresize = onrotate = b => {
  
  
  screen_ratio = innerWidth / innerHeight;
  
  /* Full width */
  if(canvas_ratio > screen_ratio){
    canvas_real_width = innerWidth;
    canvas_real_height = innerWidth / canvas_ratio;
    canvas_left = 0;
    canvas_top = (innerHeight - canvas_real_height) / 2;
    logz.style.width = "200px";
    logz.style.height = (canvas_top - 20) + "px";
  }
  
  /* Full height */
  else {
    canvas_real_width = innerHeight * canvas_ratio;
    canvas_real_height = innerHeight;
    canvas_left = (innerWidth - canvas_real_width) / 2;
    canvas_top = 0;
    logz.style.width = (canvas_left - 20) + "px";
    logz.style.height = "100px";
  }
  a.style.width = canvas_real_width + "px";
  a.style.height = canvas_real_height + "px";
  
  logz.style.height = (canvas_top - 20) + "px";

};
