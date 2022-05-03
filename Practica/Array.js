const frutas = ["Manzana", "Platano"];
frutas[2]= "Sandia";
frutas[3]= "Pera";
frutas[4]= "Ciruela";
console.log(frutas.length);

let primero = frutas[0];
let segundo = frutas[frutas.length -1]
console.log(primero + segundo);

frutas.forEach(function(elemento, indice, array) {
    console.log(elemento, indice);
})

const cars = ["Saab", "Volvo", "BMW"];
cars[3]= "Mazda";

console.log(cars.length);
console.log(cars);
console.error("Error Error Error");
console.log(cars[2]);
//Asigna un nuevo valor a la casilla 0 del array cars
cars[0] = "Opel";
//imprime en consola en formato tabla
console.table(cars);
//typeof: describe el tipo 
console.log(typeof(cars));
console.log(typeof(primero));
//Si se nombra un indice, lo redefinira como objeto, y el .length traera 0
const persona = {primerNombre: "Juan", segundoNombre: "Daniel", apellido: "Morales", edad: "34"};
console.log(persona.primerNombre);

console.table(cars.sort());
let primerAuto = cars[0];
let ultimoAuto = cars[cars.length - 1];
console.log(primerAuto);
console.log(ultimoAuto);

console.table(frutas);

//Looping Array Elements using a for loop

let fLen = frutas.length;

let text = "Listado de frutas: \n";
for (let i = 0; i < fLen; i++) {
  text += frutas[i] + "\n";
}

console.log(text);

//Adding Array Elements push()

frutas.push("Limon");
frutas[frutas.length] = "Melon";
console.log(frutas);
console.log(Array.isArray(frutas));