import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {

        double numero;
        Scanner lector = new Scanner(System.in);
        System.out.println("Ingrese un numero: ");
        numero = lector.nextDouble();

        numero = numero - (numero * 15 / 100);

        System.out.println("Descontado el 15% queda: " + numero);

    }
}
