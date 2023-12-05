document.addEventListener('DOMContentLoaded', function() {
    // Referência para o elemento de áudio
    const startSong = document.getElementById('start-song');
    const clickSong = document.getElementById('click-song');
    document.getElementById('start-screen-titulo').addEventListener('click', function() {
        // Oculta a tela inicial e exibe a próxima tela
        clickSong.play();
        document.querySelector('#start-screen').style.display = 'none';
        document.querySelector('#tela-um').style.display = 'block';
        document.querySelector('#ler-mais').style.display = 'block';

        // Reproduz o áudio quando o botão for clicado
        startSong.play();
    });

    let contadorCliques = 0;

    document.getElementById('ler-mais').addEventListener('click', function() {
        contadorCliques++;
        const clickSong = document.getElementById('click-song');

        if (contadorCliques === 1) {
            document.querySelector('.paragrafoUm-introducao').style.display = 'none';
            document.querySelector('.paragrafoDois-introducao').style.display = 'block';
            clickSong.play();
        } else if (contadorCliques === 2) {
            document.querySelector('.paragrafoDois-introducao').style.display = 'none';
            document.querySelector('.paragrafoTres-introducao').style.display = 'block';
            clickSong.play();
        } else if (contadorCliques === 3) {
            document.querySelector('.paragrafoDois-introducao').style.display = 'none';
            document.querySelector('.paragrafoTres-introducao').style.display = 'block';
            document.querySelector('.ler-mais').style.display = 'none';
            document.querySelector('.avançar').style.display = 'block';
            clickSong.play();
        }
    
    });
});
 