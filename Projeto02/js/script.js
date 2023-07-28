function toggleMode(){
    const html = document.documentElement

    html.classList.toggle('light')

    const imagem = document.querySelector(".profileImage")

    if(html.classList.contains("light")) {
        imagem.setAttribute("src", "../img/avatar-dia.png")
    } else {
        imagem.setAttribute("src", "../img/avatar.png")
    }
}
