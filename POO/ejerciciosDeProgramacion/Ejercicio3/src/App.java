import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        int numero1;
        int numero2;
        int resultadoSuma;
        int numero3;
        int resultadoMulti;

        System.out.println("Ingrese el primer numero: ");
        Scanner lector = new Scanner(System.in);
        numero1 = lector.nextInt();
        System.out.println("Ingrese el segundo numero: ");
        numero2 = lector.nextInt();
        resultadoSuma = numero1 + numero2; // suma
        System.out.println("El resultado de la suma es: " + resultadoSuma);
        System.out.println("Ingrese el tercer numero: ");
        numero3 = lector.nextInt();
        resultadoMulti = resultadoSuma * numero3; // multiplicacion
        System.out.println("El resultado de la multiplicacion es: " + resultadoMulti);
    }
}
