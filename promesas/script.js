

const getEmpleado = ( id ) =>{
    return new Promise((resolve, reject ) =>{
        const empleado = empleados.find( e=>e.id === id )?.nombre;
        ( empleado )
        ? resolve( empleado)
        : reject("no existe empleado");
    });
}

const getSalario = () =>{
    return new Promise(( resolve, reject ) => {
        const salario = salarios.find( s => s.id === id )?.salario;
        ( salario )
        ? resolve( salario )
        : reject ("co existe salario")
    })
}

const id = 3
let nombre;

getEmpleado(id)
    .then( empleado => {
        nombre = empleado;
        return getSalario( id )
    })
    .then( salario => console.log('El empleado'))