import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {

        double numero1;
        double numero2;
        double numero3;
        double promedio;

        Scanner lector = new Scanner(System.in); // Creamos un objeto Scanner para leer desde la consola

        System.out.println("Introduce el primer numero: "); // Imprimimos un mensaje en la consola
        numero1 = lector.nextDouble(); // Leemos el primer numero introducido por el usuario
        System.out.println("Introduce el segundo numero: "); // Imprimimos un mensaje en la consola
        numero2 = lector.nextDouble(); // Leemos el segundo numero introducido por el usuario
        System.out.println("Introduce el tercer numero: "); // Imprimimos un mensaje en la consola
        numero3 = lector.nextDouble(); // Leemos el tercer numero introducido por el usuario

        promedio = (numero1 + numero2 + numero3) / 3; // Calculamos el promedio de los tres numeros introducidos
        System.out.println("El promedio de los tres es: " + promedio); // Imprimimos el promedio de los tres numeros

    }
}
