## responsiveTouchGameFramework

A tiny boilerplate for HTML5 games featuring a responsive, centered, fixed-ratio canvas, and unified pointer events (mouse + touch).

**Demo:**

http://xem.github.io/responsiveTouchGameFramework

**How to use:**

- Clone this repo
- Edit the page title and global CSS (index.html)
- Set your canvas size in init.js (ex: 480 x 270)
- Write your game's code in the render loop (load.js) - the demo draws a grid of black squares
- Write your events code in mouse/touch event listeners (mouse.js) and resize listeners (resize.js) - the demo logs the events on screen.
- At any moment you have access to the  variables ````click_x````, ````click_y````, ````down_x````, ````down_y````, ````move_x````, ````move_y````, ````up_x```` and ````up_y```` (adapted to your canvas dimensions), and ````down```` (to tell if the mouse/finger is currently down)
