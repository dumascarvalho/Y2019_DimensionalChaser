/* Escolher DIVs (Fixo) */

var barraDescricao = document.getElementsByClassName("barraDescricao")[0];
barraDescricao.style.display = "none";

function mostrarDiv(divIndex) {

    var i;
    var div = document.getElementsByClassName("slidesDiv");
    var som = document.getElementById("musica");

    for (i = 0; i < div.length; i++) {
        if (i == divIndex) {
            div[i].style.display = "block";
            barraDescricao.style.display = "block";
            som.src = "../sounds/" + (i + 1) + ".mp3";
            som.play();
        } else {
            div[i].style.display = "none";
        }
    }
}