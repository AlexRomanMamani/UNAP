let nombre = "Alex Mamani";
let arreglo = ["juan", "pedro", "miguel"];

//INVOCAR LOCAL STORAGE
//crea un espacio dentro de la memoria
//setItem("nombre de la celda", lo que se guarda)
//PERSISTE HASTA QUE SE CIERRE EL NAVEGADOR
//SE PUEDEN GUARDAR STRINGS Y ARRAY
localStorage.setItem("nm", nombre);
localStorage.setItem("arr", arreglo);

//OBTENER ITEM DESDE EL LOCALSTORAGE
let nombre2 = localStorage.getItem("nm");

document.write(arreglo);

//ELIMINAR ITEM DEL LOCALSTORAGE
//localStorage.removeItem("nm");

let objeto = {
  nombre: "Alex",
  edad: 33,
  correo: "alex@correo.cl",
};

localStorage.setItem("intentoObjeto", JSON.stringify(objeto));

let json = JSON.parse(localStorage.getItem("intentoObjeto"));

console.log(json);
