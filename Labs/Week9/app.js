let inWord = document.getElementById("word")
let dvOutput = document.getElementById("output")
//This function takes the value in the word input and removes the vowels then outputs it back to the screen
function removeVowels(){
    let word = inWord.value
    //resets output when function is run
    let output = ""
    //loops through word and checks if it is a vowel. if not then it adds it to the output string
    for (i=0;i<word.length;i++){
        if (word[i] != "a" && word[i] != "e" && word[i] != "i" && word[i]!="o" && word[i]!="u"){
            output +=word[i]
        }
    }
    //sends output to the screen
    dvOutput.innerHTML = output
}