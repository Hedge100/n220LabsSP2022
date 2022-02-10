function setup(){
    createCanvas(windowWidth,windowHeight-10)
}
let tvPower = {power:"on",color:"blue"}
let tv = {width:120,height:90,xPosition:200,yPosition:300
}
function draw(){
    //frame
    fill("gray")
    rect(tv.xPosition-tv.width*.05,tv.yPosition-tv.height*.05,tv.width*1.1,tv.height*1.1)

    //image
    if(tvPower.power=="on"){
        fill(tvPower.color)
    } else{
        ("Black")
    }

    //screen
    rect(tv.xPosition,tv.yPosition,tv.width,tv.height)
    
    //antenna
    line(tv.xPosition + tv.width*.5,tv.yPosition-tv.height*.05,(tv.xPosition-tv.width*.05)+tv.width*.5 +30,tv.yPosition-tv.height*.05 - 45)
}
