let estudiantes = []; //arreglo para estudiantes

function agregarEstudiante() {
    let nombre = document.getElementById("nombreEstudiante").value.trim(); //trim elimina espacios vacíos nombre
    let calificacion = document.getElementById("calificacionEstudiante").value.trim();

    //ver si está vacío
    if (nombre === "" || calificacion === "") {
        alert("Ingresa el nombre y la calificación del estudiante");
        return;
    }

    let soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/;

    if (!soloLetras.test(nombre)) {
        alert("El nombre solo debe contener letras");
        return;
    } //Baji

    calificacion = Number(calificacion); //convierte num

    if (isNaN(calificacion)) {
        alert("Ingresa una calificación válida");
        return;
    }

    //crea objeto estudiante
    let estudiante = {
        nombre: nombre,
        calificacion: calificacion
    };

    estudiantes.push(estudiante); //agg

    //limpiar
    document.getElementById("nombreEstudiante").value = "";
    document.getElementById("calificacionEstudiante").value = "";

    document.getElementById("numeroEstudiantes").value = estudiantes.length; //cantidad agg

    alert("El estudiante fue agregado correctamente");
}

function calcular() {
    if (estudiantes.length === 0) {
        alert("Primero agrega estudiantes");
        return;
    }
    //reduce recorre el arreglo y y acumula suma
    let sumaCalificaciones = estudiantes.reduce(function(total, estudiante) {
        return total + estudiante.calificacion;
    }, 0);

    let promedioCalificaciones = sumaCalificaciones / estudiantes.length;

     // map crea arreglo solo con calificaciones y Math.max obtiene el número mayor
    let calificacionMaxima = Math.max(...estudiantes.map(function(estudiante) {
        return estudiante.calificacion;
    }));

    let calificacionMinima = Math.min(...estudiantes.map(function(estudiante) {
        return estudiante.calificacion;
    }));

    let estudianteCalificacionMasAlta = "";
    let estudianteCalificacionMasBaja = "";

     // Recorre estudiantes y ve qn tiene la calificación más alta y baja
    estudiantes.forEach(function(estudiante) {
        if (estudiante.calificacion === calificacionMaxima) {
            estudianteCalificacionMasAlta = estudiante; } //guarda
        if (estudiante.calificacion === calificacionMinima) {
            estudianteCalificacionMasBaja = estudiante; }
    });

     //muestra
    document.getElementById("resultadoPromedioCalificaciones").value = promedioCalificaciones.toFixed(2);
    document.getElementById("resultadoCalificacionMasAlta").value =
        estudianteCalificacionMasAlta.nombre + ", " + estudianteCalificacionMasAlta.calificacion;
    document.getElementById("resultadoCalificacionMasBaja").value =
        estudianteCalificacionMasBaja.nombre + ", " + estudianteCalificacionMasBaja.calificacion;
}