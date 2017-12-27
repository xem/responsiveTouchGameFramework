/* Load */
onload = e => {
  a.width = canvas_width;
  a.height = canvas_height;
  c = a.getContext("2d");
  canvas_ratio = canvas_width / canvas_height;
  onresize();
  
  /* your onload code here */
  i.value += "load \n";
  i.scrollTop = i.scrollHeight;
  /* end */
  
  setInterval(render, 33);
}

/* Render */
render = e => {
  
  // Reset
  a.width = a.width;
  
  // Grid
  for(i = 0; i < canvas_width; i+= 40){
    
    for(j = 0; j < canvas_height; j+= 40){
     
      c.fillRect(i+5, j+5, 30, 30);
      
    }
  }
}