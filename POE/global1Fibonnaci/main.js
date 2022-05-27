//DECLARACIÓN DE FUNCIÓN
function sucesionFibonacci(n) {
  let a = 1;
  let b = 0;
  let c = 0;

  for (let i = 1; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
    console.log(a);
  }

  return a;
}

function funcion() {
  let limite = document.getElementById("numero").value;

  document.getElementById("resultado").innerHTML = sucesionFibonacci(limite);
}
