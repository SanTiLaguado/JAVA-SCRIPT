const listaProductos=[]

const cargarProductos=()=>{   
    for(let i=0;i<=10;i++){
        const nuevoProducto={
            id:i,
            codigo: `PROD${i}`,
            descripcion: faker.commerce.productName(),
            precio: parseFloat(faker.commerce.price(10, 100, 2))
        };
        listaProductos.push(nuevoProducto);
    }    
}

const cargarFormularioProductos=()=>{
    const productosForm = document.getElementById('productos-form');
    productosForm.innerHTML = `
      <form>
          <label for="nombreCliente">Nombre del Cliente:</label>
          <input type="text" id="nombreCliente" required>
          <label for="edadCliente">Edad del Cliente:</label>
          <input type="number" id="edadCliente" required>
          <label for="emailCliente">Correo Electrónico del Cliente:</label>
          <input type="email" id="emailCliente" required>
          <button type="button" onclick="crearCliente()">Crear Cliente</button>
          <button type="button" onclick="mostrarListado()">Ver Listado de Clientes</button>
          <!-- Aquí se puede añadir más funcionalidad, como modificar y eliminar clientes -->
      </form>
    `;
    const listadoProductos = document.getElementById('listado-productos');
    listadoProductos.style.display='none';
}

const crearProducto=()=>{
    const codigoInput=document.getElementById('codproducto');
    const descripcionInput=document.getElementById('descproducto');
    const precioInput=document.getElementById('precioproducto');

    const codigo=codigoInput.value
    const descripcion=descripcionInput.value
    const precio=precioInput.value

    const nuevoProducto={
        codigo:codigo,
        descripcion:descripcion,
        precio:precio,
    }

    listaProductos.push(nuevoProducto)

    codigoInput.value='';
    descripcionInput.value='';
    precioInput.value='';

    alert('Producto Creado con exito')
    console.log(listaClientes)
}

cargarFormularioProductos();
cargarProductos()
console.log(listaProductos);