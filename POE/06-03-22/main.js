/*
//CREACION DEL NODO
let newNodo = document.createElement("p");

//DAR VALOR AL NODO
newNodo.textContent = "Este es un parrafo generado";

//CLONAR NODO
let newNodo2 = newNodo.cloneNode(true);
let newNodo3 = newNodo.cloneNode(true);

//PUNTO DE INCERSION (NODO)
let ptoIncersion = document.getElementById("cuerpo");

//INSERTA AL FINAL
ptoIncersion.appendChild(newNodo);
//INSERTA AL INICIO
ptoIncersion.prepend(newNodo2);

//NUEVO PUNTO DE INSERCION
let hermano = document.getElementById("p3");

//INSERTA DONDE SE LE INDICA. INSERTAR ANTES DE (NODO QUE SE INSERTA, SIBLING)
ptoIncersion.insertBefore(newNodo3, hermano)

//ELIMINAR NODO
//NUEVO PUNTO DE INSERCION
let nodoEliminar = document.getElementById("p5");

//hijo.lePideAlPadre.remuevaHijo(el mismo se pide eliminar)
nodoEliminar.parentNode.removeChild(nodoEliminar);

*/
//AGREGAR NODOS A BOTONES
function generarParrafos() {
    //CREAR NODO
    let newNodo = document.createElement("p");
    //DAR VALOR AL NODO
    newNodo.textContent = "Este parrafo se genera con la funcion.";
    //CREAR PUNTO INSERCION
    let ptoInsercion = document.getElementById("cuerpo");
    ptoInsercion.appendChild(newNodo);
}

function eliminarParrafos() {
    //ELIMINAR NODO
    //NUEVO PUNTO DE INSERCION
    let ptoInsercion = document.getElementById("cuerpo");

    //hijo.lePideAlPadre.remuevaHijo(el mismo se pide eliminar)
    ptoInsercion.parentNode.removeChild(newNodo);
}