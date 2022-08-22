import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {

        int fecha; // FECHA

        Scanner lector = new Scanner(System.in);
        System.out.println("Fecha en formato DDMMAAAA: ");
        fecha = lector.nextInt();

        int dia = fecha / 1000000; // DIA
        int mes = (fecha / 10000) % 100; // MES
        int año = fecha % 10000; // AÑO
        System.out.println(dia + "/" + mes + "/" + año);

    }
}
