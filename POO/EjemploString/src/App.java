import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        System.out.println("Hello, World!");
        System.out.println("2\n"); // new line
        System.out.println("3");

        // VARIABLES
        String palabra;
        System.out.print("Porfavor ingrese una palabra: ");
        Scanner lector = new Scanner(System.in); // lector de teclado
        palabra = lector.nextLine(); // lee la palabra
        System.out.println("La palabra es: " + palabra);

    }
}
