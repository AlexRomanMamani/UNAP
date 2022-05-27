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

  return a;
}

function funcion() {
  let limite = document.getElementById("numero").value;

  document.getElementById("resultado").innerHTML = sucecionFibonacci(limite);
}
