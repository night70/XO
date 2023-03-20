function Xfun(id) {
    let tmp = document.getElementById(id).innerHTML;
    if(tmp=="" && tmp!="O"){
        document.getElementById(id).innerHTML = "X";
        Ofun();
        
        
    }
}
function Ofun(){
    let arr = document.getElementsByTagName("td");
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
        clearTheTable();
    }
    else if(cubeArr.length==0){
        alert("the game is draw!")
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
    let allCube = document.getElementsByTagName("td");
    // return allCube[0].innerText ;
    for (const way of correctPattern) {
        if(allCube[way[0]].innerText==allCube[way[1]].innerText && 
            allCube[way[1]].innerText==allCube[way[2]].innerText &&
            allCube[way[0]].innerText!="")
            return allCube[way[0]].innerText;
    }
}
function clearTheTable(){
    let cleaner = document.getElementsByTagName('td');
    for (const iterator of cleaner) {
        iterator.innerText = "";
    }
}