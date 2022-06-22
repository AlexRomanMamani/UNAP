var d = document;
var abc = [
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
var memoria = new Array();

function Agenda() {
  this.Listar = function () {
    var div = d.createElement("div");
    div.id = "agenda";
    d.body.appendChild(div);
    for (var i = 0; i < abc.length; i++) {
      var letras = d.createElement("div");
      letras.id = abc[i].toLowerCase();
      letras.className = "letras";
      div.appendChild(letras);
      var tit = d.createElement("h3");
      letras.appendChild(tit);
      texto = d.createTextNode(abc[i]);
      tit.appendChild(texto);
      var ul = d.createElement("ul");
      ul.id = "ul" + abc[i].toLowerCase();
      div.appendChild(ul);
    }
  };

  this.Contacto = function (nombre, numero, correo) {
    this.nombre = nombre;
    this.numero = numero;
    this.correo = correo;
  };

  this.Insertar = function () {
    var nom = prompt("Nombre de Contacto (Obligatorio)*");
    var num = prompt("Telefono de Contacto (Obligatorio)*");
    var cor = prompt("Correo de Contacto");
    if (nom != "" && num != "") {
      var c = new this.Contacto(nom, num, cor);
      memoria.push(c);
      this.Guardar(memoria);
    } else
      alert(
        "Debe llenar las opciones Nombre y Numero\npara hacer el ingreso del contacto correctamente."
      );
  };

  this.Guardar = function (arr) {
    for (var i = arr.length - 1; i < arr.length; i++) {
      if (arr != null) {
        var inic = arr[i].nombre.substring(0, 1).toLowerCase();
        var div = d.getElementById(inic);
        var ul = d.getElementById("ul" + inic);
        var li = d.createElement("li");
        var info = d.createTextNode(
          "Nombre: " +
            arr[i].nombre +
            " | Telefono: " +
            arr[i].numero +
            " | Correo: " +
            arr[i].correo
        );
        li.appendChild(info);
        ul.appendChild(li);
      } else alert("No hay registros.");
    }
  };
}

function init() {
  var c = new Agenda();
  c.Listar();
}
function add() {
  var c = new Agenda();
  c.Insertar();
}

window.addEventListener("load", init, true);
var click = d.getElementById("agregar").addEventListener("click", add, true);
