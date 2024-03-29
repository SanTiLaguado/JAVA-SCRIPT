const clientes = [
    {
        id: 1,
        nombre: "Juan",
        direccion: "Calle A, Ciudad"
    },
    {
        id: 2,
        nombre: "Maria",
        direccion: "Calle B, Ciudad"
    }
];

const productos = [
    {
        id: 101,
        nombre: "Producto 1",
        precio: 50
    },
    {
        id: 102,
        nombre: "Producto 2",
        precio: 75
    },
    {
        id: 103,
        nombre: "Producto 3",
        precio: 100
    }
];

const facturas = [
    {
        id: 1001,
        clienteId: 1,
        productos: [101, 102],
        total: 0
    },
    {
        id: 1002,
        clienteId: 2,
        productos: [103],
        total: 0
    }
];

// Función para obtener un cliente por su ID
const getCliente = (id ) => {
    return new Promise(( resolve, reject ) => {
        const cliente = clientes.find(c => c.id === id)?.nombre;
        ( cliente )
        ? resolve ( cliente )
        : reject("El cliente con el " + id + " no existe");
    }).then(res=>{
        console.log(res)
    }).catch(rej=>{
        console.log(rej)
    })
}


// Función para obtener un producto por su ID
const getProducto = ( id ) => {
    return new Promise(( resolve, reject ) => {
        const producto = productos.find(p => p.id === id)?.nombre;
        ( producto )
        ? resolve ( producto )
        : reject("Producto con el ID " + id + " no existe");
    }).then(res=>{
        console.log(res)
    }).catch(rej=>{
        console.log(rej)
    })
}

// Función para calcular el total de una factura
const calcularTotalFactura = ( productos ) => {
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


// Función principal para obtener información de la factura
const obtenerInformacionFactura = (facturaId, callback) => {
    const factura = facturas.find(f => f.id === facturaId);
    if (factura) {
        getCliente(factura.clienteId, (errorCliente, cliente) => {
            if (errorCliente) {
                callback(errorCliente);
            } else {
                calcularTotalFactura(factura.productos, (errorTotal, total) => {
                    if (errorTotal) {
                        callback(errorTotal);
                    } else {
                        factura.total = total;
                        callback(null, {
                            factura,
                            cliente,
                            productos: factura.productos
                        });
                    }
                });
            }
        });
    } else {
        callback("Factura con el ID " + facturaId + " no existe");
    }
};

// Ejercicio: Obtener información de la factura con ID 1001
const facturaId = 1001;

obtenerInformacionFactura(facturaId, (error, infoFactura) => {
    if (error) {
        console.error("Error al obtener información de la factura:", error);
    } else {
        console.log("Información de la factura:");
        console.log("Cliente:", infoFactura.cliente);
        console.log("Productos:", infoFactura.productos);
        console.log("Total de la factura:", infoFactura.factura.total);
    }
});


const id = 1
let nombre;

getCliente(id)
