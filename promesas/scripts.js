const numeropar = ( numero ) =>{
    return new Promise((resolve, reject ) =>{
    if (numero % 2 == 0){
        resolve("par")
    } else{
        reject("impar")
    }
    });
}

let numero = 3

numeropar(numero)
    .then(res=>{
        console.log(res)
    }).catch(rej=>{
        console.log(rej)
    })


    const calcularTotalFactura = (productos) => {
        return new Promise((resolve, reject) => {
            let total = 0;
            let contador = 0;
    
            productos.forEach(productoId => {
                getProducto(productoId)
                    .then(producto => {
                        total += producto.precio;
                        contador++;
                        if (contador === productos.length) {
                            resolve(total);
                        }
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        });
    };