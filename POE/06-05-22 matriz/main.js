console.log("hola mundo");
const numeros = [1, 2, 3, 4, 5];
console.table(numeros);

//key=posiciones
//value=valores

//imprimir el valor de la posicion 3
console.log(numeros[3]);

console.log("Imprimir posiciones");

//imprimir todas las posiciones con un for
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

//imprimir todas las posiciones con un for, pero al reves
console.log("imprimir posiciones al revez");
for (let i = 4; i >= 0; i--) {
  console.log(numeros[i]);
}

//forin -> key (posiciones)
console.log("forin (key, posiciones");
for (const key in numeros) {
  console.log(key);
}

//forof -> value (valores)
console.log("forof (values)");
for (const iterator of numeros) {
  console.log(iterator);
}

//foreach (funcion anonima)
console.log("foreach");
numeros.forEach(element => {
  console.log(element);
});

//sumar todos los valores del array
console.log("suma de valores del array");
let sumatoria = 0;
for (let i = 4; i >= 0; i--) {
  sumatoria += numeros[i]; //sumatoria = sumatoria + numeros[i]
}
console.log(sumatoria);

//MATRIZ
console.log("Matriz");
const matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.table(matriz);

//recorrer matriz por fila
//primero la fila y luego la columna
console.log("Recorrer (imprimir) elementos de la matriz");
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(matriz[i][j]);
  }
}

//recorrer matriz con forof
console.log("Recorrer matriz con forof");
for (const fila of matriz) {
  for (const col of fila) {
    console.log(col);
  }
}

//recorrer matriz por columna
//siempre el for de afuera se mueve mas lentro que el de afuera
//primero la columna y luego la fila
console.log("Recorrer (imprimir) elementos de la matriz por columna");
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(matriz[j][i]);
  }
}

//imprimir solo la diagonal de la matriz
console.log("imprimir solo la diagonal de la matriz");
for (let i = 0; i < 3; i++) {
  console.log(matriz[i][i]);
}
