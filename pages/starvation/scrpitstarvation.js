var contaImg = 1;
var img = "starvation/tp";

function avantiImmagine() {
    var immagine = document.getElementById("immagine");
    contaImg++;
    immagine.src = img + contaImg + ".png";
}

function indietroImmagine() {
    var immagine = document.getElementById("immagine");
    contaImg--;
    immagine.src = img + contaImg + ".png";
}