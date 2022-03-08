//link variable "dvDoubler" to div "doubler"
let dvDoubler = document.getElementById("doubler")
//initialize it with a value of 2
dvDoubler.innerHTML = 2
//When the div is clicked it doubles the value until it is above 30 then on the next click the value is reset to 2
function double(){
    if(dvDoubler.innerHTML < 30){
        dvDoubler.innerHTML *= 2
    }else dvDoubler.innerHTML = 2
    
}