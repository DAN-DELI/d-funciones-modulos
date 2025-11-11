// === RETO 2: Módulo de operaciones bancarias ===

// Saldo inicial
let saldo = 0;

// Función para depositar dinero
export function depositar(monto) {
  if (monto > 0) {
    saldo += monto;
    return `Has depositado $${monto}. Tu nuevo saldo es $${saldo}.`;
  } else {
    return "El monto a depositar debe ser mayor que cero.";
  }
}

// Función para retirar dinero
export function retirar(monto) {
  if (monto <= 0) {
    return "El monto a retirar debe ser mayor que cero.";
  } else if (monto > saldo) {
    return `Fondos insuficientes. Tu saldo actual es $${saldo}.`;
  } else {
    saldo -= monto;
    return `Has retirado $${monto}. Tu nuevo saldo es $${saldo}.`;
  }
}

// Función para consultar saldo
export function consultarSaldo() {
  return `Tu saldo actual es $${saldo}.`;
}

// Función principal para ejecutar el sistema bancario
export function iniciarBanco() {
  let opcion;

  do {
    opcion = prompt(
      "Seleccione una opción:\n1. Depositar\n2. Retirar\n3. Consultar saldo\n4. Salir"
    );

    switch (opcion) {
      case "1":
        const deposito = parseFloat(prompt("Ingrese el monto a depositar:"));
        alert(depositar(deposito));
        break;

      case "2":
        const retiro = parseFloat(prompt("Ingrese el monto a retirar:"));
        alert(retirar(retiro));
        break;

      case "3":
        alert(consultarSaldo());
        break;

      case "4":
        alert("Gracias por usar el sistema bancario. ¡Hasta luego!");
        break;

      default:
        alert("Opción no válida. Intente de nuevo.");
    }
  } while (opcion !== "4");
}
