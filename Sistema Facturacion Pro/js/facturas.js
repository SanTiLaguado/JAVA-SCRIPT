const listaFacturas=[]

const cargarFormularioFacturas = () => {
    const facturasform = document.getElementById('facturas-form');
    facturasform.innerHTML = `
      <form>
          <label for="fechafactura">Fecha de la factura:</label>
          <input type="date" id="fechafactura" required>
          <label for="clientefactura">Cliente:</label>
          <div class="search-container">
            <input type="text" id="search-input-cl" placeholder="Buscar clientes...">
            <ul id="search-results-cl"></ul>
          </div>
          <label for="Productos">Productos:</label>
          <div class="search-container">
            <input type="text" id="search-input-pr" placeholder="Buscar Productos...">
            <ul id="search-results-pr"></ul>
          </div>
          <label for="cantidadItems">Cantidad:</label>
          <input type="number" id="cantidadItems" placeholder="Cantidad de Productos..." required>
          <button type="button" onclick="agregarproducto()">Agregar Producto</button>
          <div id="items">
          <p>Items Agregados</p>
          <ul id="items-agregados"></ul>
          </div>
          <button type="button" onclick="mostrarListaProd()">Crear Factura</button>
          <button type="button" onclick="mostrarListaProd()">Ver Lista de Facturas</button>
      </form>
    `;
    const listadoFacturas = document.getElementById('listado-facturas');
    listadoFacturas.style.display = 'none';

    const searchInputCL = document.getElementById('search-input-cl');
    const searchResultsCL = document.getElementById('search-results-cl');

    function displayResultsCL(results) {
        searchResultsCL.innerHTML = '';
        results.forEach(result => {
            const li = document.createElement('li');
            li.textContent = result.nombre;
            li.addEventListener('click', function() {
                searchInputCL.value = result.nombre;
                searchResultsCL.innerHTML = '';
            });
            searchResultsCL.appendChild(li);
        });
    }
    
    searchInputCL.addEventListener('input', function() {
        const inputValue = this.value.toLowerCase();
        const filteredClients = listaClientes.filter(client => client.nombre.toLowerCase().includes(inputValue)); // Filtrar por el nombre del cliente
        displayResultsCL(filteredClients);
    });

    const searchInputPR = document.getElementById('search-input-pr');
    const searchResultsPR = document.getElementById('search-results-pr');
    
    function displayResultsPR (results) {
        searchResultsPR.innerHTML = '';
        results.forEach(result => {
            const li = document.createElement('li');
            li.textContent = result.descripcion;
            li.addEventListener('click', function() {
                searchInputPR.value = result.descripcion;
                searchResultsPR.innerHTML = '';
            });
            searchResultsPR.appendChild(li);
        });
    }
    
    searchInputPR.addEventListener('input', function() {
        const inputValue = this.value.toLowerCase();
        const filteredClients = listaProductos.filter(product => product.descripcion.toLowerCase().includes(inputValue)); // Filtrar por el nombre del cliente
        displayResultsPR(filteredClients);
    });
}

const agregarproducto=() =>{

} 

