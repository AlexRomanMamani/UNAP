import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {

        int numero; // RESERVO ESPACIO EN MEMORIA VARIABLE NUMERO
        int numero2;// RESERVO ESPACIO EN MEMORIA VARIABLE NUMERO2
        int numero3; // RESULTADO

        System.out.println("Porfavor ingrese el primer numero: "); // SOLICITO INGRESAR PRIMER NUMERO
        Scanner lector = new Scanner(System.in);

        numero = lector.nextInt(); // GUARDO EL NUMERO INGRESADO EN LA VARIABLE NUMERO

        System.out.println("Ingrese el segundo numero: "); // SOLICITO INGRESAR SEGUNDO NUMERO

        numero2 = lector.nextInt(); // ALMACENO DATO NUMERICO EN VARIABLE numero2

        if (numero == numero2) { // SI EL NUMERO1 ES IGUAL AL NUMERO2
            numero3 = (numero + numero2); // SUMA DE LOS DOS NUMEROS
            System.out.println(numero3); // IMPRIMO EL RESULTADO
            if (numero3 % 2 == 0) {
                numero3 = (numero3 - 10);
                System.out.println(numero3);
                if (numero3 < 0) {
                    numero3 = (numero3 - numero3 * 2); // RESULTADO DE LA OPERACION
                    System.out.println(numero3);
                }
            } else {
                numero3 = (numero - numero2); // RESTA DE LOS DOS NUMEROS
            }

        } else {
            numero3 = (numero / numero2); // DIVIDE NUMERO1 POR NUMERO2
            System.out.println(numero3); // IMPRIME RESULTADO
            if (numero3 > 3) { // SI EL RESULTADO ES MAYOR A 3
                numero3 = numero - numero2; // RESTA DE LOS NUMEROS
                System.out.println("El resultado es: " + numero3); // IMPRIME RESULTADO
            } else {
                numero3 = numero3 * 10; // MULTIPLICA POR 10
                System.out.println("El resultado es: " + numero3);
            }

        }

    }
}
