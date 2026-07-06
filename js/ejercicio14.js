function calcular() {
    let entrada = document.getElementById("numerosIngresados").value;

    if (entrada === "") { alert("Ingresa una serie de números separados por comas");
        return;
    }

    let arregloTexto = entrada.split(",");

    let numeros = arregloTexto.map(function(valor) {
        return Number(valor.trim());
    });

    let hayError = numeros.some(function(numero) {
        return isNaN(numero);
    });

    if (hayError) {  alert("Ingresa solo números separados por comas");
        return;
    }

    let mayor = Math.max(...numeros);
    let menor = Math.min(...numeros);

    let suma = 0;

    for (let i = 0; i < numeros.length; i++) {
        suma = suma + numeros[i];
    }

    let promedio = suma / numeros.length;

    document.getElementById("resultadoMayor").value = mayor;
    document.getElementById("resultadoMenor").value = menor;
    document.getElementById("resultadoPromedio").value = promedio.toFixed(2);
}
