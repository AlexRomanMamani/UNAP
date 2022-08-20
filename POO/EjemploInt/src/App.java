import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        System.out.println("Hello, World!");

        int numero; // RESERVO ESPACIO EN MEMORIA
        int numero2;

        System.out.println("Porfavor ingrese un numero: ");
        Scanner lector = new Scanner(System.in);

        numero = lector.nextInt(); // LEER UN NUMERO (objeto lector, clase Scanner)

        System.out.println("El numero que ingreso es: " + numero);
    }
}
