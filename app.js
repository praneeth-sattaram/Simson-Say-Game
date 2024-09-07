let gameseq=[];
let userseq=[];
let clr=['red','green','yellow','blue'];

let startGame=false;
let level=0;

document.addEventListener("keypress",function(){
    if(startGame==false){
        console.log("game started");
        startGame=true;

        levelUp();
    }
});

let h3=document.querySelector("h3");

function gameflash(btn){
  
    btn.classList.add("flash");
    setTimeout(function(){
    btn.classList.remove("flash")
    },250)

}
function userflash(btn){
  
    btn.classList.add("userflash");
    setTimeout(function(){
    btn.classList.remove("userflash")
    },250)

}

function levelUp(){
    userseq=[];
    level++;
    h3.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let randclr=clr[randIdx];
    let btn=document.querySelector(`.${randclr}`);
    // console.log(randIdx);
    // console.log(randclr);
    // console.log(btn);
    gameseq.push(clr[randIdx]);
    console.log(gameseq);
    gameflash(btn);
}
// let body=document.querySelector("body");
function checkAns(idx){

    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
          setTimeout(levelUp(),1000);
        }
    }else{
        h3.innerHTML=`<i >Game Over!,Your Score was: <b style="color:blue">${level}<b> <br>Press any key to Restart <br><i>`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";  
        },550);
        highscore(level);
       reset();
    }
}

function btnpress(){
console.log("button pressed");
let btn=this;

userflash(btn);

let userclr=btn.getAttribute('id');
userseq.push(userclr);
console.log(userseq);
checkAns(userseq.length-1);
}
let allbtns=document.querySelectorAll('.btn');
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    startGame=false;
    gameseq=[];
    userseq=[];
    level=0;
}
let hscore=0;
function highscore(level){
if(hscore<=level){
    hscore=level;
    // i=hscore;
    h3.append(` Your Highscore: ${hscore}`);
}else{
    h3.append(` Your Highscore: ${hscore}`);
    // i=hscore;
}
}