import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {

        int numero1;
        int numero2;

        Scanner lector = new Scanner(System.in);
        System.out.println("Un numero: ");
        numero1 = lector.nextInt();
        System.out.println("Otro numero distinto: ");
        numero2 = lector.nextInt();

        if (numero1 > numero2) {
            System.out.println(numero1 + " es mayor.");
        } else {
            System.out.println(numero2 + " es mayor.");

        }

    }
}
