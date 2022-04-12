let grid = [
    [1,1,0],
    [1,2,1],
    [1,0,1]
]
let filteredGrid = []
let players = ['none','X','O']
let winnerFound = false
for(i=0;i<2;i++){
    //horizonatal win check
    for(x=0;x<3;x++){
        filteredGrid = []
        filteredGrid[0] = grid[x].filter(function(square){return square == i+1})
        if (filteredGrid[0].length == 3){
            console.log(players[i+1]+ ' Wins!')
            winnerFound = true
            break
        }
        //vertical win check
        filteredGrid = []
        for(y=0;y<3;y++){
            filteredGrid[0] = grid.filter(function(row){return row[x]==i+1})
            console.log(filteredGrid[0])
            if (filteredGrid[0].length == 3){
                console.log(players[i+1]+ ' Wins!')
                winnerFound = true
                break
            }
            
        }
        if(winnerFound){
            break
        }
    }
    if(winnerFound){
        break
    }
}


if (!winnerFound){
    console.log("Nobody Won!")
}