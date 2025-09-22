const imagemCopo = document.querySelector('.imagem-copo');
const circulo = document.querySelector('.circulo');

function trocaImagem(imagem){
    document.querySelector('.imagem-copo').src = imagem;

    if (imagem.endsWith('img1.png')) {
        circulo.style.background = '#310805';
        circulo.style.transition = '0.5s';
    } else if (imagem.endsWith('img2.png')) {
        circulo.style.background = '#e2c21fff';
        circulo.style.transition = '0.5s';
    } else {
        circulo.style.background = '#c20d0d';
        circulo.style.transition = '0.5s';
    }
}