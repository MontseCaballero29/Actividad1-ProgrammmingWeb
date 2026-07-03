function convertir() {
    let mxn = document.getElementById("numeroConvertir").value;

    if (mxn === "" || isNaN(mxn)) {
        alert("Ingresa un valor numérico válido");
        return;
    }

      let usd = mxn * 0.057;

    document.getElementById("numeroConvertido").value = usd + " USD";
}