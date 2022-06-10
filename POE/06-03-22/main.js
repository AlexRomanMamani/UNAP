//CREACION DEL NODO
let newNodo = document.createElement("p");

//DAR VALOR AL NODO
newNodo.textContent = "Este es un parrafo generado";

//CLONAR NODO
let newNodo2 = newNodo.cloneNode(true);
let newNodo3 = newNodo.cloneNode(true);
let newNodo4 = newNodo3.cloneNode(true);

newNodo2.textContent = "Hola este es un parrafo newNodo2";
newNodo3.textContent = "Este es el parrafo newNodo3";
newNodo4.textContent = "Este es el newNodo4";

//PUNTO DE INCERSION (NODO)
let ptoIncersion = document.getElementById("cuerpo");

//INSERTA AL FINAL
ptoIncersion.appendChild(newNodo);
//INSERTA AL INICIO
ptoIncersion.prepend(newNodo2);
ptoIncersion.prepend(newNodo4);

//NUEVO PUNTO DE INSERCION
let hermano = document.getElementById("p3");
let hermano2 = document.getElementById("p4");

//INSERTA DONDE SE LE INDICA. INSERTAR ANTES DE (NODO QUE SE INSERTA, SIBLING)
ptoIncersion.insertBefore(newNodo3, hermano);
ptoIncersion.insertBefore(newNodo4, hermano2);

//ELIMINAR NODO
//NUEVO PUNTO DE INSERCION
let nodoEliminar = document.getElementById("p5");

//hijo.lePideAlPadre.remuevaHijo(el mismo se pide eliminar)
nodoEliminar.parentNode.removeChild(nodoEliminar);

//NUEVO PUNTO DE INSERCION PARA EDITAR P6
let editarP = document.getElementById("p6");

editarP.textContent = "Hola aqui esta el Parrafo 6 Papuuuuss!";

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
  // let ptoInsercion2 = document.getElementById("cuerpo");

  //hijo.lePideAlPadre.remuevaHijo(el mismo se pide eliminar)
  //ptoInsercion2.parentNode.removeChild(newNodo);
  document
    .querySelector(".btn-deleteParagraph")
    .addEventListener("click", () => {
      const parrafos = document.querySelectorAll("p");
      if (!!parrafos.length) parrafos[parrafos.length - 1].remove();
    });
}
