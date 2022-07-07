//AGREGAR NODO BUSCAR A BOTON
function buscarURL() {
  //RES RESCATAR INFORMACION DE CUADRO ID RESULTADO
  //BUS RESCATAR INFO DE CUADRO BUSCAR
  let infoBuscar = document.getElementById("buscar");
  //DETERMINAR DONDE BUSCAR
  let ptoBusqueda = document.getElementsByTagName("li");
  //Texto resultado(res) toma el valor del campo de busqueda(bus)

  //BUSCAR INFO DE UL

  //MIENTRAS HIJO SEA DISTINTO DE NULO
  for (let i = 0; i < ptoBusqueda.length; i++) {
    let link = ptoBusqueda[i].firstElementChild;
    alert(link);
  }
}
/*
  //ITERAR SOBRE LOS LI Y COMPARARLOS CON BUS
  for (let i = 0; i < res3.length; i++) {
    if (res.textContent == res3[i].text) {
      //SI NO ESTA AGREGAR MENSAJE*
      res.textContent = res3[i];
    }
  }
}^*/

//AGREGAR NODOS A BOTONES
function agregarURL() {
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
