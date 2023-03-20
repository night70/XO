function Xfun(id) {
    let tmp = document.getElementById(id).innerHTML;
    if(tmp=="" && tmp!="O"){
        document.getElementById(id).innerHTML = "X";
        Ofun();
        
        
    }
}
function Ofun(){
    let arr = document.getElementsByClassName("tic");
    let cubeArr = [];
    for (let tag of arr) {
        if(tag.innerText!="X" && tag.innerText!="O"){
            cubeArr.push(tag.getAttribute('id'));
        }
    }
    let tdid = cubeArr[Math.floor(Math.random() * cubeArr.length)];
    if(tdid){
        document.getElementById(tdid).innerHTML = "O";
    }
    if(judge()){
        alert(`the ${judge()} player won`)
        // if(judge() == "X"){
        //     scoreBoard("win");
        // }
        // else scoreBoard("lose");
        clearTheTable();
    }
    else if(cubeArr.length==0){
        alert("the game is draw!")
        // scoreBoard();
        clearTheTable();
        return;
    }    
}
function judge(){
    let correctPattern = [
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [3,4,5],
        [6,7,8],
        [1,4,7],
        [2,5,8],
        [2,4,6],
    ];
    let allCube = document.getElementsByClassName("tic");
    // return allCube[0].innerText ;
    for (const way of correctPattern) {
        if(allCube[way[0]].innerText==allCube[way[1]].innerText && 
            allCube[way[1]].innerText==allCube[way[2]].innerText &&
            allCube[way[0]].innerText!="")
            return allCube[way[0]].innerText;
    }
}
function clearTheTable(){
    let cleaner = document.getElementsByClassName('tic');
    for (const iterator of cleaner) {
        iterator.innerText = "";
    }
}
let gameRound = 0;
function scoreBoard(status){
    let gameRoundCell = document.getElementsById("gameRound");
    let myScoreCell = document.getElementsById("myScore");
    let computerScoreCell = document.getElementsById("computerScore");
    gameRoundCell = gameRound++;
    switch (status) {
        case "win":
            myScoreCell.innerHTML = "1"
            break;
        case "lose":
            computerScoreCell.innerHTML = "1"
            break;
        default:
            myScoreCell.innerHTML = "-";
            computerScoreCell.innerHTML = "-";
            break;
    }
    return
}