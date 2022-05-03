//clase 28/04/22
//______________________________
//**realizar un ejemplo de if else**

/*let edad = 18;

if (edad>= 18) {
  //este es el primer camimo o true
  console.log("es mayor de edad");
} else {
  //este es el segundo camino o false
  console.log("es menor de edad");
}
*/
//______________________________

//**Ejemplo if else if else**

/*let edad=23;

if (edad < 12) {
  console.log("es infante");
} else if(edad < 18){
  console.log("es adolecente");
}else if(edad < 30) {
  console.log("es joven");
} else if(edad < 65){
  console.log("es afulto");
}else{
  console.log("es adulto mayor");
}*/

//___________________________________________________
//Ejemplo if else if else anidado en un if else

//let edad=-23;

//este primer if controla que la edad sea un numero positivo
/*function revisarEdad(edad){
  if (edad >= 0) { 
    if (edad < 12) {
      console.log("es infante");
    } else if(edad < 18){
      console.log("es adolecente");
    }else if(edad < 30) {
      console.log("es joven");
    } else if(edad < 65){
      console.log("es adulto");
    }else{
      console.log("es adulto mayor");
    }
  } else {
    console.log("edad no válida");
  }
}

revisarEdad(10);
revisarEdad(35);
revisarEdad(-14);
revisarEdad(100);
*/
//___________________________________________
//Ejemplo con return
/*function revisarEdad(edad){
  if (edad >= 0) { 
    if (edad < 12) {
      return("es infante");
    } else if(edad < 18){
      return("es adolecente");
    }else if(edad < 30) {
      return("es joven");
    } else if(edad < 65){
      return("es adulto");
    }else{
      return("es adulto mayor");
    }
  } else {
    return("edad no válida");
  }
}
//recibir un return en una variable
let msg = revisarEdad(10); 
console.log(msg); //console.log es una funcion predefinida
//recibir y enviarlo y enviarlo de inmediato a otra funcion
console.log(revisarEdad(30)); 
*/

//Realizar ejemplo Switch

let control=1;

switch (control) {
  case 1:
    console.log("la opcion es " + control);
    break;
    
  case 2:
    console.log("la opcion es " + control);
    break;
    
  case 3:
    console.log("la opcion es " + control);   
  break;
  
  case 4:
    console.log("la opcion es " + control);
    break;
    
  case 100:
    console.log("la opcion es " + control);
    break;
    
  default:
    console.log("invalido");
    break;
}


