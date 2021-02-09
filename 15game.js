var rows=document.querySelectorAll("tr");
var table=document.querySelector("table");
var cells=document.querySelectorAll("td");
var timer=document.querySelector(".timer");
var action=document.querySelector(".action");
var reset=document.querySelector(".reset");
var side=document.querySelector("#side");
var sidebar=document.querySelector(".sidebar");

var numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,15,14];

//randomise the numbers
function random(){
numbers.sort((a, b) => 0.5 - Math.random());
fill();
Reset();
}
random();

//filling the numbers in cells
function fill(){
for(var i=1;i<16;i++){
    cells[i-1].innerHTML=null;
    n=document.createTextNode(numbers[i-1]);
    cells[i-1].appendChild(n);
    cells[i-1].id=i;
}
    cells[15].id=16;
    cells[15].innerHTML=null;
}
//making cells clickable
for(var i=0;i<16;i++){
    cells[i].addEventListener("click",function()
    {
        var value=this.innerHTML;
        var c=i;
        shift(value,this);
    })
}

//shifting the number
function shift(value,c){
    var ind;
    var s;
    cells.forEach(function(cell){
        if(!cell.innerHTML)
        {
        ind=cell.id;
        s=cell;
        }
    })
    var sub=Math.abs(c.id-ind)
    if(c.id%4!=0&&c.id%4!=1&&(sub==1||sub==4)){
        c.innerHTML=null;
        s.innerHTML=value;
    }
    else if(c.id%4==0&&ind-c.id!=1&&sub<=4&&sub!=3&&sub!=2){
         c.innerHTML=null;
        s.innerHTML=value;
    }
    else if(c.id%4==1&&ind-c.id!=-1&&sub<=4&&sub!=3&&sub!=2){
         c.innerHTML=null;
        s.innerHTML=value;
    }
    win();
}

//check for win
function win(){
        var c=0;
        for(var i=1;i<16;i++)
        {
            if(cells[i-1].innerHTML==i)
            c++;
        }
        if(c==15){
        cells[15].innerHTML=16;
        alert("You completed the puzzle in:"+timer.innerHTML);
        }
}

var set=null;
var now=0;
action.addEventListener("click",start);

//timer
function Timer(){
    now++;
    var time=now;
    var hrs=Math.floor(time/3600);
    time-=hrs*3600;
    var mins=Math.floor(time/60);
    time-=mins*60;
    var secs=time;

    if(hrs<10)
    hrs="0"+hrs;
    if(mins<10)
    mins="0"+mins;
    if(secs<10)
    secs="0"+secs;
    
    timer.innerHTML=hrs+":"+mins+":"+secs;
}
//timee stop
function stop(){
    action.value="Start";
    action.removeEventListener("click",stop);
    action.addEventListener("click",start);
    clearInterval(set);
}

//timer start
function start(){
    action.value="Stop";
    action.removeEventListener("click",start);
    action.addEventListener("click",stop);
    set=setInterval(Timer,1000);
}

//timer reset
function Reset(){
    if(set!=null)
    stop();
    now=-1;
    Timer();
}

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