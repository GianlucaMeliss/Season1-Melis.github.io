var contaImg = 1;
var ind = "starvation/tp";


function avantiImmagine() {
    if (contaImg >= 1 && contaImg < 9) {
        var immagine = document.getElementById("immagine");
        contaImg++;
        immagine.src = ind + contaImg + ".png";
        gestioneTesto();
    }
}

function indietroImmagine() {
    if (contaImg > 1) {
        var immagine = document.getElementById("immagine");
        contaImg--;
        immagine.src = ind + contaImg + ".png";
        gestioneTesto();
    }
}

var t1 = "1 thread in esecuzione di massima priorita' <br> con 4 thread in coda (per priorita').";
var t2 = "il thread precedente termina, e viene eseguito il thread successivo nella coda.";
var t3 = "il thread precendente termina e viene eseguito il successivo per priorita', <br> nel mentre se ne aggiunge un'altro che per priorita' andra' in cima alla coda.";
var t4 = "Il thread precedente termina, e viene eseguito il thread successivo nella coda. <br> anche se e' arrivato dopo per priorita' vera' eseguito prima.";
var t5 = "Durante l'esecuzione del thread se ne sono aggiunti 2 (Arancione e Giallo) <br> in questo caso il thread arancione andra' in cima alla coda <br> mentre il thread giallo si accodera' a quelli della sua stessa priorita',<br> prima pero' del thread verde.";
var t6 = "La coda procede secondo l'ordine di priorita'.";
var t7 = "La coda procede secondo l'ordine di priorita'.";
var t8 = "La coda procede secondo l'ordine di priorita'.";
var t9 = "La coda procede secondo l'ordine di priorita'; <br> il thread di priorita' verde anziche' essere eseguito per quarto viene eseguito come settimo. <br> In questo caso la situazione di starvation si e' risolta in modo autonomo,<br> ma potrebbe accadere che continuino ad arrivare thread con priorita' maggiore senza poter quindi mai essere eseguito";

function gestioneTesto() {
    switch (contaImg) {
        case 1:
            document.getElementById("testoImg").innerHTML = t1;
            break;
        case 2:
            document.getElementById("testoImg").innerHTML = t2;
            break;
        case 3:
            document.getElementById("testoImg").innerHTML = t3;
            break;
        case 4:
            document.getElementById("testoImg").innerHTML = t4;
            break;
        case 5:
            document.getElementById("testoImg").innerHTML = t5;
            break;
        case 6:
            document.getElementById("testoImg").innerHTML = t6;
            break;
        case 7:
            document.getElementById("testoImg").innerHTML = t7;
            break;
        case 8:
            document.getElementById("testoImg").innerHTML = t8;
            break;
        case 9:
            document.getElementById("testoImg").innerHTML = t9;
            break;

    }
}