const colorPreview = document.querySelector(".preview");

const colorSlider = document.getElementById("hue-slider");
const luminosSlider = document.getElementById("luminos-slider");
const contrasteSlider = document.getElementById("contraste-slider");
const sombraSpan = document.getElementById("sombraSpan");

    colorSlider.addEventListener("input", function() { 
    const hue = this.value;
    const color = `hsl(${hue}, 100%, 50%)` //cor(hue), contraste(100%), brilho (50%)

    colorPreview.style.backgroundColor = color;
    colorPreview.style.boxShadow = `0px 0px 60px 20px ${color}`
    sombraSpan.style.textShadow = `0px 5px 20px ${color}`
    })

    luminosSlider.addEventListener("input", function() {
        const luminosidade = this.value;
        colorPreview.style.filter = `brightness(${luminosidade}%)` //usado a propriedade filter para ajustar o brilho, e logo apos usado brightness, passando a ele o valor contido em luminosidade, e adicionado tambem a porcentagem para ficar mais suave a transição.
    })

    contrasteSlider.addEventListener("input", function() {
        const contraste = this.value;
        colorPreview.style.filter = `contrast(${contraste}%)`

        console.log(contraste);
    })

    