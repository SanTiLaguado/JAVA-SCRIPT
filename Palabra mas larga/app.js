const palabramaslarga = function () {
    let palabra1 = document.getElementById("palabra1").value;
    let palabra2 = document.getElementById("palabra2").value;
    let longitud1 = palabra1.length;
    let longitud2 = palabra2.length;
    let resultado;

    if (longitud1 === longitud2) {
        resultado = "Ninguna, Las dos palabras tienen la misma longitud";
    } else if (longitud1 > longitud2) {
        resultado = palabra1;
    } else {
        resultado = palabra2;
    }

    document.getElementById("resultado").innerHTML = "La palabra más larga es:\n " + resultado;
}