## responsiveTouchGameFramework v2

A tiny boilerplate for HTML5 games featuring a responsive, centered, fixed-ratio canvas, and unified pointer events (mouse + touch).

**Demo:**

http://xem.github.io/responsiveTouchGameFramework

**How to use:**

- Clone this repo
- Edit the page title and global CSS (index.html)
- Set your canvas size  (ex: 480 x 270) and game variables in init.js
- Write your game's code in the render loop (render.js) - the demo draws a square movable with the mouse/finger.
- At any moment you have access to the  variables ````click_x````, ````click_y````, ````down_x````, ````down_y````, ````move_x````, ````move_y````, ````up_x```` and ````up_y```` (adapted to your canvas dimensions), and ````pointer_down```` (to tell if the mouse/finger is currently down)
- Log stuff on screen using the ````log()```` function