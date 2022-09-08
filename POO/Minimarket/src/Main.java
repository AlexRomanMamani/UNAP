
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        //Creamos un array de objetos de la clase Mercaderia
        Mercaderia array[] = new Mercaderia[3];

        //Creamos objetos en cada posicion
        array[0] = new Mercaderia("Coca-Cola", 10, 1500);
        array[1] = new Mercaderia("Leche Colum", 20, 3500);
        array[2] = new Mercaderia("Chocolate Trensito", 30, 1500);

        //Recorremos el array para mostrar el stock de mercaderias
        for (int i = 0; i < array.length; i++) {

            System.out.println("Producto: " + array[i].getNombre()
                    + "\n Cantidad: " + array[i].getCantidadProductos()
                    + "\n Precio: " + array[i].getPrecioProductos());
        }

    }

}
