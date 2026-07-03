function convertir() {
    let mxn = document.getElementById("numeroConvertir").value;

    if (mxn === "" || isNaN(mxn)) {
        alert("Ingresa un valor numérico válido");
        return;
    }

      mxn = parseFloat(mxn);

          if (mxn < 0) {
        alert("No se aceptan valores negativos");
        return;
          }

      let usd = mxn * 0.057;

    document.getElementById("numeroConvertido").value = usd + " USD";
}


    
