
let keyApi = '83af7af09b40caf14cf5629820651c3a';

function show(dados){
    console.log(dados);
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp ) + "°C"
    document.querySelector(".icone").src = "http://openweathermap.org/img/wn/" + dados.weather[0].icon +".png"
    document.querySelector(".umidade").innerHTML = "Umidade do ar: " + dados.main.humidity + "%"

}

async function buscaLocalizacao(localizacao){
    let dados = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + localizacao + '&appid=83af7af09b40caf14cf5629820651c3a&units=metric').then(resposta => resposta.json())

    show(dados)
}



function clickButton(){
    let localizacao = document.querySelector(".localizacao").value
    

    buscaLocalizacao(localizacao);
}

