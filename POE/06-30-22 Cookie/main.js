//FUNCIONES BASICAS
//SETEAR COOKIE
//cname: nombre de la variable (o cookie).
//cvalue: valor asignado a la cookie.
//cexp: dias de duracion de la cookie.
function setCookie(cname, cvalue, cexp) {
  // recuperar la fecha actual
  const d = new Date();
  let fecha_final = d.getTime() + cexp * 24 * 60 * 60 * 1000;

  d.setTime(fecha_final); //timestamp
  //nombre=Alex; expires= fecha
  let nuestra_cookie = cname + "=" + cvalue + "; expires=" + d.toUTCString(); //construccion de cookie

  alert(nuestra_cookie);
  //setear cookie
  document.cookie = nuestra_cookie;
}
//OBTENER COOKIE
//CHECKEAR COOKIE
