//Declaracion de variables.
var a = 0;
var b = 1;
var c;
var n = 10;
//Estructura de control
for (let k = 0; k <= n; k++) {
  c = b + a;
  a = b;
  b = c;
  console.log(a);
}
//console.log(a);
