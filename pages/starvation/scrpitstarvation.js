var contaImg = 1;
var ind = "starvation/tp";
var t1 = "1 thread in esecuzione di massima priorita' \n con 4 thread in coda (per priorita')";
var t2 = "il thread precedente termina, e viene eseguito il thread successivo della coda";

function avantiImmagine() {
    if (contaImg >= 1) {
        var immagine = document.getElementById("immagine");
        contaImg++;
        immagine.src = ind + contaImg + ".png";
    }
}

function indietroImmagine() {

    if (contaImg >= 1) {
        var immagine = document.getElementById("immagine");
        ContaImg--;
        immagine.src = ind + contaImg + ".png";
    }

}