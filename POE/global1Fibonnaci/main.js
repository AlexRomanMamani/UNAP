//DECLARACIÓN DE FUNCIÓN
function sucecionFibonacci(n) {
  let a, b, c;
  a = 1;
  b = 0;
  c = 0;
  for (let i = 0; i < n; i++) {
    console.log(c);
    c = a + b;
    a = b;
    b = c;
  }
}

//SOLICITA MEDIANTE PROMPT VARIABLE DE ENTRADA
let limite = parseInt(
  prompt(
    "Sucecion Fibonacci\nIngrese la cantidad de terminos que desea imprimir:",
    "10"
  )
);

if (limite < 1 || Number.isNaN(limite)) {
  //CONDICIONAL, SI LA VARIABLE DE ENTRADA ES UN NUMERO MENOR QUE 1 O NO ES UN NUMERO.
  alert(
    "ERROR\n- El valor ingresado:\n-- Debe ser un numero mayor a 0.\n-- No puede ser una letra o simbolo."
  );
} else if (limite == 1) {
  //CONDICIONAL, SI LA VARIABLE DE ENTRADA ES UNO.
  console.log("Primer termino de la Suceción Fibonacci:");
  sucecionFibonacci(limite);
} else {
  //CONDICIONAL, SI LA VARIABLE DE ENTRADA ES MAYOR QUE 0
  console.log("Los primeros " + limite + " terminos de la suceción Fibonacci:");
  sucecionFibonacci(limite);
}
