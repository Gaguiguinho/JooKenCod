// CONTAGEM DE PONTOS

var contUser = 0;
var contPc = 0;

// ELEMENTOS DA APLICAÇÃO

const imgUser = document.getElementById("user");
const imgPc = document.getElementById("pc");
const playing = document.getElementById("playing");
const contador = document.getElementById("placar");
const winner = document.getElementById("you-win");
const loser = document.getElementById("you-loose");
const again = document.getElementById("you-loose-again");
const againTwo = document.getElementById("you-loose-again-two");
// SONS

const songWin = new Audio("sounds/victory-sound.mp3");
const songLoose = new Audio("sounds/game-over-sound.mp3");
const gameSong = new Audio("sounds/electro.mp3");
const clickSong = new Audio("sounds/click-sound.mp3");
const pointSong = new Audio("sounds/point-sound.mp3");


// VARIAVEIS DE ELEMENTOS

var player1 = "";
var player2 = "";

playing.addEventListener("click", () => {
    clickSong.play();
    reset();
    playPc();
})

function reset() {
    player1 = document.querySelector('input[name="play"]:checked').value
    imgUser.innerHTML = "<img src= assets/" + player1 + ".png>";
    imgPc.innerHTML = "";
}

function playPc() {
    let opt = ['pedra', 'papel', 'tesoura'];
    let num = Math.floor(Math.random() * (2 - 0 + 1) + 0);
    player2 = opt[num];
    imgPc.innerHTML = "<img src= 'assets/" + player2 + ".png'>";
    análise();
}

function análise() {
    playing.disabled = true;
    let win = "0";

    // 0 = empate
    // 1 = vitória
    // -1 = derrota

    if (player1 == player2){

    } else if (player1 == "pedra"){
        win = player2 == 'tesoura' ? 1 : -1
    } else if (player1 == 'papel') {
        win = player2 == 'pedra' ? 1 : -1
    } else if(player1 == 'tesoura') {
        win = player2 == 'papel' ? 1 : -1
    } 

    if(win == 0){

    } else if(win > 0){
        contUser = contUser + 1
        pointSong.play();
    } else {
        contPc = contPc + 1
        pointSong.play();
    }
    
    contador.innerHTML = contUser + ":" + contPc;
  
    if (contUser >= 3){
        document.getElementById('game').style.display = 'none';
        winner.style.display = 'block';
        gameSong.pause();
        songWin.play();
    }

    if (contPc >= 3){
        document.getElementById('game').style.display = 'none';
        loser.style.display = 'block';
        gameSong.pause();
        songLoose.play();
    
    }

    setTimeout(()=>{
        playing.disabled= false
        clear();
    },2000)

}

function clear(){
    imgPc.innerHTML="";
    imgUser.innerHTML = "";
}

again.addEventListener('click', (event) => {
    event.preventDefault();
    location.reload();
});

againTwo.addEventListener('click', (event) => {
    event.preventDefault();
    location.reload();
});