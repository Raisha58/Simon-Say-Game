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
function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 200);
}

function levelUp() {
  level++;
  h2.innerText = `Level ${level}`;

  //random btn choose
  let ranIdx = Math.floor(Math.random() * 3);
  let randColor = btns[ranIdx];
  let randbtn = document.querySelector(`.${randColor}`);
  console.log(ranIdx);
  console.log(randColor);
  console.log(randbtn);
  btnFlash(randbtn);
}
