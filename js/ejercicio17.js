// Función para obtener las tareas del Local Storage
function obtenerTareas() {
    let tareasGuardadas = localStorage.getItem("tareas");
    if (tareasGuardadas === null) { return [];    }
    return JSON.parse(tareasGuardadas);
}

// Closure para manejar las tareas
const manejarTareas = (() => {
    let tareas = obtenerTareas();
    // Agrega una tarea
    const agregar = (textoTarea) => {
        let nuevaTarea = {
            tarea: textoTarea,
            completada: false
        };
        tareas.push(nuevaTarea);
        localStorage.setItem(
            "tareas",
            JSON.stringify(tareas)
        );
    };

    // Elimina una tarea
    const eliminar = (indice) => {
        tareas.splice(indice, 1);
        localStorage.setItem(
            "tareas",
            JSON.stringify(tareas)
        );
    };

    return {
        agregar: agregar,
        eliminar: eliminar
    };

})();

// Función para agregar una tarea
function agregarTarea() {
    let tarea = document.getElementById("tarea").value.trim();

    if (tarea === "") {
        alert("Ingresa una tarea");
        return;
    }
    manejarTareas.agregar(tarea);
    document.getElementById("tarea").value = "";
    renderizarTareas();
}

// Función para eliminar una tarea
function eliminarTarea(indice) {
    Swal.fire({
        title: "¿Eliminar tarea?",
        text: "¿Estás seguro de eliminar esta tarea?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Eliminar",
        cancelButtonText: "Cancelar"
    }).then(function(resultado) {
        if (resultado.isConfirmed) {
            manejarTareas.eliminar(indice);
            renderizarTareas();
        }
    });
}


// Función para mostrar las tareas
function renderizarTareas() {
    let lista = document.getElementById("listaTareas");
    lista.innerHTML = "";
    let tareas = obtenerTareas();
    for (let i = 0; i < tareas.length; i++) {
        let elementoTarea = document.createElement("div");
        elementoTarea.classList.add("tarea");
        let textoTarea = document.createElement("p");
        textoTarea.textContent = tareas[i].tarea;
        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.classList.add("boton-eliminar");
        botonEliminar.onclick = function() {
            eliminarTarea(i);
        };

        elementoTarea.appendChild(textoTarea);
        elementoTarea.appendChild(botonEliminar);
        lista.appendChild(elementoTarea);
    }
}

// Muestra las tareas al abrir la página
renderizarTareas();