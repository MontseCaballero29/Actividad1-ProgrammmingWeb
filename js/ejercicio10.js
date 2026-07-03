function convertir() {
    let celsius = document.getElementById("celsius").value;

    if (celsius === "" || isNaN(celsius)) {
        alert("Ingresa un valor numérico válido");
        return;
    }

    let fahrenheit = (celsius * 9 / 5) + 32;

    document.getElementById("fahrenheit").value = fahrenheit + "°F";
}