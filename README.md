## responsiveTouchGameFramework

A tiny boilerplate for HTML5 games featuring a square, centered and responsive canvas, and unified input (mouse + touch)

**Demo:**

- Clean: http://xem.github.io/responsiveTouchGameFramework (debug info)
- Light: http://xem.github.io/responsiveTouchGameFramework/mini.html (minified, no debug info)

**Features:**

- ~512 bytes gzipped
- HTML boilerplate (doctype, meta charset UTF-8, title, canvas, script, style)
- Square canvas (1000 * 1000 px), always centered and adjusted to the screen, even when the screen is resized / rotated. (see variables ````canvas_size````, ````canvas_left```` and ````canvas_top````; the canvas id is ````a````)
- Click and touch events update the variables ````click_x````, ````click_y````, ````down_x````, ````down_y````, ````move_x````, ````move_y````, ````up_x```` and ````up_y```` with values between 0 and 1000.
- To handle your own mouse/touch inputs, just add your code at the end of these functions:
  - ````a.onclick=e=>{ ... }````
  - ````a.onmousedown=ontouchstart=e=>{ ... }````
  - ````a.onmousemove=ontouchmove=e=>{ ... }````
  - ````a.onmouseup=ontouchend=e=>{ ... }````