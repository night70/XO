function Xfun(id) {
    let tmp = document.getElementById(id).innerHTML;
    if(tmp=="" && tmp!="O"){
        document.getElementById(id).innerHTML = "X";
        Ofun();
        judge();
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

    // console.log(tdid);
}
function judge(){
    let allCube = document.getElementsByTagName("td");
    
}