// Selecciona los elementos del HTML
let input = document.getElementById("nuevoElemento");
let botonAgregar = document.getElementById("agregarBtn");
let lista = document.getElementById("lista");


// Función para agregar un elemento
function agregarElemento() {
    let texto = input.value.trim();
    // Comprueba que el campo no esté vacío
    if (texto === "") {
        alert("Escribe algo para agregar a la lista");
        return;
    }

    // Crea el elemento li
    let elemento = document.createElement("li");
    elemento.classList.add("elemento");
    // Crea el texto del elemento
    let textoNodo = document.createTextNode(texto);
    elemento.appendChild(textoNodo);
    // Crea el botón eliminar
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.classList.add("btn", "btn-danger", "btn-sm");

    // Evento para eliminar el elemento
    botonEliminar.addEventListener("click", function() {
        elemento.remove();
    });

    // Agrega el botón al li
    elemento.appendChild(botonEliminar);
    // Agrega el li a la lista
    lista.appendChild(elemento);
    // Limpia el input
    input.value = "";
}

// Evento del botón Agregar
botonAgregar.addEventListener("click", agregarElemento);