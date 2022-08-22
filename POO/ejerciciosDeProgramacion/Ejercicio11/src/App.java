import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {

        int numero;
        boolean esEntero;
        Scanner lector = new Scanner(System.in);
        System.out.println("Numero entero: ");
        numero = lector.nextInt();

        // NUMERO PAR
        if (numero % 2 == 0) {
            System.out.println(esEntero = true);
        } else {
            System.out.println(esEntero = false);
        }

    }

}
