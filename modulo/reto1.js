// === RETO 1 ===
// crear una funcion 

export function calculaPromedio(nota1, nota2, nota3) {
  let promedio = (nota1 + nota2 + nota3) / 3;
  return promedio;
}

// el estudiante aprueba si su promedio es mayor o igual a 3.0
export function analizaAprobacion(promedio) {
  if (promedio >= 3.0) {
    return "El estudiante ha aprobado";
  } else {
    return "El estudiante ha reprobado";
  }
}

export function mostrarResultado(promedio) {
  console.log("El promedio es: " + promedio);
  console.log("Resultado: " + analizaAprobacion(promedio));
}