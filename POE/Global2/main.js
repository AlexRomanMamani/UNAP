function phonenumber(inputtxt) {
  var phoneno = /^\d{9}$/;
  if (inputtxt.value.match(phoneno)) {
    return true;
  } else {
    alert("El campo telefono es requerido: \n");
    return false;
  }
}

function agregarRegistro() {
  //-------CREACION LINEA Y CELDAS-----
  let nuevaFila = document.createElement("tr");
  let nuevaCelda1 = document.createElement("td");
  let nuevaCelda2 = document.createElement("td");
  let nuevaCelda3 = document.createElement("td");
  let nuevaCelda4 = document.createElement("td");
  let nuevaCelda5 = document.createElement("td");
  let nuevaCelda6 = document.createElement("td");
  let nuevaCelda7 = document.createElement("td");

  //----RESCATAR DATOS FORM----
  let lastId = document.getElementById("lastId");
  let nombre = document.getElementById("nombre");
  let apellido = document.getElementById("apellido");
  let direccion = document.getElementById("direccion");
  let email = document.getElementById("email");
  let telefono = document.getElementById("phone");
  let organizacion = document.getElementById("organizacion");

  //----VALIDAR TELEFONO----
  if (phonenumber(telefono) == false) {
    return false;
  }
  //----TRANSFORMAR A MAYUS----

  nombre.value = nombre.value.toUpperCase();
  apellido.value = apellido.value.toUpperCase();

  //----RELLENAR CELDAS----
  nuevaCelda1.textContent = lastId.value;
  nuevaCelda2.textContent = nombre.value;
  nuevaCelda3.textContent = apellido.value;
  nuevaCelda4.textContent = direccion.value;
  nuevaCelda5.textContent = email.value;
  nuevaCelda6.textContent = telefono.value;
  nuevaCelda7.textContent = organizacion.value;

  //----ESCONDER CELDAS----
  nuevaCelda4.setAttribute("hidden", true);
  nuevaCelda5.setAttribute("hidden", true);
  nuevaCelda6.setAttribute("hidden", true);
  nuevaCelda7.setAttribute("hidden", true);

  //----AGREGAR CELDAS A FILA----
  nuevaFila.prepend(nuevaCelda1);
  nuevaFila.appendChild(nuevaCelda3);
  nuevaFila.appendChild(nuevaCelda2);
  nuevaFila.appendChild(nuevaCelda4);
  nuevaFila.appendChild(nuevaCelda5);
  nuevaFila.appendChild(nuevaCelda6);
  nuevaFila.appendChild(nuevaCelda7);

  //----CORRELATIVO------
  nuevaFila.id = lastId.value;
  nuevaFila.className = "filas";
  lastId.value++;

  //----SACAR PRIMERA LETRA DE APELLIDO----
  let primeraLetra = apellido.value[0];

  //----ELEGIR TABLA CORRESPONDIENTE ABC----
  let tabla = document.getElementById("tabla" + primeraLetra);

  //----INSERTAR FILA A TABLA----
  tabla.prepend(nuevaFila);

  //----LIMPIAR CAMPOS DEL FORM----
  nombre.value = "";
  apellido.value = "";
  direccion.value = "";
  email.value = "";
  telefono.value = "";
  organizacion.value = "";
}

function correlativoMax() {
  let lastId = document.getElementById("lastId");
  let max = lastId.value - 1;

  let cuadroBuscar = document.getElementById("correlativo");

  cuadroBuscar.setAttribute("max", max);
}

function eliminarCorrelativo() {
  //----RESCATAR CUADRO DE BUSQUEDA y PTO RESPUESTA----
  let cuadroBuscar = document.getElementById("correlativo").value;
  let ptoRespuesta = document.getElementById("respuesta");

  //----VALIDAR QUE LA TABLA EXISTA----
  //----SI EXISTE: ELIMINA TABLA----
  //----SI NO: "CONTACTO NO ENCONTRADO"----
  if (document.getElementById(cuadroBuscar)) {
    alert("Se ha eliminado el contacto n°: " + cuadroBuscar);
    //----SELECCIONAR FILA A ELIMINAR----
    let filaEliminar = document.getElementById(cuadroBuscar); //cuadroBuscar=Id de Tabla

    //----ELIMINAR FILA----
    filaEliminar.parentNode.removeChild(filaEliminar);

    //----LIMPIAR CUADRO BUSQUEDA (no limpia...)----
    cuadroBuscar.value = "";
  } else {
    //----LIMPIAR CUADRO BUSQUEDA (no limpia...)----
    cuadroBuscar.value = "";
    //----MUESTRA MENSAJE-----
    ptoRespuesta.setAttribute("style", "color:red");
    ptoRespuesta.textContent = "Contacto no encontrado";
  }
}

