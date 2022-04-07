let grid = [
    [1,1,2]
    [0,2,1]
    [2,0,1]
]
let filteredGrid = []
let players = ['none','X','O']
for(i=0;i<2;i++){
    for(x=0;x<3;x++){
        filteredGrid = []
        filteredGrid[0] = grid[x].filter(square == i+1)
        if (filteredGrid[0].length == 3){
            console.log(players[i+1]+ ' Wins!')
            break
        }
        filteredGrid = []
        for(y=0;y<3;y++){
            filteredGrid[0] = grid[y][x].filter(square==i+1)
            if (filteredGrid[0].length == 3){
                console.log(players[i+1]+ ' Wins!')
                break
            }else if (i==1){
                console.log ('Nobody Won')
            }
        }
    }
}

