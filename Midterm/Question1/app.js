//link dvKonami to the div "konami" in the index file
let dvKonami = document.getElementById("konami")
//Create the array of the konami code
let konamiList = ["circle", "circle", "dot", "dot", "b", "a", "start"]
//Loop through the array and add the array index followed by a colon and the indexed string. each time through the loop it is added to the end of the previous entries.
for(i=0;i<konamiList.length;i++){
    dvKonami.innerHTML += i + ": " + konamiList[i] + " "
}