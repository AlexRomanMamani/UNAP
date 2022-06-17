function agregarRegistro() {
  //------------SACAR PRIMERA LETRA DE APELLIDO------------
  let apellido = document.getElementById("apellido");
  let primeraLetra = apellido.value[0];

  const abc = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "Ñ",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let arrayRegistro = [];

  arrayRegistro[0] = "";
  arrayRegistro[1] = document.getElementById("nombre");
  arrayRegistro[2] = document.getElementById("apellido");
  arrayRegistro[3] = document.getElementById("direccion");
  arrayRegistro[4] = document.getElementById("email");
  arrayRegistro[5] = document.getElementById("telefono");
  arrayRegistro[6] = document.getElementById("organizacion");

  for (let i = 0; i < abc.length; i++) {
    if (primeraLetra === abc[i]) {
      let mostrar = abc[i];
      alert(mostrar);
      // CREAR PTOINSERCION TABLE
      let tabla = document.getElementById(abc[i]);

      // CREAR ELEMENTO <tr> y <td>
      let fila = document.createElement("tr");

      for (let j = 0; j < arrayRegistro.length; j++) {
        let celda = document.createElement("td");
        celda.appendChild(arrayRegistro[j].value);
        alert(arrayRegistro.length);
      }
      fila.appendChild(celda);
      tabla.appendChild(fila);

      /*
      let celda = document.createElement("td");

      // CREAR CELDAS
      let textoCelda = document.createTextNode("Hola Mundo!");
      celda.appendChild(textoCelda);
      fila.appendChild(celda);
      tabla.appendChild(fila);*/
    } else {
    }
  }

  //alert(arrayRegistro.length);

  //for (let i = 0; i < arrayRegistro.length; i++) {
  //alert(arrayRegistro[i].value);
  //}

  // ************SACAR PRIMERA LETRA DE UNA PALABRA
  //var cadena = "Hola mundo";
  //var primerCaracter = cadena.charAt(0);
  // primerCaracter es H
}
