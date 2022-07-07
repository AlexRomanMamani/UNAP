function generarResultado() {
  //res toma valor de text resultado
  let res = document.getElementById("resultado");
  // bus toma valor de campo de busqueda
  let bus = document.getElementById("busqueda");

  //Texto resultado(res) toma el valor del campo de busqueda(bus)
  res.textContent = bus.value; //.textContent : saca el texto del elemento.
  bus.value = "";

  let res3 = document.getElementsByTagName("a");

  for (let i = 0; i < res3.length; i++) {
    if (res.textContent == res3[i].text) {
      res.textContent = res3[i];
    }
  }
}
