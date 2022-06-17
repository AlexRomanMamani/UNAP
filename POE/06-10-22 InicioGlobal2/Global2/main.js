function agregarRegistro() {
  //------------SACAR PRIMERA LETRA DE APELLIDO------------
  let apellido = document.getElementById("apellido");
  let primeraLetra = apellido.value[0];

  const abc = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "ñ",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  for (let i = 0; i < abc.length; i++) {
    if (primeraLetra === abc[i]) {
      // CREAR PTOINSERCION TABLE
      /*let A = document.getElementById("tableA");
    
    // CREAR ELEMENTO <tr> y <td>
    let fila = document.createElement("tr");
    let celda = document.createElement("td");

    // CREAR CELDAS
    let textoCelda = document.createTextNode("Hola Mundo!");
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
    A.appendChild(fila);*/
    } else {
    }
  }

  let arrayRegistro = [];

  arrayRegistro[0] = "";
  arrayRegistro[1] = document.getElementById("nombre");
  arrayRegistro[2] = document.getElementById("apellido");
  arrayRegistro[3] = document.getElementById("direccion");
  arrayRegistro[4] = document.getElementById("email");
  arrayRegistro[5] = document.getElementById("telefono");
  arrayRegistro[6] = document.getElementById("organizacion");

  //alert(arrayRegistro.length);

  //for (let i = 0; i < arrayRegistro.length; i++) {
  //alert(arrayRegistro[i].value);
  //}

  // ************SACAR PRIMERA LETRA DE UNA PALABRA
  //var cadena = "Hola mundo";
  //var primerCaracter = cadena.charAt(0);
  // primerCaracter es H
}
