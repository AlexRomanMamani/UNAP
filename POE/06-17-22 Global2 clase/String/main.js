let palabra1 = "Andres";
let palabra2 = "antonio";

palabra1 = palabra1.toUpperCase();
palabra2 = palabra2.toUpperCase();

let letra1 = palabra1.charAt(0);
let letra2 = palabra2.charAt(0);

document.write("La primera letra de "+palabra1+" es "+letra1);
document.write("<br>");
document.write("La primera letra de "+palabra2+" es "+letra2);

document.write("<br><br><br>");
document.write("La letra "+letra1+" esta ");
if(letra1 > letra2){
    document.write("despues que "+letra2);
}else if(letra1 < letra2){
    document.write("antes que "+letra2);
}else{
    document.write("en la misma posicion que "+letra2);
}