function convertir() {
    let kilo = document.getElementById("numeroConvertir").value;

    if (kilo === "" || isNaN(kilo)) {
        alert("Ingresa un valor numérico válido");
        return;
    }

      let milla = kilo * 0.621371;

    document.getElementById("numeroConvertido").value = milla + " millas";
}