
for(i=0;i<10;i++){
    console.log(i+1)
}

for(i=10;i>0;i--){
    console.log(i)
}

let fibonacci = Array()
for(i=0;i<20;i++){
    if(i === 0){

        fibonacci[i] = 0
    } else if(i === 1){

        fibonacci[i] = 1
    }else{
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]
    }
    console.log(i + ":" + fibonacci[i])
}

let revWords=[]
let words = ["Indiana","University","Purdue","University","Indianapolis"]
for(i=0;i<words.length;i++){
    revWords[i] = words[words.length-i-1]
}
console.log(revWords)

for(i=0;i<words.length;i++){
    words[i]=words[i].toUpperCase()
}
console.log(words)

let cheer = ""
words = ["Indiana","University","Purdue","University","Indianapolis"]
for(i=0;i<words.length;i++){
    cheer += words[i] + "! Yeah! "
}
console.log(cheer)


