const buscar = () => {
    const secuencia = document.getElementById("secuenciaIngresada").value;
    const subsecuencia = document.getElementById("subsecuenciaIngresada").value;
    let resultado = secuencia.includes(subsecuencia);
  
    if(subsecuencia === ""){
        document.getElementById("resultado").innerHTML = "INGRESE UNA SUBSECUENCIA";
    }else if (resultado) {
      const subsecuenciaResaltada = `<span style="background-color: yellow;">${subsecuencia}</span>`;
      const secuenciaConResaltado = secuencia.replace(subsecuencia, subsecuenciaResaltada);
      document.getElementById("resultado").innerHTML = "Encontrado: " + secuenciaConResaltado;
    } else {
      document.getElementById("resultado").innerHTML = "La subsecuencia introducida no está presente en la secuencia de ADN.";
    }
  
    console.log("La secuencia incluye la subsecuencia: " + resultado);
  }
