// Slider de artículos de la tienda

function moverizq1() {
    var imagen6
    imagen6 = document.getElementById('img_kit6').src;

    document.getElementById('img_kit6').src = document.getElementById('img_kit1').src;
    document.getElementById('img_kit1').src = document.getElementById('img_kit2').src;
    document.getElementById('img_kit2').src = document.getElementById('img_kit3').src;
    document.getElementById('img_kit3').src = document.getElementById('img_kit4').src;
    document.getElementById('img_kit4').src = document.getElementById('img_kit5').src;
    document.getElementById('img_kit5').src = imagen6;
}

function moverder1() {
    var imagen1 
    imagen1 = document.getElementById('img_kit1').src;

    document.getElementById('img_kit1').src = document.getElementById('img_kit6').src;
    document.getElementById('img_kit6').src = document.getElementById('img_kit5').src;
    document.getElementById('img_kit5').src = document.getElementById('img_kit4').src;
    document.getElementById('img_kit4').src = document.getElementById('img_kit3').src;
    document.getElementById('img_kit3').src = document.getElementById('img_kit2').src; 
    document.getElementById('img_kit2').src = imagen1;
}

function moverizq2() {
    var imagenD5
    imagenD5 = document.getElementById('img_kitD5').src;

    document.getElementById('img_kitD5').src = document.getElementById('img_kitD1').src;
    document.getElementById('img_kitD1').src = document.getElementById('img_kitD2').src;
    document.getElementById('img_kitD2').src = document.getElementById('img_kitD3').src;
    document.getElementById('img_kitD3').src = document.getElementById('img_kitD4').src;
    document.getElementById('img_kitD4').src = imagenD5;
}

function moverder2() {
    var imagenD1 
    imagenD1 = document.getElementById('img_kitD1').src;

    document.getElementById('img_kitD1').src = document.getElementById('img_kitD5').src;
    document.getElementById('img_kitD5').src = document.getElementById('img_kitD4').src;
    document.getElementById('img_kitD4').src = document.getElementById('img_kitD3').src;
    document.getElementById('img_kitD3').src = document.getElementById('img_kitD2').src;
    document.getElementById('img_kitD2').src = imagenD1;
}