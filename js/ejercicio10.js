function convertir() {
    let celsius = document.getElementById("numeroConvertir").value;

    if (celsius === "" || isNaN(celsius)) {
        alert("Ingresa un valor numérico válido");
        return;
    }

    celsius = parseFloat(celsius);

    let fahrenheit = (celsius * 9 / 5) + 32;

    document.getElementById("numeroConvertido").value = fahrenheit + "°F";
}
