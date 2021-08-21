var arr;
var val;
var sumX=0;
var sumY=0;
var sum=1;
var X_counting=[];
var O_counting=[];
var count=0;
var draw=0;
var c=0;
var t=[0,0,0,0,0,0,0,0,0];
var comp=[["1","2","3"],["1","4","7"],["2","5","8",""],["3","6","9"],["4","5","6"],["7","8","9"],["1","5","9"],["3","5","7"]];
var wining_box=[15,6,24,12,16];
if(arr==undefined){
    document.getElementById('result').innerHTML="X";
}
function func1(){
    t[0]=1;
    count++;
    choice();
    document.getElementById("fun1").innerHTML=arr;
    document.getElementById("fun1").disabled=true;
    counting(1);
    document.getElementById('fun1').classList.add('color1');
}
function func2(){
    t[1]=1;
    choice();
    count++;
    document.getElementById("fun2").innerHTML=arr;
    document.getElementById("fun2").disabled=true;
    counting(2);
    document.getElementById('fun2').classList.add('color1');
}
function func3(){
    t[2]=1;
    choice();
    count++;
    document.getElementById("fun3").innerHTML=arr;
    document.getElementById("fun3").disabled=true;
    counting(3);
    document.getElementById('fun3').classList.add('color1');
}
function func4(){
    t[3]=1;
    count++;
    choice();
    document.getElementById("fun4").innerHTML=arr;
    document.getElementById("fun4").disabled=true;
    counting(4);
    document.getElementById('fun4').classList.add('color1');
}
function func5(){
    t[4]=1;
    count++;
    choice();
    document.getElementById("fun5").innerHTML=arr;
    document.getElementById("fun5").disabled=true;
    counting(5);
    document.getElementById('fun5').classList.add('color1');
    
}
function func6(){
    t[5]=1;
    count++;
    choice();
    document.getElementById("fun6").innerHTML=arr;
    document.getElementById("fun6").disabled=true;
    counting(6);
    document.getElementById('fun6').classList.add('color1');
}
function func7(){
    t[6]=1;
    count++;
    choice();
    document.getElementById("fun7").innerHTML=arr;
    document.getElementById("fun7").disabled=true;
    counting(7);
    document.getElementById('fun7').classList.add('color1');
}
function func8(){
    t[7]=1;
    count++;
    choice();
    document.getElementById("fun8").innerHTML=arr;
    document.getElementById("fun8").disabled=true;
    counting(8);
    document.getElementById('fun8').classList.add('color1');
}
function func9(){
    t[8]=1;
    count++;
    choice();
    document.getElementById("fun9").innerHTML=arr;
    document.getElementById("fun9").disabled=true;
    counting(9);
    document.getElementById('fun9').classList.add('color1');
}


function reset(){
    X_counting=[];
    O_counting=[];
    arr=undefined;
    t=[0,0,0,0,0,0,0,0,0];
    count=0;
    draw=0,c=0;
    sumX=0;
    sumY=0;
    draw=0;
    sum=1;
    document.getElementById('result').innerHTML="X Turn";
    document.getElementById('fun1').innerHTML="";
    document.getElementById('fun2').innerHTML="";
    document.getElementById('fun3').innerHTML="";
    document.getElementById('fun4').innerHTML="";
    document.getElementById('fun5').innerHTML="";
    document.getElementById('fun6').innerHTML="";
    document.getElementById('fun7').innerHTML="";
    document.getElementById('fun8').innerHTML="";
    document.getElementById('fun9').innerHTML="";
    document.getElementById("fun1").disabled=false;
    document.getElementById("fun2").disabled=false;
    document.getElementById("fun3").disabled=false;
    document.getElementById("fun4").disabled=false;
    document.getElementById("fun5").disabled=false;
    document.getElementById("fun6").disabled=false;
    document.getElementById("fun7").disabled=false;
    document.getElementById("fun8").disabled=false;
    document.getElementById("fun9").disabled=false;
    for(i=0;i<9;i++){
        if(document.getElementById('fun'+(i+1)).classList.contains("color1")){
            document.getElementById('fun'+(i+1)).classList.remove('color1');
        }
    }
}
function res(){
    alert("Player "+arr+" wins");
    document.getElementById('result').innerHTML="Player"+arr+" wins";
    X_counting=[];
    O_counting=[];
    arr=undefined;
    for(i=0;i<9;i++){
        if(t[i]==0){
            document.getElementById("fun"+(i+1)).disabled=true;
        }
    }
}


function choice(){
    if(arr=="X"){
        document.getElementById('result').innerHTML="X Turn";
    }
    else{
        document.getElementById('result').innerHTML="O Turn";
    }
      if(arr===undefined || arr==="X" || arr==="O"){
          if(arr==undefined){
              arr="X";
          }
          else if(arr=="X"){
              arr="O";
          }
          else{
            arr="X";
          }
      }
}
function counting(num){
    if(arr==="X"){
        X_counting.push(num.toString());
        winning_function();
    }
    else if(arr==='O'){
        O_counting.push(num.toString());
        winning_function();
    }
    if(count===9){
        if(draw==0){
            alert("match draw");
        }
    }
}
function winning_function(){
    if(arr==='X'){
       
        for(i=0;i<comp.length;i++){
            
            for(j=0;j<3;j++){
                any=0;
                for(k=0;k<X_counting.length;k++){
                    if(comp[i][j]==X_counting[k]){
                        sumX=sumX+sum;
                        any=1;
                        break;
                    }
                }
                if(any==1){
                    continue;
                }
            }
            if(sumX===3){
                if(count===9){
                    draw=1;
                }
                else{draw=0;}
                res();
            }
            else{
                sumX=0;
            }
        }
    }
    else if(arr=='O'){
        for(i=0;i<comp.length;i++){
            
            for(j=0;j<3;j++){
                any=0;
                for(k=0;k<O_counting.length;k++){
                    if(comp[i][j]==O_counting[k]){
                        sumY=sumY+sum;
                        any=1;
                        break;
                    }
                }
                if(any==1){
                    continue;
                }
            }
            if(sumY===3){
                if(count===9){
                    draw=1;
                }
                else{draw=0;}
                res();s();
            }
            else{
                sumY=0;
            }
        }
    }
}

   