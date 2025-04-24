let gameSeq = [];
let userSeq = [];
let btns = ["red", "yellow", "blue", "purple"];
let started = false;
let h2 = document.querySelector("h2");
let level = 0;
document.addEventListener("keypress", function () {
  if (started === false) {
    started = true;
    console.log("Game started");
    levelUp();
  }
});
function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {btn.classList.remove("flash")}, 450);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {btn.classList.remove("userflash")}, 100);
  }
function levelUp() {
    userSeq=[];
  level++;
  h2.innerText = `Level ${level}`;
  let randIdx = Math.floor(Math.random(btns) * 3+1);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  console.log(`Gme`)
  console.log(gameSeq);
  console.log(randIdx);
  console.log(randColor);
  btnFlash(randBtn);
}
function check(idx) {
    if (userSeq[idx] === gameSeq[idx]) { // Check if the current input matches
      if (userSeq.length === gameSeq.length) { // Check if the sequence is complete
       setTimeout(levelUp(),2000);
      }
    } else { // If the input does not match
      h2.innerHTML = `Game Over!!Your score was <b>${level}</b> <br> Press any key to start`; // Display game over message
      let a=document.querySelector('body');
      a.style.backgroundColor="red";
      setTimeout(function(){
        a.style.backgroundColor="rgb(40, 37, 41)";
      },100)
     reset(); // Reset the started state to allow restarting
    }
  }

function btnPress()
{
    let btn=this;
    userFlash(btn);
    let color=btn.getAttribute("id");
    console.log(color);
    userSeq.push(color);
    check(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns)
    {
        btn.addEventListener("click",btnPress);
    }
function reset()
{
    started=false;
    userSeq=[];
    gameSeq=[];
    level=0;

}