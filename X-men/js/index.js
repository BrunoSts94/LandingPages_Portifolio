// passo1 - Pegar os personagens no JS para poder verificar quando o usuario passar o mouse em cima de um deles.
const personagens = document.querySelectorAll('.personagem')

// passo 2 - Adicionar a classe seleconado no personagem que o usuario passar o cursor do mouse.
 // passo 3 - Verificar se já existe um personagem selecionado,  se sim, remover a seleção dele.

personagens.forEach(personagem => {

        personagem.addEventListener('mouseenter', () => {
            if(window.innerWidth < 450) {
                window.scrollTo({top:0, behavior: 'smooth'});
            }

        RemoverSelecaoPersonagem();

        personagem.classList.add('selecionado');

        const imagemPersonagemGrande = document.querySelector('.personagem-grande')

        const idPersonagem = personagem.attributes.id.value;
        
        imagemPersonagemGrande.src = `imagens/card-${idPersonagem}.png`;
        

        mudaNomePersonagem(personagem);

        mudaDescricaoPersonagem(personagem);

    })
})



function mudaNomePersonagem(personagem) {
    const nomePersonagemGrande = document.querySelector('.nome-personagem');
    nomePersonagemGrande.innerText = personagem.getAttribute('data-name');
}

function mudaDescricaoPersonagem(personagem) {
    const descricaoPersonagemGrande = document.querySelector('.descricao-personagem');
    descricaoPersonagemGrande.innerText = personagem.getAttribute('data-description');
}

function RemoverSelecaoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

