let h3 = document.querySelector("h3");

let gameSeq = [];
let userSeq = [];

let btns = ["blue", "red", "green", "orange"];

let gameSt = false;
let level = 0;
let heighScore = 0;

document.addEventListener("keypress", startGame);

function startGame() {
    if (gameSt == false) {
        console.log("game is started");
        gameSt = true;
        levelUp();
    }
}

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 100);
}

function levelUp() {
    userSeq = [];

    level++;
    h3.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);

    btnFlash(randBtn);
}

function checkAns(idx) {
    
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp,1000);
        }
    } else {
        checkHeighScore();
        h3.innerHTML = `Game Over! your score was ${level} press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "rgb(40, 40, 40)";
        }, 150);
        reset();
    }
}

function btnPress() {
    let btn = this;
    btnFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click",btnPress);
}

function checkHeighScore() {
    if (level > heighScore) {
        heighScore = level;
        console.log(heighScore);
        hScore.innerText = `Heigh Score: ${heighScore}`;
    }
}

let hScore = document.querySelector(".heighScore");

function reset() {
    gameSt = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}