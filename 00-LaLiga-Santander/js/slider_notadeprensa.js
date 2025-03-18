
// Carrusel de Noticia uno

function moverizq() {
    var imgnoticia5
    imgnoticia5 = document.getElementById('img-noticia5').src;

    document.getElementById('img-noticia5').src = document.getElementById('img-noticia1').src;
    document.getElementById('img-noticia1').src = document.getElementById('img-noticia2').src;
    document.getElementById('img-noticia2').src = document.getElementById('img-noticia3').src;
    document.getElementById('img-noticia3').src = document.getElementById('img-noticia4').src;
    document.getElementById('img-noticia4').src = imgnoticia5;
}

function moverder() {
    var imgnoticia1
    imgnoticia1 = document.getElementById('img-noticia1').src;

    document.getElementById('img-noticia1').src = document.getElementById('img-noticia5').src;
    document.getElementById('img-noticia5').src = document.getElementById('img-noticia4').src;
    document.getElementById('img-noticia4').src = document.getElementById('img-noticia3').src;
    document.getElementById('img-noticia3').src = document.getElementById('img-noticia2').src;
    document.getElementById('img-noticia2').src = imgnoticia1;
}