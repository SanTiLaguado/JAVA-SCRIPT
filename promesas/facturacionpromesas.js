// Datos simulados
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

// Función para obtener un cliente por su ID con promesas
const getCliente = (id) => {
    return new Promise((resolve, reject) => {
        const cliente = clientes.find(c => c.id === id);
        if (cliente) {
            resolve(cliente);
        } else {
            reject("Cliente con el ID " + id + " no existe");
        }
    });
};

// Función para obtener un producto por su ID con promesas
const getProducto = (id) => {
    return new Promise((resolve, reject) => {
        const producto = productos.find(p => p.id === id);
        if (producto) {
            resolve(producto);
        } else {
            reject("Producto con el ID " + id + " no existe");
        }
    });
};

// Función para calcular el total de una factura con promesas
const calcularTotalFactura = (productos) => {
    return Promise.all(productos.map(productoId => getProducto(productoId)))
        .then(productos => {
            let total = productos.reduce((acc, producto) => acc + producto.precio, 0);
            return total;
        });
};

// Función principal para obtener información de la factura con promesas
const obtenerInformacionFactura = (facturaId) => {
    return new Promise((resolve, reject) => {
        const factura = facturas.find(f => f.id === facturaId);
        if (factura) {
            getCliente(factura.clienteId)
                .then(cliente => {
                    return calcularTotalFactura(factura.productos)
                        .then(total => {
                            factura.total = total;
                            resolve({
                                factura,
                                cliente,
                                productos: factura.productos
                            });
                        });
                })
                .catch(reject);
        } else {
            reject("Factura con el ID " + facturaId + " no existe");
        }
    });
};

// Ejercicio: Obtener información de la factura con ID 1001
const facturaId = 1001;

obtenerInformacionFactura(facturaId)
    .then(infoFactura => {
        console.log("Información de la factura:");
        console.log("Cliente:", infoFactura.cliente);
        console.log("Productos:", infoFactura.productos);
        console.log("Total de la factura:", infoFactura.factura.total);
    })
    .catch(error => {
        console.error("Error al obtener información de la factura:", error);
    });