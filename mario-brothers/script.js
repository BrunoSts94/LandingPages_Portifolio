const formulario = document.querySelector(".formulario");
const mascara = document.querySelector(".mascara-formulario")

function entraContato() {
    formulario.style.left = "50%"
    formulario.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}


function escondeMascara(){
    formulario.style.left = "-490px"
    formulario.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
}