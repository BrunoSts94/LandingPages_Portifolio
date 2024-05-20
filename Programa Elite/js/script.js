
document.addEventListener('DOMContentLoaded', (event) => {
    const video = document.querySelector('.video-elite');
    video.addEventListener('ended', () => {
        // Define o tempo do vídeo para 1 segundo antes do fim
        // Pode ser ajustado conforme necessário
        video.currentTime = video.duration - 0.1;
        video.pause();  // Pausa o vídeo nesse ponto
    });
});

const link = document.getElementById('back-to-header').addEventListener('click', function(event){
    event.preventDefault();

    const cabecalho = document.querySelector('#header');

    cabecalho.scrollIntoView({
        behavior: 'smooth'
    })
})