function phonenumber(inputtxt) {
  var phoneno = /^\d{9}$/;
  if (inputtxt.value.match(phoneno)) {
    return true;
  } else {
    alert(
      "El campo telefono es requerido: \nFormato: 9123456789\nMax: 9 digitos"
    );
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
  let btnLimpiar = document.getElementById("btnLimpiar");

  //----TRANSFORMAR A MAYUS----

  nombre.value = nombre.value.toUpperCase();
  apellido.value = apellido.value.toUpperCase();
  //----VALIDAR TELEFONO----
  if (phonenumber(telefono) == false) {
    return false;
  }
  //----(EDITAR) CREAR ARRAY----

  let arreglo = [];
  arreglo[0] = lastId.value;
  arreglo[1] = nombre.value.toUpperCase();
  arreglo[2] = apellido.value.toUpperCase();
  arreglo[3] = direccion.value;
  arreglo[4] = email.value;
  arreglo[5] = telefono.value;
  arreglo[6] = organizacion.value;

  //----SETEAR ARREGLO COMO COOKIE
  setCookie("contacto" + lastId.value, codeArray(arreglo), 5);

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

  //----HABILITAR BTNLIMPIAR (EDITAR)-----
  btnLimpiar.removeAttribute("disabled");
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
  let btnEditar = document.getElementById("btnEditar");
  let idEditar = document.getElementById("idEditar");

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
    btnEditar.removeAttribute("disabled");

    //----RELLENAR FORM----
    apellido.value = filaBuscar.children[1].innerHTML;
    nombre.value = filaBuscar.children[2].innerHTML;
    direccion.value = filaBuscar.children[3].innerHTML;
    email.value = filaBuscar.children[4].innerHTML;
    telefono.value = filaBuscar.children[5].innerHTML;
    organizacion.value = filaBuscar.children[6].innerHTML;

    //----REGISTRAR idEditar----
    idEditar.value = filaBuscar.id;

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
  let btnEditar = document.getElementById("btnEditar");

  //----VOLVER EDITABLES----
  nombre.removeAttribute("disabled");
  apellido.removeAttribute("disabled");
  direccion.removeAttribute("disabled");
  email.removeAttribute("disabled");
  telefono.removeAttribute("disabled");
  organizacion.removeAttribute("disabled");
  btnRegistrar.removeAttribute("disabled");
  btnEditar.setAttribute("disabled", true);

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
  let btnRegistrar = document.getElementById("btnRegistrar");
  let btnEditar = document.getElementById("btnEditar");
  let idEditar = document.getElementById("idEditar");

  //----TOMAR TODOS LOS TR----
  let ptoFila = document.getElementsByClassName("filas");

  //----TRANSFORMAR CUADRO BUSQUEDA A MAYUS----
  cuadroBuscar.value = cuadroBuscar.value.toUpperCase();

  //alert("cantidad de tr " + ptoFila.length);
  //alert("cuadro busqueda: " + cuadroBuscar.value);

  //----RECORRER TODOS LOS TR----
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
      btnRegistrar.setAttribute("disabled", true);
      btnEditar.removeAttribute("disabled");

      //----RELLENAR FORM----
      apellido.value = filaID.children[1].innerHTML;
      nombre.value = filaID.children[2].innerHTML;
      direccion.value = filaID.children[3].innerHTML;
      email.value = filaID.children[4].innerHTML;
      telefono.value = filaID.children[5].innerHTML;
      organizacion.value = filaID.children[6].innerHTML;

      //----REGISTRAR idEditar----
      idEditar.value = filaID.id;

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

function editar() {
  let cuadroBuscar = document.getElementById("correlativo").value;
  let cuadroBuscarNombre = document.getElementById("buscarNombre");
  let ptoRespuesta = document.getElementById("respuesta");
  let nombre = document.getElementById("nombre");
  let apellido = document.getElementById("apellido");
  let direccion = document.getElementById("direccion");
  let email = document.getElementById("email");
  let telefono = document.getElementById("phone");
  let organizacion = document.getElementById("organizacion");
  let btnRegistrar = document.getElementById("btnRegistrar");
  let btnEditar = document.getElementById("btnEditar");
  let idEditar = document.getElementById("idEditar");
  let btnLimpiar = document.getElementById("btnLimpiar");

  //----HACER CAMPOS DE FORM EDITABLES----
  nombre.removeAttribute("disabled");
  apellido.removeAttribute("disabled");
  direccion.removeAttribute("disabled");
  email.removeAttribute("disabled");
  telefono.removeAttribute("disabled");
  organizacion.removeAttribute("disabled");
  btnRegistrar.removeAttribute("disabled");

  //----DESABILITAR BTN'S----
  //btnLimpiar.setAttribute("disabled", true);
  btnEditar.setAttribute("disabled", true);

  //----TOMAR ID DE LA FILA A ELIMINAR----
  let delTr = document.getElementById(idEditar.value);

  //----ELIMINAR FILA----
  delTr.parentNode.removeChild(delTr);

  //----ELIMINAR COOKIE----

  alert("contacto" + idEditar.value);
  delCookie("contacto" + idEditar.value);
}

function setCookie(cname, cvalue, cexp) {
  // recuperar la fecha actual
  const d = new Date(); // new Date() nos da la fecha y hora actual

  let fecha_final = d.getTime() + cexp * 24 * 60 * 60 * 1000; // cexp*hor*min*seg*milseg

  d.setTime(fecha_final); //timestamp
  //nombre=Alex; expires= fecha
  let nuestra_cookie = cname + "=" + cvalue + "; expires=" + d.toUTCString(); //construccion de cookie

  alert(nuestra_cookie);
  //setear cookie
  document.cookie = nuestra_cookie;
}

function codeArray(arreglo) {
  //console.log(arreglo);
  return JSON.stringify(arreglo); //codifica el arreglo a JSON
}

function cargarCookies() {
  //alert(document.cookie);
  let ca = document.cookie.split(";"); //cookie separada
  alert(ca.length);
  alert(document.cookie);

  for (let i = 1; i <= ca.length; i++) {
    //-------CREACION LINEA Y CELDAS-----
    let nuevaFila = document.createElement("tr");
    let nuevaCelda1 = document.createElement("td");
    let nuevaCelda2 = document.createElement("td");
    let nuevaCelda3 = document.createElement("td");
    let nuevaCelda4 = document.createElement("td");
    let nuevaCelda5 = document.createElement("td");
    let nuevaCelda6 = document.createElement("td");
    let nuevaCelda7 = document.createElement("td");

    alert(ca[0]);

    //----RESCATAR VALUE DECODED DE COOKIE----
    let lastId = document.getElementById("lastId");
    let nombre = decodeArray("contacto" + [i], 1);
    let apellido = decodeArray("contacto" + [i], 2);
    let direccion = decodeArray("contacto" + [i], 3);
    let email = decodeArray("contacto" + [i], 4);
    let telefono = decodeArray("contacto" + [i], 5);
    let organizacion = decodeArray("contacto" + [i], 6);
    alert(apellido);

    //----RELLENAR CELDAS----
    nuevaCelda1.textContent = lastId.value;
    nuevaCelda2.textContent = nombre;
    nuevaCelda3.textContent = apellido;
    nuevaCelda4.textContent = direccion;
    nuevaCelda5.textContent = email;
    nuevaCelda6.textContent = telefono;
    nuevaCelda7.textContent = organizacion;
    alert(nuevaCelda2.textContent);
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
    let primeraLetra = apellido.charAt(0);

    //----ELEGIR TABLA CORRESPONDIENTE ABC----
    let tabla = document.getElementById("tabla" + primeraLetra);

    //----INSERTAR FILA A TABLA----
    tabla.prepend(nuevaFila);
  }
}

function decodeArray(ccode, pos) {
  //JSON.parse(value de la cookie)
  let decodificado = JSON.parse(getCookie(ccode));

  return decodificado[pos];
}
function getCookie(cname) {
  let name = cname + "=";

  //decodificar la cookie
  let cookieDecod = decodeURIComponent(document.cookie);

  let ca = cookieDecod.split(";"); //cookie separada

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];

    while (c.charAt(0) == " ") {
      //previene tomar espacios vacios
      c = c.substring(1);
    }
    //substring corta desde indica hasta otro indice, va a cortar todo lo que no sea name, y lo retorna

    if (c.indexOf(name) == 0) {
      //busca con indexOf "nombre =", y guarda todo lo que resta "Alex Mamani"
      return c.substring(name.length, c.length); //retorna un substring, que es un recorte que toma solo el value
    }
  }
  alert("no se encontro");
  return "";
}
function delCookie(cname) {
  let nuestra_cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";

  document.cookie = nuestra_cookie;
}
