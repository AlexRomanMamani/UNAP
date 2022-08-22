import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {

        int km;
        double litros;
        double consumo;

        Scanner lector = new Scanner(System.in);
        System.out.println("Ingrese la cantidad de Kilómetros recorridos: "); // Ingreso de datos
        km = lector.nextInt();
        System.out.println("Ingrese la cantidad de litros de combustible gastados: "); // Ingreso de datos (,)
        litros = lector.nextDouble();
        consumo = km / litros; // Cálculo del consumo

        System.out.println("El consumo de combustible por kilómetro es de: " + consumo); // Mostrar resultado

    }
}
