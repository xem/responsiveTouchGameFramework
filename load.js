/* Load */
onload = e => {
  logz.value = "";
  a.width = canvas_width;
  a.height = canvas_height;
  c = a.getContext("2d");
  canvas_ratio = canvas_width / canvas_height;
  onresize();
  setInterval(render, 16);
}