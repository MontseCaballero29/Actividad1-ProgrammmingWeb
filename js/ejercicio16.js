// Funciones flecha  operaciones
const sumar = (numero1, numero2) => numero1 + numero2;
const restar = (numero1, numero2) => numero1 - numero2;
const multiplicar = (numero1, numero2) => numero1 * numero2;
const dividir = (numero1, numero2) => numero2 !== 0 ? numero1 / numero2 : "Error";

function calcularOperacion(operacion) {
    let numero1 = document.getElementById("numero1").value.trim();
    let numero2 = document.getElementById("numero2").value.trim();
    // Verifica que los campos no estén vacíos
    if (numero1 === "" || numero2 === "") {
        Swal.fire({
            icon: "error",
            title: "Campos vacíos",
            text: "Ingresa los dos números"
        });
        return;
    }

    // Convierte los valores a números
    numero1 = Number(numero1);
    numero2 = Number(numero2);

    // Verifica que sean números válidos
    if (isNaN(numero1) || isNaN(numero2)) {
        Swal.fire({
            icon: "error",
            title: "Datos incorrectos",
            text: "Ingresa solamente números"
        });
        return;
    }

    let resultado;
    // Realiza la operación seleccionada
    if (operacion === "suma") {
        resultado = sumar(numero1, numero2);
    } else if (operacion === "resta") {
        resultado = restar(numero1, numero2);
    } else if (operacion === "multiplicacion") {
        resultado = multiplicar(numero1, numero2);
    } else if (operacion === "division") {
        if (numero2 === 0) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "No se puede dividir entre cero"
            });
            return;
        }
        resultado = dividir(numero1, numero2);
    }

    // Muestra el resultado
    document.getElementById("resultado").value = resultado;
}