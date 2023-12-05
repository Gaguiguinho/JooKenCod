
document.addEventListener('DOMContentLoaded', function() {
    const clickSong = document.getElementById('click-song');
    const avancarLink = document.getElementById('avançar');
    const comoJogarDiv = document.querySelector('.como-jogar');
    const comoJogarTitulo = document.querySelector('.como-jogar-titulo');
    const joKenCodContainer = document.querySelector('.jo-ken-cod-cointainer');
    const tutorialContainer = document.querySelector('.tutorial');

    avancarLink.addEventListener('click', function() {
        document.getElementById('jogar').style.display = 'block';
        clickSong.play();
        document.querySelector('.ler-mais').style.display = 'none';
        document.querySelector('.titulo-introducao').style.display = 'none';
        document.querySelector('.desfecho-introducao').style.display = 'none';
        document.querySelector('.paragrafoTres-introducao').style.display = 'none';
        document.querySelector('.avançar').style.display = 'none';
       
        comoJogarDiv.style.display = 'block';
        comoJogarTitulo.style.display = 'block';
        joKenCodContainer.style.display = 'block';
        tutorialContainer.style.display = 'block';
        comoJogarTitulo.style.textAlign = 'block';
        joKenCodContainer.style.flex = 'block';
        tutorialContainer.style.flex = 'block';
        
    });
});

document.getElementById('jogar').addEventListener('click', function() {
    const gameSong = new Audio("sounds/electro.mp3");
    clickSong.play();
    const startSong = document.getElementById('start-song');
    startSong.pause();
    gameSong.play();
    document.getElementById('game').style.display = 'block';
    document.getElementById('jogar').style.display = 'none';
    document.getElementById('tutorial-paragrafo').style.display = 'none';
    document.getElementById('tutorial-titulo').style.display = 'none';
    document.getElementById('jo-ken-cod-container').style.display = 'none';
    document.getElementById('como-jogar-titulo').style.display = 'none';
    
    
});


