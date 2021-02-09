var cells=document.querySelectorAll("td");
var side=document.querySelector("#side");
var sidebar=document.querySelector(".sidebar");
var s1=document.querySelector(".score1");
var s2=document.querySelector(".score2");

var count=0;
var a=[1];

//making cells clickable
cells.forEach(function(cell){
   cell.addEventListener("click",function(){
       if(!cell.innerHTML){
       if(count%2==0)
       {
       cell.innerHTML="O";
       cell.style.color="red";
       }
       else
       {
       cell.innerHTML="X";
       cell.style.color="grey";
       }
       count++;
       win();
       }
   });
});

//manage scoreboard
if(!localStorage.score1)
localStorage.score1=0;
if(!localStorage.score2)
localStorage.score2=0;
s1.innerHTML=localStorage.score1;
s2.innerHTML=localStorage.score2;

//check winner
function win(){
    for(var i=0;i<9;i++)
    a[i+1]=cells[i].innerHTML;
var c=0;
    if (a[1] == a[2] &&a[2] == a[3]&&a[1]!="")
        c=1;
    else if (a[4] == a[5] && a[5] == a[6]&&a[4]!="")
        c=2;
    else if (a[7] == a[8] &&a[8] ==a[9]&&a[7]!="")
        c=3;
    else if (a[1] == a[4] && a[4] == a[7]&&a[1]!="")
        c=4;
    else if (a[2] == a[5] &&a[5] == a[8]&&a[2]!="")
        c=5;
    else if (a[3] ==a[6] &&a[6] == a[9]&&a[3]!="")
        c=6;
    else if (a[1] == a[5] && a[5] == a[9]&&a[1]!="")
        c=7;
    else if (a[3] == a[5] &&a[5] == a[7]&&a[3]!="")
        c=8;
	else if(count==9)
	{
	alert("    ----DRAW----");
	}
    if(c&&count%2!=0)
    {
	alert("\n    ----Player One Won----");
	localStorage.score1++;
    }
	else if(c&&count%2==0)
	{
	alert("\n    ----Player Two Won----");
	localStorage.score2++;
	}
	if(localStorage)
    s1.innerHTML=localStorage.score1;
    s2.innerHTML=localStorage.score2;
}

//clear
function Clear(){
    cells.forEach(function(cell){
        cell.innerHTML=null;
    });
    count=0;
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