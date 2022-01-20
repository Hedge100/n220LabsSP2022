//seting up the canvas and printing the state of variable size
function setup() {
    createCanvas(800, 600);
    console.log(size)
}
//creating the size variable which says how large the circle will be
var size = 5;
//sends the value of size to the console then makes a circle follow the cursor with size 5 and growing by one pixel for each tick while the mouse button is held capping at 50.
function draw() {
    background(255,255,255)
    console.log(size)
    if (size<50){
        if (mouseIsPressed){
            size = size + 1
        };
    }
    circle(mouseX, mouseY, size);
}