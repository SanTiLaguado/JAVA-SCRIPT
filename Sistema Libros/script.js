libro = {
    titulo: "DIETA PERFECTA",
    autor: "DOCTOR BAYTER",
    genero: "COMIDA Y SALUD",
    añopublicacion: "2021",
    editorial: "BAYTER BOOKS"}

function mostrardetalleslibro(){
    const { titulo, autor, genero, añopublicacion, editorial } = libro

    console.log(titulo)
    console.log(autor)
    console.log(genero)
    console.log(añopublicacion)
    console.log(editorial)
}

mostrardetalleslibro(libro)