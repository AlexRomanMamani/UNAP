function mayusPrimeraLetra(string) {
  return string[0].toUpperCase() + string.slice(1);
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
  let telefono = document.getElementById("telefono");
  let organizacion = document.getElementById("organizacion");

  //----TRANSFORMAR 1 LETRA DE APELLIDO A MAYUS----

  apellido.value = mayusPrimeraLetra(apellido.value);

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

  //----CORRELATIVO++------
  nuevaFila.id = lastId.value;
  lastId.value++;

  //----SACAR PRIMERA LETRA DE APELLIDO----
  let primeraLetra = apellido.value[0].toUpperCase();

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
  let telefono = document.getElementById("telefono");
  let organizacion = document.getElementById("organizacion");

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
  let telefono = document.getElementById("telefono");
  let organizacion = document.getElementById("organizacion");

  //----VOLVER EDITABLES----
  nombre.removeAttribute("disabled");
  apellido.removeAttribute("disabled");
  direccion.removeAttribute("disabled");
  email.removeAttribute("disabled");
  telefono.removeAttribute("disabled");
  organizacion.removeAttribute("disabled");

  //----LIMPIAR FORM----
  apellido.value = "";
  nombre.value = "";
  direccion.value = "";
  email.value = "";
  telefono.value = "";
  organizacion.value = "";
  ptoRespuesta.textContent = "";
}

function buscarNombreApellido() {
  //----RESCATAR CUADRO DE BUSQUEDA----
  let cuadroBuscar = document.getElementById("buscarNombre");
  //----PTO INSERCION----
  let ptoRespuesta = document.getElementById("respuesta");
  let nombre = document.getElementById("nombre");
  let apellido = document.getElementById("apellido");
  let direccion = document.getElementById("direccion");
  let email = document.getElementById("email");
  let telefono = document.getElementById("telefono");
  let organizacion = document.getElementById("organizacion");

  //----TOMAR TODOS LOS TR----
  let ptoFila = document.getElementsByTagName("tr");

  //----TRANSFORMAR PRIMERA LETRA A MAYUSCULA----
  cuadroBuscar.value = mayusPrimeraLetra(cuadroBuscar.value);

  alert("cantidad de tr " + ptoFila.length);
  alert("cuadro busqueda: " + cuadroBuscar.value);

  //----RECORRER TODOS LOS TR----
  for (let i = 1; i <= ptoFila.length; i++) {
    //----SI LA CELDA QUE CONTIENE EL APELLIDO ES IGUAL A CUADRO DE BUSQUEDA----
    //----O LA CELDA QUE CONTIENE EL NOMBRE ES IGUAL A CUADRO DE BUSQUEDA----
    //----SI:COPIA DATOS AL FORM----
    //----NO:MENSAJE----
    let filaID = document.getElementById(i);

    alert("recorrido: " + [i]);
    alert(filaID + " FILA ID: " + filaID.id);
    alert(filaID.children[2].textContent);

    if (filaID.children[2].textContent == cuadroBuscar.value) {
      alert("si, en fila " + filaID.id);

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
    } else {
      //----LIMPIAR CUADRO BUSQUEDA (no limpia...)----
      //cuadroBuscar.value = "";
      //ptoRespuesta.setAttribute("style", "color:red");
      //ptoRespuesta.textContent = "Contacto no encontrado";
      alert("no!");
    }
  }
}
