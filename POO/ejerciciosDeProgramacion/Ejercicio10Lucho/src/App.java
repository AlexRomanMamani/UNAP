import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        String fecha; // FECHA

        Scanner lector = new Scanner(System.in);
        System.out.println("Fecha en formato DDMMAAAA: ");
        fecha = lector.nextLine();

        char[] fechaChar = String.valueOf(fecha).toCharArray();
        System.out.println(fechaChar[0] + fechaChar[1] + "/" + fechaChar[2] + fechaChar[3]);

        for (int i = 0; i < fechaChar.length; i++) {
            System.out.println(fechaChar[i]);
        }

    }
}
