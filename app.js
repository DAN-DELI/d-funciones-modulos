import { analizaAprobacion,
     calculaPromedio,
     mostrarResultado,
     iniciarBanco} from "./modulo/index.js";

// = RETO 1 =
console.log("=== RETO 1 ===");

let nombre = prompt("Ingrese el nombre del estudiante:");
let nota1 = parseFloat(prompt("Ingrese la primera nota:"));
let nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
let nota3 = parseFloat(prompt("Ingrese la tercera nota:"));

calculaPromedio(nota1, nota2, nota3);
analizaAprobacion(calculaPromedio(nota1, nota2, nota3));
mostrarResultado(nombre, calculaPromedio(nota1, nota2, nota3));

// = RETO 2 =
iniciarBanco();
