let identificaciones = [];

function DigitoVerificador() {
    const secuencia = [2, 3, 4, 5, 6, 7];
    const numero = document.getElementById("numero").value;
    let suma = 0;

    const numeroInvertido = parseInt(numero.split('').reverse().join(''));

    const digitos = numeroInvertido.toString().split('').map(Number);

    for (let i = 0; i < digitos.length; i++) {
        let multiplicador = secuencia[i % secuencia.length];
        suma += digitos[i] * multiplicador;
    }

    const mod = suma % 11;
    let digitoVerificador;

    if (mod === 0) {
        digitoVerificador = 0;
    } else {
        digitoVerificador = 11 - mod;
    }

    const identificacion = numero.toString() + "-" + digitoVerificador.toString();
    identificaciones.push(identificacion);

    document.getElementById("resultado").innerHTML = "Dígito Verificador: " + identificacion;

    console.log("Lista de números con dígito verificador:", identificaciones);
}

function verificarexistencia() {
    const numeroingresado = document.getElementById("numeroverificar").value.toString();
    console.log("Lista de números con dígito verificador:", identificaciones);

    if (identificaciones.includes(numeroingresado)) {
        document.getElementById("respuesta").innerHTML = "La identificación " + numeroingresado + " existe en el sistema.";
    } else {
        document.getElementById("respuesta").innerHTML = "El número de id y su dígito verificador NO existen en la lista.";
    }
}

function mostrarlista() {
    const lista = document.getElementById("lista");
    if (lista.style.display === "none") {
        lista.style.display = "block";
        mostrarNumeros();
    } else {
        lista.style.display = "none";
    }
}

function mostrarNumeros() {
    const lista = document.getElementById("lista");

    identificaciones.forEach(function(identificacion) {
        const itemLista = document.createElement("li");
        itemLista.textContent = identificacion;
        lista.appendChild(itemLista);
    });
}