//FUNCIONES BASICAS

//SETEAR COOKIE
//cname: nombre de la variable (o cookie).
//cvalue: valor asignado a la cookie.
//cexp: dias de duracion de la cookie.
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

// Viernes 02/07/22
// OBTENER COOKIE
// getCookie recupera la informacion de la cookie name
// cname: es el nombre de la cookie

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

// CHECKEAR COOKIE
// checkCookie va a revisar si existe una cookie determinada y si retorna su valor, si no, pide un valor para la cookie

function checkCookie(cname) {
  let cvalue = getCookie(cname);

  if (cvalue != "") {
    alert("El valor de la cookie es: " + cvalue);
  } else {
    cvalue = prompt("Ingrese valor de la cookie", "");
    if (cvalue != "" && cvalue != null) {
      setCookie(cname, cvalue, 10);
    }
  }
}

// codeArray codifica un arreglo para que pueda ser guardado en una cookie
function codeArray(arreglo) {
  return JSON.stringify(arreglo); //codifica el arreglo a JSON
}

// decodeArray decodifica arreglo y muestra la posicion dada
// ccode: cookie codificada (JSON)
// pos: posicion a mostrar del arreglo decodificado
function decodeArray(ccode, pos) {
  //JSON.parse(value de la cookie)
  let decodificado = JSON.parse(getCookie(ccode));

  alert(decodificado[pos]);
}

// delCookie borra una cookie de nombre cname

function delCookie(cname) {
  let nuestra_cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";

  document.cookie = nuestra_cookie;
}
