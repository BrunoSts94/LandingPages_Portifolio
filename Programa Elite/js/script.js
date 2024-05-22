function showMenu(){
    const menu = document.querySelector(".itens-menu");
    if (menu.style.display == 'flex'){
        menu.style.display = 'none'
    }else {
        menu.style.display = 'flex'
    }
}

/*Função para pausar o video antes de terminar e trancar a tela */
document.addEventListener('DOMContentLoaded', (event) => {
    const video = document.querySelector('.video-elite');
    video.addEventListener('ended', () => {
        // Define o tempo do vídeo para 1 segundo antes do fim
        // Pode ser ajustado conforme necessário
        video.currentTime = video.duration - 0.1;
        video.pause();  // Pausa o vídeo nesse ponto
    });
});

/*Função para rolagem suave */
const link = document.getElementById('back-to-header').addEventListener('click', function(event){
    event.preventDefault();

    const cabecalho = document.querySelector('#header');

    cabecalho.scrollIntoView({
        behavior: 'smooth'
    })
})

/* */
const opc1 = document.querySelector('.c1');
const opc2 = document.querySelector('.c2');
const opc3 = document.querySelector('.c3');
const opc4 = document.querySelector('.c4');
const opc5 = document.querySelector('.c5');
const opc6 = document.querySelector('.c6');

let mascara = document.querySelector('.mascara');
let titleServices = document.querySelector('.title-services');
let textInfo2 = document.querySelector('.txt-services2');
let textInfo = document.querySelector('.txt-services')
const showInfosServices = document.querySelector('.show-infos-services');

function showInfos(opc){
    mascara.style.visibility = 'visible';
    showInfosServices.style.visibility = 'visible';

    switch(opc) {
		case opc1: 
        titleServices.innerHTML = "ACESSORIA EM SEGURANÇA DO TRABALHO"
        textInfo.innerHTML = `A assessoria ou consultoria em segurança do trabalho, consiste em acompanhamento dos programas de segurança, avaliação dos riscos e necessidades relatando possíveis soluções para os problemas relatados pela empresa, elaboração de relatórios referentes aos dados observados durante a permanência do profissional na empresa, listando situações que possivelmente possam gerar acidentes de trabalho, passivos trabalhistas e sugestões de melhorias na área de segurança, emissão de APR (análise preliminar de risco), PT (permissão de trabalho), etc.; dispondo de profissionais técnicos de segurança do trabalho e engenheiro de segurança do trabalho altamente qualificados para atuação nas assessorias.`
		break

		case opc2: 
        titleServices.innerHTML = "PROGRAMA DE GERENCIAMENTO DE RISCOS (PGR)"
        textInfo.innerHTML = "Com o encerramento do antigo PPRA, o novo documento válido pela legislação é o PGR que é mais completo e mais eficaz."
        textInfo2.innerHTML = "O Programa de Gerenciamento de Riscos (PGR), da Norma Regulamentadora nº 01, é um documento que consolida todos os riscos ocupacionais a que o trabalhador está exposto: agentes físicos, químicos, biológicos, fatores ergonômicos e de acidentes. O PGR é um instrumento integrador para operacionalização do gerenciamento de riscos ocupacionais na empresa, bem como comunicar os riscos ocupacionais na organização."
		break

        case opc3: 
        titleServices.innerHTML = "ANÁLISE PRELIMINAR DE RISCOS (APR)"
        textInfo.innerHTML = "A APR é prevista em diversas Normas Regulamentadoras (NR’s), onde é analisada cada etapa das tarefas exercidas dentro de uma atividade da empresa e identifica os possíveis erros que podem ocorrer e se tornar em acidentes, assim podendo indicar formas para reduzir estes erros."
		break

        case opc4: 
        titleServices.innerHTML = "PROGRAMA DE PROTEÇÃO RESPIRATÓRIA (PPR)"
        textInfo.innerHTML = "O Programa de Proteção Respiratória (PPR) é um conjunto de medidas de segurança implementadas para proteger a saúde do trabalhador contra a exposição aos riscos químicos e biológicos existentes no local de trabalho. O intuito do programa é controlar as doenças ocupacionais causadas pela inalação das impurezas do ar que são prejudiciais à saúde como poeiras, névoas, fumos, vapores e gases químicos."
        textInfo2.innerHTML = "É um processo de seleção, uso e manutenção dos respiradores para cada trabalhador que irá avaliar os riscos respiratórios, adequar as tarefas para eliminar ou minimizar os perigos do ambiente de trabalho e selecionar os Equipamentos de Proteção Respiratória (EPR) ideal para cada tarefa na jornada de trabalho."
		break

        case opc5: 
        titleServices.innerHTML = "PALESTRAS DE SIPAT"
        textInfo.innerHTML = "Efetuar palestras nas empresas na semana interna de prevenção a acidentes com compromisso de promover a conscientização dos trabalhadores de forma dinâmica e inovadora."
		break

		default:
		console.log("opção não cadastrada")
		break
	}
}

function hiddenMask(){
    mascara.style.visibility = 'hidden'
    showInfosServices.style.visibility = 'hidden';
}
