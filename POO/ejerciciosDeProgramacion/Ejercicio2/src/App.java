import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        double decimal;
        int entero;
        double resultado;

        System.out.println("Escriba un numero con decimales: "); // Escribir un numero con decimales (,)
        Scanner lector = new Scanner(System.in);
        decimal = lector.nextDouble();

        System.out.println("Escriba un numero entero: "); // Escribir un numero entero
        entero = lector.nextInt();

        resultado = decimal + entero; // Sumar los dos numeros
        System.out.println("El resultado de la suma es: " + resultado); // Mostrar el resultado

    }
}
