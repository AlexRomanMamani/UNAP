import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        String usuario;
        System.out.println("Ingrese su nombre: "); // imprime en pantalla
        Scanner lector = new Scanner(System.in); // crea un objeto scanner para leer datos del teclado
        usuario = lector.nextLine(); // lee una linea del teclado y la guarda en la variable usuario
        System.out.println("Ahora estas en la matrix, " + usuario); // imprime en pantalla

    }
}