function buscarCorrelativo() {
  //----RESCATAR CUADRO DE BUSQUEDA----
  let cuadroBuscar = document.getElementById("correlativo").value;
  //----PTO INSERCION----
  let ptoRespuesta = document.getElementById("respuesta");
  let nombre = document.getElementById("nombre");
  let apellido = document.getElementById("apellido");
  let direccion = document.getElementById("direccion");
  let email = document.getElementById("email");
  let telefono = document.getElementById("phone");
  let organizacion = document.getElementById("organizacion");
  let btnRegistrar = document.getElementById("btnRegistrar");

  //----VALIDAR QUE LA TABLA EXISTA----
  //----SI EXISTE: MUESTRA TABLA EN FORM----
  //----SI NO: "CONTACTO NO ENCONTRADO"----
  if (document.getElementById(cuadroBuscar)) {
    //----EN QUE TABLA BUSCAR----
    let filaBuscar = document.getElementById(cuadroBuscar); //cuadroBuscar=Id de Tabla

    //----NO EDITABLES----
    nombre.setAttribute("disabled", true);
    apellido.setAttribute("disabled", true);
    direccion.setAttribute("disabled", true);
    email.setAttribute("disabled", true);
    telefono.setAttribute("disabled", true);
    organizacion.setAttribute("disabled", true);
    btnRegistrar.setAttribute("disabled", true);

    //----RELLENAR FORM----
    apellido.value = filaBuscar.children[1].innerHTML;
    nombre.value = filaBuscar.children[2].innerHTML;
    direccion.value = filaBuscar.children[3].innerHTML;
    email.value = filaBuscar.children[4].innerHTML;
    telefono.value = filaBuscar.children[5].innerHTML;
    organizacion.value = filaBuscar.children[6].innerHTML;

    //----LIMPIAR RESPUESTA----
    ptoRespuesta.innerText = "";

    //----LIMPIAR CUADRO BUSQUEDA (no limpia...)----
    cuadroBuscar.value = "";
  } else {
    //----LIMPIAR CUADRO BUSQUEDA (no limpia...)----
    cuadroBuscar.value = "";
    ptoRespuesta.setAttribute("style", "color:red");
    ptoRespuesta.textContent = "Contacto no encontrado";
  }
}

function limpiar() {
  //----PTO INSERCION----
  let ptoRespuesta = document.getElementById("respuesta");
  let nombre = document.getElementById("nombre");
  let apellido = document.getElementById("apellido");
  let direccion = document.getElementById("direccion");
  let email = document.getElementById("email");
  let telefono = document.getElementById("phone");
  let organizacion = document.getElementById("organizacion");
  let btnRegistrar = document.getElementById("btnRegistrar");

  //----VOLVER EDITABLES----
  nombre.removeAttribute("disabled");
  apellido.removeAttribute("disabled");
  direccion.removeAttribute("disabled");
  email.removeAttribute("disabled");
  telefono.removeAttribute("disabled");
  organizacion.removeAttribute("disabled");
  btnRegistrar.removeAttribute("disabled");

  //----LIMPIAR FORM----
  apellido.value = "";
  nombre.value = "";
  direccion.value = "";
  email.value = "";
  telefono.value = "";
  organizacion.value = "";
  ptoRespuesta.textContent = "";
}

function buscarNombre() {
  //----RESCATAR CUADRO DE BUSQUEDA----
  let cuadroBuscar = document.getElementById("buscarNombre");
  //----PTO INSERCION----
  let ptoRespuesta = document.getElementById("respuesta");
  let nombre = document.getElementById("nombre");
  let apellido = document.getElementById("apellido");
  let direccion = document.getElementById("direccion");
  let email = document.getElementById("email");
  let telefono = document.getElementById("phone");
  let organizacion = document.getElementById("organizacion");

  //----TOMAR TODOS LOS TR----
  let ptoFila = document.getElementsByClassName("filas");

  //----TRANSFORMAR CUADRO BUSQUEDA A MAYUS----
  cuadroBuscar.value = cuadroBuscar.value.toUpperCase();

  //alert("cantidad de tr " + ptoFila.length);
  //alert("cuadro busqueda: " + cuadroBuscar.value);

  //----RECORRER TODOS LOS TR (MALO!!!!!_ARREGLAR)----
  for (let i = 0; i < ptoFila.length; i++) {
    //----SI LA CELDA QUE CONTIENE EL APELLIDO ES IGUAL A CUADRO DE BUSQUEDA----
    //----O LA CELDA QUE CONTIENE EL NOMBRE ES IGUAL A CUADRO DE BUSQUEDA----
    //----SI:COPIA DATOS AL FORM----
    //----NO:MENSAJE----
    //let filaID = document.getElementById(i);
    let filaID = document.getElementById(ptoFila[i].id);

    /*alert(
      "recorrido: " +
        [i] +
        "\n" +
        filaID +
        " FILA ID: " +
        filaID.id +
        "\n" +
        "Apellido: " +
        filaID.children[1].textContent +
        "  Nombre: " +
        filaID.children[2].textContent
    );*/
    //----SI NOMBRE O APELLIDO SON IGUAL A cuadroBuscar.value----
    if (
      filaID.children[2].textContent == cuadroBuscar.value ||
      filaID.children[1].textContent == cuadroBuscar.value
    ) {
      //alert("Exito!!! esta en esta fila :D -> " + filaID.id);

      //----NO EDITABLES----
      nombre.setAttribute("disabled", true);
      apellido.setAttribute("disabled", true);
      direccion.setAttribute("disabled", true);
      email.setAttribute("disabled", true);
      telefono.setAttribute("disabled", true);
      organizacion.setAttribute("disabled", true);

      //----RELLENAR FORM----
      apellido.value = filaID.children[1].innerHTML;
      nombre.value = filaID.children[2].innerHTML;
      direccion.value = filaID.children[3].innerHTML;
      email.value = filaID.children[4].innerHTML;
      telefono.value = filaID.children[5].innerHTML;
      organizacion.value = filaID.children[6].innerHTML;

      //----LIMPIAR RESPUESTA----
      ptoRespuesta.innerText = "";

      //----LIMPIAR CUADRO BUSQUEDA----
      cuadroBuscar.value = "";
      return;
    }
  }
  //----EN CASO DE QUE NO ENCUENTRE EL CONTACTO----
  cuadroBuscar.value = "";
  ptoRespuesta.setAttribute("style", "color:red");
  ptoRespuesta.textContent = "Contacto no encontrado";
}

//https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
