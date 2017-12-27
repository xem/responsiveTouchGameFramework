/* Resize */
onresize = onrotate = b => {
  
  screen_ratio = innerWidth / innerHeight;
  
  /* Full width */
  if(canvas_ratio > screen_ratio){
    canvas_real_width = innerWidth;
    canvas_real_height = innerWidth / canvas_ratio;
    canvas_left = 0;
    canvas_top = (innerHeight - canvas_real_height) / 2;
  }
  
  /* Full height */
  else {
    canvas_real_width = innerHeight * canvas_ratio;
    canvas_real_height = innerHeight;
    canvas_left = (innerWidth - canvas_real_width) / 2;
    canvas_top = 0;
  }
  a.style.width = canvas_real_width + "px";
  a.style.height = canvas_real_height + "px";
  
  /* your resize/rotate code here: */
  log.value += "canvas " + ~~canvas_real_width + "*" + ~~canvas_real_height + " " + ~~canvas_left + " " + ~~canvas_top + "\n";
  log.scrollTop = log.scrollHeight;
  /* end */
};
