import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {

        int numero;

        Scanner lector = new Scanner(System.in);
        System.out.println("Introduce un numero");
        numero = lector.nextInt();

        // NUMEROS CORRELATIVOS

        for (int i = 1; i <= numero; i++) {
            System.out.println(i);
        }
    }
}
