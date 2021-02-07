function insrt(num) {
    $('.calc-display').val($('.calc-display').val() + num);
}

function eql() {
    $('.calc-display').val(eval($('.calc-display').val()));
}

function c() {
    $('.calc-display').val('');
}


$(document).ready(function () {

/*funcion raiz cuadrada*/

$('.boton-raiz').click(function (e) { 
    e.preventDefault();
    var num = $('.salida').attr("value");
    var raiz = Math.sqrt(num);
    $('.pantalla').html("");
    $('.salida').val("");
    $('.pantalla').append(raiz.toFixed(4));  
    $('.salida').val($('.salida').val() + raiz);
});

/*función potencia al cuadrado*/

$('.boton-potencia').click(function (e) { 
    e.preventDefault();
    var x = $('.salida').attr("value");
    var potencia = Math.pow(x, 2);
    $('.pantalla').html("");
    $('.salida').val("");
    $('.pantalla').append(potencia.toFixed(4));   
    $('.salida').val($('.salida').val() + potencia); 
});

/*función botos mas menos*/
$('.boton-masmenos').click(function (e) { 
    e.preventDefault();
    var y = $('.salida').attr("value");
    var neg = (y = -y);
    $('.pantalla').html("");
    $('.salida').val("");
    $('.pantalla').append(neg);
    $('.salida').val($('.salida').val() + neg); 
});

});

