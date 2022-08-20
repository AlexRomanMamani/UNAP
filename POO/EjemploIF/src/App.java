import javax.print.event.PrintJobListener;

import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        int numero = 5;
        boolean verdadero = true;

        System.out.println("Porfavor ingrese el numero: "); // imprime en pantalla
        Scanner lector = new Scanner(System.in); // lee lo que el usuario ingresa
        int numero2 = lector.nextInt(); // lee el numero ingresado por el usuario

        if (numero2 == 5 && verdadero) { // si el numero ingresado es 5 o si el valor de verdadero es true
            System.out.println("Se entro al if"); // imprime en pantalla
        } else {
            System.out.println("No se entro al if"); // imprime en pantalla
        }
    }
}
