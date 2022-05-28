function generarResultado() {
  //res toma valor de text resultado
  let res = document.getElementById("resultado");
  // res2 toma valor de campo de busqueda
  let res2 = document.getElementById("busqueda");

  res.textContent = res2.value; //.textContent : saca el texto del elemento.
  res2.value = "";

  let res3 = document.getElementsByTagName("a");

  for (let i = 0; i < res3.length; i++) {
    if (res.textContent == res3[i].text) {
      res.textContent = res3[i];
    }
  }
}
