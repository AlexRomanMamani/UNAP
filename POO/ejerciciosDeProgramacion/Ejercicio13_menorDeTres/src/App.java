import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {

        int numero1;
        int numero2;
        int numero3;

        Scanner lector = new Scanner(System.in);
        System.out.println("Primer numero: ");
        numero1 = lector.nextInt();
        System.out.println("Segundo numero: ");
        numero2 = lector.nextInt();
        System.out.println("Tercer numero: ");
        numero3 = lector.nextInt();

        if (numero1 < numero2 && numero1 < numero3) {
            System.out.println("Menor " + numero1);
        } else if (numero2 < numero1 && numero2 < numero3) {
            System.out.println("Menor " + numero2);
        } else {
            System.out.println("Menor " + numero3);
        }

    }
}
