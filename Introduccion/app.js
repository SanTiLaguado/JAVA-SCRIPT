const horaActual=parseInt(prompt("hora actual: "));
const cantidadHoras=parseInt(prompt("Cantidad de horas: "));

const horafutura=(horaActual+cantidadHoras)%12;

console.log("La hora dentro de", cantidadHoras, "horas sera:", horafutura)