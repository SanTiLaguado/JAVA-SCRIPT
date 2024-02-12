function invertirNumero() {
    const secuencia = [2, 3, 4, 5, 6, 7];
    let suma = 0;
    const numero = parseInt(document.getElementById("numero").value);
    let numeroInvertido = parseInt(numero.toString().split('').reverse().join(''));
    const digitos = numeroInvertido.toString().split('').map(Number);
    for (let i = 0; i < digitos.length; i++) {
        let multiplicador = secuencia[i % secuencia.length]; // obtenemos el multiplicador actual
        suma += digitos[i] * multiplicador;
    }

    document.getElementById("resultado").innerHTML = "Resultado: " + numeroInvertido, suma;


}
