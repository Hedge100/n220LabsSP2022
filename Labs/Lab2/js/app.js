/*let message = 'Hello World'
function draw(){
    createCanvas(800,800)
    let x = 50
    let y = 50
    x += 50
    y *= 3
    message += 'd'
    console.log(x,y,message)
    text(message,x,y)
}
*/
function draw(){
    createCanvas(400,400)
    //get position of mouse
    //let x = mouseX
    //let y = mouseY
    //mirror it about the x and y axis
    //x = 400-x
    //y = 400-y
    //color it orange
    fill ('orange')
    //create circle at that position
    circle(400 - mouseX, 400 - mouseY, 10)
    
}
