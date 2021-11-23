
// varible
var cards = document.querySelectorAll(".card");
const deck =document.getElementById("deck");
const timer =document.getElementById("timer");
const restart =document.getElementById("restart");
const heart=document.getElementById("heart");
const move=document.getElementById("moves");





// event listeners


  cards.forEach(item => {
    item.addEventListener('click',function (event)  {
      if(event.target !== event.currentTarget) console.log("child clicked") ;
     else event.target.classList.toggle("open");
    })
  });

  //move
let moves=0;
  function moveCounter(){    
    moves++;    
    move.innerHTML = moves;
}

  //timer
let time=0;
let torestarttime;
let timer_is_on = true;
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

  function reset(){
    stopCount();
    shuffleclos();
   
    moves=0;
    move.innerHTML = moves;
  }
