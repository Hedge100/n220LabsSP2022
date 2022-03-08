let inWord = document.getElementById("word")
let dvOutput = document.getElementById("output")

function timesThree(){
    dvOutput.innerHTML = ""
    for(i=0;i<3;i++){
        dvOutput.innerHTML += inWord.value + " "
    } 
}
