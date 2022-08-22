import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {

        String palabra1;
        String palabra2;
        String resultado;

        Scanner lector = new Scanner(System.in);
        System.out.println("Primera palabra: ");
        palabra1 = lector.nextLine();

        System.out.println("Segunda palabra: ");
        palabra2 = lector.nextLine();

        resultado = palabra1 + " " + palabra2;

        System.out.println(resultado);

    }
}
