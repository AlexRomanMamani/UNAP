import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {

        int a = 0;
        int b = 1;
        int c = 1;
        int limite;

        Scanner lector = new Scanner(System.in);
        System.out.println("Introduzca un número: ");
        limite = lector.nextInt();
        for (int i = 1; i <= limite; i++) {
            System.out.println(a);
            c = a + b;
            a = b;
            b = c;

        }

    }
}
