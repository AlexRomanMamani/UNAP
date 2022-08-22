import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {

        int shows; // CANTIDAD DE SHOWS MUSICALES

        Scanner lector = new Scanner(System.in); // CREO UN OBJETO DE TIPO SCANNER PARA PODER LEER DATOS DEL USUARIO
        System.out.println("Shows vistos en el ultimo año: "); // PIDE AL USUARIO LA CANTIDAD DE SHOWS MUSICALES QUE VIO
        shows = lector.nextInt(); // GUARDA EN LA VARIABLE shows EL VALOR QUE INGRESO EL USUARIO

        if (shows > 3) { // SI LA CANTIDAD DE SHOWS ES MAYOR A 3
            System.out.println("True"); // IMPRIME TRUE
        } else { // SI NO
            System.out.println("False"); // IMPRIME FALSE
        }

    }
}
