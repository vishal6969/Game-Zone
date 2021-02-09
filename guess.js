var check=document.querySelector(".check");
var number=document.querySelector(".inputs");
var result=document.querySelector(".guess");
var side=document.querySelector("#side");
var sidebar=document.querySelector(".sidebar");
var turns=document.querySelector(".turn");
var levels=document.querySelector(".levels");
var range=document.querySelector(".ranges");
var extra=document.querySelector(".extra");
var max=document.querySelector(".max");
var moves=document.querySelector(".moves");

var tCount=0;
var level=0;
var Turn=[3,5,7];
var Limit=[10,50,125];
var turn;
var limit;
var num;

//setting the values
function Set(){
    turn=Turn[level];
    limit=Limit[level];
    num=Math.round(limit*Math.random());
    result.innerHTML=null;
    range.innerHTML="("+0+"-"+limit+")";
     number.value=null;
}
Set();

//setting turns and level
function turnLevel(){
     turns.innerHTML=turn-tCount;
    levels.innerHTML=level;
    number.value=null;
}
turnLevel();
//check
check.addEventListener("click",function(){
    console.log(num+" "+level);
   if(number.value<num)
   result.innerHTML="smaller";
   else if(number.value==num){
       if(level+1<Limit.length){
       if(confirm("Play next level?"))
       level++;
       }
       else{
           if(confirm("You want to add more levels?"))
           Extra();
       }
       tCount=0;
        Set();
        tCount=-1;
   }
   else
   result.innerHTML="greater";
   
   tCount++;
   if(tCount==turn){
       alert("Try again!!");
       tCount=0;
        Set();
   } 
   turnLevel();
});

//sidebar
side.addEventListener("click",Side);
function Side(){
    side.innerHTML="<";
    sidebar.style.width="300px";
    side.removeEventListener("click",Side);
    side.addEventListener("click",Collapse);
}
function Collapse(){
    side.innerHTML=">";
    sidebar.style.width="0px";
    side.removeEventListener("click",Collapse);
    side.addEventListener("click",Side);
}

//extra level
function Extra(){
    extra.style.height="250px";
}

//create
function Create(){
    if(max.value&&moves.value){
    Limit.push(max.value);
    Turn.push(moves.value);
    level++;
    Set();
    turnLevel();
    }
    extra.style.height="0px";
}