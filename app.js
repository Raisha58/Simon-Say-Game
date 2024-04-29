let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

// keypress ---> starts the game (1st Step)
document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("Game is started");
    started = true;
  }
  //   Calling levelUp once the game has been started

  levelUp();
});

//  Step 2: creating flash in buttons
function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 200);
}
function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 250);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  //random btn choose
  let ranIdx = Math.floor(Math.random() * 3);
  let randColor = btns[ranIdx];
  let randbtn = document.querySelector(`.${randColor}`);
  // console.log(ranIdx);
  // console.log(randColor);
  // console.log(randbtn);
  gameSeq.push(randColor);
  console.log(gameSeq);
  gameFlash(randbtn);
}

function checkAns(idx) {
  // console.log("curr level :", level);

  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game Over! Your score was <b>${level}</b> </br></br>
    Press any key to start.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }
}
// step 2 --> adding event listeners
function btnPress() {
  let btn = this;
  userFlash(btn);

  userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  checkAns(userSeq.length - 1);
}
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
