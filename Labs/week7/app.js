/*
function overTwenty(array){
    let count = 0
    for(i=0;i<array.length;i++){
        if(array[i]>20){
            count++
        }
    }
    if (count<3){
        return count
    }else{
        return -1
    }
}
let nestArray = [ [ 22, 33, 44, 55], [21, 1,2,3,4 ], [ 8, 2, 4, 10 ], [ 22,22,22,22 ] ]

for (x = 0 ; x < nestArray.length ; x++){
    console.log(overTwenty(nestArray[x]))
}
*/
let ages = [];
let buButton = document.getElementById("button")
let buReset = document.getElementById("reset")
let buAdd = document.getElementById("add")

for(let i = 0; i < 20; i++) {
  ages.push( Math.floor(Math.random() * 50))
}
console.log(ages)

//log out the contents of ages.. what is in it?
//

//When a button is pressed
function grimReaper(){
    // loop through the ages
    for (i=0;i<ages.length;i++){
        //add one to age
        ages[i]++

        if(ages[i]>55){
            if(Math.random()>=.55){
                ages.splice(i,1);
            }
        }
    }
    //if their age is greater than 55
          // on a 50% chance
          // remove them from the array

                  //(Lookup javascript array splice)
    console.log(ages)
}
//When a different button is pressed
   // clear out old data in the div
    // write the content of the array to the screen
function reset(){
    ages.splice(0,ages.length)
    for(let i = 0; i < 20; i++) {
        ages.push( Math.floor(Math.random() * 50))
      }
    console.log(ages)
}
function add(){
    ages.push( Math.floor(Math.random() * 50))
    console.log(ages)
}   


//when a  third button is pressed

  // add a new age between 1 and 50

