import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        double fahrenheit;
        double celsius;

        Scanner lector = new Scanner(System.in); // CREAR OBJETO SCANNER
        System.out.println("Ingresa una temperatura expresada en Fahrenheit: "); // PEDIR TEMPERATURA
        fahrenheit = lector.nextDouble(); // LEER TEMPERATURA
        celsius = (fahrenheit - 32) * 5 / 9; // CONVERTIR A CELSIUS
        System.out.println("La temperatura expresada en Celsius es: " + celsius); // IMPRIMIR TEMPERATURA
    }
}
