function convertir() {
    let edad = document.getElementById("numeroConvertir").value;

    if (edad === "" || isNaN(edad)) {
        alert("Ingresa un valor numérico válido");
        return;
    }

     edad = Number(edad);

    if (edad < 0) {
        alert("No se aceptan números negativos");
        return;
    }


    if (edad >= 18) {
        document.getElementById("numeroConvertido").value = "puedes votar";
    } else {
        document.getElementById("numeroConvertido").value = "no puedes votar";
    }
 

}