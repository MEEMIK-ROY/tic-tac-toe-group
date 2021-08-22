let count = true;
const mat = [0,1,2,3,4,5,6,7,8];
const winState = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]   
           ]
let gamestateX = [];
let gamestateO = [];

let x_turn = document.getElementById('xturn');
let o_turn = document.getElementById('oturn');
function turn(a){
    var btn = document.getElementById(a)
    if (count === true){
        btn.innerHTML = "X";
        btn.value = 1;
        btn.disabled = true;
        x_turn.disabled = true;
        o_turn.disabled = false;
        gamestateX.push(parseInt(a));
    }
    else {
        btn.innerHTML = "O";
        btn.value = 0
        btn.disabled = true;
        x_turn.disabled = false;
        o_turn.disabled = true;
        gamestateO.push(parseInt(a));
    } 
    let winner = checkwin(count);
    let draw = checkdraw(gamestateX,gamestateO);
    dispres(winner,draw);
    count = !count
}

function checkwin(c){
    if (c === true){
        for(let i=0; i<8; i++){
            var checkstate = winState[i];
            let result = checkstate.every(val => gamestateX.includes(val));
            if (result){
                terminate();
                return "X";
            }
        }
    }
    else{
        for(let i=0; i<8; i++){
            var checkstate = winState[i];
            let result = checkstate.every(val => gamestateO.includes(val));
            if (result){
                terminate();
                return "O";
            }
        }
    }
}

function checkdraw(a,b){
    let c = [...a, ...b];
    c.sort();
    if (JSON.stringify(c) == JSON.stringify(mat)){
        terminate();
        return "D";
    }
    else{
        return 0;
    }
}

function dispres(w,d){
    let res = document.getElementById('result');
    if (w === "X"){
        res.value = "Player X Wins";
    }
    else if(w === "O"){
        res.value = "Player O wins" ;
    }
    else if (d === "D"){
        res.value = "Game ends in a draw";
    }
}

function terminate(){
    for (let i =0; i<9; i++){

        let but = document.getElementById(`${i}`);
        but.disabled = true;
    }
    console.log("terminate ok")
}

function reset(){
    let f = getElementById('form1');
    f.reset();
}
