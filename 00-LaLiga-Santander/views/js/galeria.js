// Carrusel de Galeria

function moverizquierda() {
    var image8
    image8 = document.getElementById('image8').src;

    document.getElementById('image8').src = document.getElementById('image1').src;
    document.getElementById('image1').src = document.getElementById('image2').src;
    document.getElementById('image2').src = document.getElementById('image3').src;
    document.getElementById('image3').src = document.getElementById('image4').src;
    document.getElementById('image4').src = document.getElementById('image5').src;
    document.getElementById('image5').src = document.getElementById('image6').src;
    document.getElementById('image6').src = document.getElementById('image7').src;
    document.getElementById('image7').src = image8

    document.getElementById('image_principal').src = document.getElementById('image3').src;
}

function moverderecha() {
    var image1
    image1 = document.getElementById('image1').src;

    document.getElementById('image1').src = document.getElementById('image8').src;
    document.getElementById('image8').src = document.getElementById('image7').src;
    document.getElementById('image7').src = document.getElementById('image6').src;
    document.getElementById('image6').src = document.getElementById('image5').src;
    document.getElementById('image5').src = document.getElementById('image4').src;
    document.getElementById('image4').src = document.getElementById('image3').src;
    document.getElementById('image3').src = document.getElementById('image2').src;
    document.getElementById('image2').src = image1;

    document.getElementById('image_principal').src = document.getElementById('image3').src;
}
