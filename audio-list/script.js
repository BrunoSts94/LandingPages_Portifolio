const btnPlayPause = document.getElementById('btnPlayPause')
const anterior = document.getElementById('anterior')
const proximo = document.getElementById('proximo')
const audio = document.getElementById('audio-capitulo')
const textoCapitulo = document.getElementById('capitulo')
const textMusica = document.getElementById('musica')
const lenghtChapter = 4

let currentChapter = 1
let playing = false


function playPause(){
    playing === true ? pauseAudio() : playAudio()
}

function playAudio(){
    audio.play()
    playing = true
    btnPlayPause.classList.add('tocando')
    btnPlayPause.style.color = 'white'
    atualizarNomeMusica()
}

function pauseAudio(){
    audio.pause()
    playing = false
    btnPlayPause.classList.remove('tocando')
    btnPlayPause.style.color = 'gray'
}

function proximoAudio(){
    pauseAudio()
    if(currentChapter < lenghtChapter){
        currentChapter += 1
    }else {
        currentChapter = 1
    }

    audio.src = `./audios/${currentChapter}.mp3`
    textoCapitulo.innerText = `Faixa ${currentChapter}`
    atualizarNomeMusica()
}

function anteriorAudio(){
    pauseAudio()
    if(currentChapter === 1){
        currentChapter = lenghtChapter
    }else {
        currentChapter -= 1
    }

    audio.src = `./audios/${currentChapter}.mp3`
    textoCapitulo.innerText = `Faixa ${currentChapter}`
    atualizarNomeMusica()
}

function atualizarNomeMusica() {
    switch (currentChapter) {
        case 1:
            textMusica.innerText = 'Lumiere'
            break;
        case 2:
            textMusica.innerText = 'Renoir'
            break;
        case 3:
            textMusica.innerText = 'Alicia'
            break;

        case 4:
            textMusica.innerText = 'We are Expedition 33'
            break;
            
        default:
            textMusica.innerText = ''
            break;
    }
}