let tipoProducto=0;
let cantidad=0;
let descuento=0;
let costoTotal=0;
let costoProduccion=0;

tipoProducto= prompt("Ingrese el tipo de producto: ","1");

if (tipoProducto<1 || tipoProducto>5) {
    alert("Producto equivocado");
    
} else {
    cantidad= prompt("Ingrese la cantidad: ", "10")
    parseInt(cantidad);
    
    switch (parseInt(tipoProducto)) {
        case 1:
            costoProduccion= (cantidad*20200)+70200;
            if (cantidad>=50) {
                descuento= costoProduccion*0.45;
                costoTotal= costoProduccion+descuento;
                alert("Costo Produccion: $"+costoProduccion+"\nDescuento: $"+descuento + "\nCosto Total: $"+costoTotal);
            } else {
                alert("Costo Produccion: $"+costoProduccion)
            }
            break;
        case 2:
            costoProduccion= (cantidad*20500)+70500;
            if (cantidad>=50) {
                descuento= costoProduccion*0.45;
                costoTotal= costoProduccion+descuento;
                alert("Costo Produccion: $"+costoProduccion+"\nDescuento: $"+descuento + "\nCosto Total: $"+costoTotal);
            } else {
                alert("Costo Produccion: $"+costoProduccion)
            }
            break;
        case 3:
            costoProduccion= (cantidad*20750)+70750;
            if (cantidad>=50) {
                descuento= costoProduccion*0.45;
                costoTotal= costoProduccion+descuento;
                alert("Costo Produccion: $"+costoProduccion+"\nDescuento: $"+descuento + "\nCosto Total: $"+costoTotal);
            } else {
                alert("Costo Produccion: $"+costoProduccion)
            }
            break;
        case 4:
            costoProduccion= (cantidad*40200)+90200;
            if (cantidad>100) {
                descuento= costoProduccion*0.85;
                costoTotal= costoProduccion+descuento;
                alert("Costo Produccion: $"+costoProduccion+"\nDescuento: $"+descuento + "\nCosto Total: $"+costoTotal);
            } else {
                alert("Costo Produccion: $"+costoProduccion)
            }
            break;
        case 5:
            costoProduccion= (cantidad*30080)+80800;
            if (cantidad>100) {
                descuento= costoProduccion*0.85;
                costoTotal= costoProduccion+descuento;
                alert("Costo Produccion: $"+costoProduccion+"\nDescuento: $"+descuento + "\nCosto Total: $"+costoTotal);
            } else {
                alert("Costo Produccion: $"+costoProduccion)
            }
            break;
       
    }
}

