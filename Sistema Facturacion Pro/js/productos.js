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
          <label for="codproducto">Codigo del Producto:</label>
          <input type="text" id="codproducto" required>
          <label for="descproducto">Descripcion del Producto:</label>
          <input type="number" id="descproducto" required>
          <label for="precioproducto">Precio del producto:</label>
          <input type="email" id="precioproducto" required>
          <button type="button" onclick="crearProducto()">Crear Producto</button>
          <button type="button" onclick="mostrarListaProd()">Ver Listado de Productos</button>
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
    console.log(listaProductos)
}

console.log(listaProductos)

const mostrarListaProd=()=>{
    const productosForm = document.getElementById('productos-form');
    const listadoProductos = document.getElementById('listado-productos');

    productosForm.style.display='none';
    listadoProductos.style.display='block';

    const ul=document.createElement('ul');

    for(const producto of listaProductos){
        const li=document.createElement('li')
        li.textContent= `ID: ${producto.id}, Codigo: ${producto.codigo}, Descripcion: ${producto.descripcion}, Precio: ${producto.precio}`;
        ul.appendChild(li)
    }

    listadoProductos.innerHTML='';
    listadoProductos.appendChild(ul)

    const volverButton=document.createElement('button');
    volverButton.textContent='Volver al Formulario';
    volverButton.addEventListener('click',volveraFormulario);
    listadoProductos.appendChild(volverButton);

}

const volveraFormulario=()=>{
    const productosForm = document.getElementById('productos-form');
    const listadoProductos = document.getElementById('listado-productos');    

    listadoProductos.style.display='none';
    productosForm.style.display='block';
    
}