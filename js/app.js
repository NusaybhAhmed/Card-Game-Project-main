
// HTML varible
var cards = document.querySelectorAll(".card");
const deck =document.getElementById("deck");
const timer =document.getElementById("timer");
const restart =document.getElementById("restart");
const heart =document.getElementById("heart").children;
const move=document.getElementById("moves");
const result =document.getElementById("result");
const Playagain=document.getElementById("b-Playagain");
// varibles
let moves=0;
let matchNo=0;
let q=[];
let time=0;
let torestarttime;
let timer_is_on = true;

//shuffleclos();


cards.forEach(item => {
    item.addEventListener('click',function (event)  {
      if(event.target !== event.currentTarget) console.log("child clicked") ;
     else cardmove(event)
    })
  });

function cardmove(event){

  
    if(!event.target.classList.contains("match")
    &&!event.target.classList.contains("open"))
    {
      if(q.length==0)
{    q.push(event.target);
    event.target.classList.add("open");
    
    console.log("t"+moves +"match "+matchNo);
}
else
{
  q.push(event.target);
 
  event.target.classList.add("open");
 if(q[0].type === q[1].type)
{q[0].classList.add("match");
 q[1].classList.add("match");
  matchNo++;
  moveCounter();

}
else
{
 //ssetTimeout(() =>{ 
   
 setTimeout(function(){
  console.log("length"+q.length);
  q[1].classList.remove("open");
  q[0].classList.remove("open");
  moveCounter();
  }, 500);
  
//},1100);
 
    }


  }
}



  setTimeout(function()
  {
  if(matchNo==8){
   on();
  }
  }, 500); 
  }

  function moveCounter(){    
    moves++;    
    move.innerHTML = moves;
    q=[]; 
    heartNo();
}

  //timer

  deck.addEventListener('click',function(){
    if (timer_is_on) { startCount();}
  });  
  restart.addEventListener('click',function(){
    reset()
  });
  function startCount() {   
      timer_is_on = false;
      torestarttime=setInterval(() => {
        time++;
        timedCount(); }, 1000);    
  } 
function timedCount() {
const min=Math.floor(time/60);
const sec=time%60;
 if (sec<10) timer.innerHTML=min+':0'+sec;
 else timer.innerHTML=min+':'+sec;}
  function stopCount() {
    clearTimeout( torestarttime);
    time=0;
    timedCount();
    timer_is_on = true;
  }
  function shuffleclos() {
    for (var i = deck.children.length; i >= 0; i--) {
      deck.appendChild(deck.children[Math.random() * i | 0]);
    }
   
    cards.forEach(item => {
     
    const classes = ["open","match"];
    classes.forEach(c => {
      if (item.classList.contains(c)) {
        item.classList.remove(c);
      }
    })
    })
  }
//heart
function heartNo(){
if(moves==8&&matchNo<8){
  heart[0].style.visibility = "collapse";
}
if(moves==16&&matchNo<8){
  heart[1].style.visibility = "collapse";
}
if(moves==24&&matchNo<8){
  heart[2].style.visibility = "collapse";
  reset();
}

}
function on() {   
 result.innerText="You made  "+moves+" moves.  "+"in "+timer.innerHTML;
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

  Playagain.addEventListener('click', event => {
    console.log("start");
    off();
    reset();
  });


  function reset(){
    stopCount();
    shuffleclos();
    q=[];
    hit=0;
    moves=0;
    move.innerHTML = moves;
    for (var i= 0; i < heart.length; i++){ 
      heart[i].style.visibility = "visible";
  }
  }
