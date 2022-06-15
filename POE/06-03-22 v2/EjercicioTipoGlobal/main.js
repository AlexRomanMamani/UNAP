//AGREGAR NODO BUSCAR A BOTON
function buscarUrl() {
  let infoBuscar = document.getElementById("buscar");
  //DETERMINAR DONDE BUSCAR
  let ptoBusqueda = document.getElementById("paginas");
  //DONDE MOSTRAR RESULTADO
  let ptoResultado = document.getElementById("resultado");
  //hijo
  let hijo = ptoBusqueda.firstElementChild; //nos posicionamos en el 1er li

  do {
    if (hijo.firstElementChild.textContent == infoBuscar.value) {
      ptoResultado.textContent = hijo.firstElementChild.href;
      infoBuscar.value = "";
      return;
    }
    hijo = hijo.nextElementSibling;
  } while (hijo != null);

  infoBuscar.value = "";
  ptoResultado.textContent = "No se encontro resultado";
}

//AGREGAR NODOS A BOTONES
function agregarUrl() {
  //CREACION LINK
  let newlink = document.createElement("a");

  //RESCATAR INFORMACION EN CUADRO urlPagina
  let cuadroUrl = document.getElementById("urlPagina");

  //RESCATAR INFORMACION EN CUADRO nombrePagina
  let cuadroNombre = document.getElementById("nombrePagina");

  //RELLENAR <a> (urlPagina+nombrePagina)
  newlink.href = cuadroUrl.value;
  newlink.textContent = cuadroNombre.value;

  //CREAR LI (PUNTO INSERCION)
  let newLi = document.createElement("li");

  //AGREGAMOS newLink a newLi
  newLi.appendChild(newlink);

  //VACIAR CUADROS DE TEXTO
  cuadroUrl.value = "";
  cuadroNombre.value = "";

  //CREAR PUNTO INSERCION
  let oldUl = document.getElementById("paginas");

  //AGREGAR AL INICIO
  oldUl.prepend(newLi);
  return;
}

function borrarUrl() {
  let infoBuscar = document.getElementById("buscar");
  //DETERMINAR DONDE BUSCAR
  let ptoBusqueda = document.getElementById("paginas");
  //DONDE MOSTRAR RESULTADO
  let ptoResultado = document.getElementById("resultado");
  //hijo
  let hijo = ptoBusqueda.firstElementChild; //nos posicionamos en el 1er li

  do {
    if (hijo.firstElementChild.textContent == infoBuscar.value) {
      hijo.parentNode.removeChild(hijo); //Hijo le dice al padre que lo borre
      infoBuscar.value = "";
      return;
    }
    hijo = hijo.nextElementSibling;
  } while (hijo != null);

  infoBuscar.value = "";
  ptoResultado.textContent = "No se borro nada.";
}
