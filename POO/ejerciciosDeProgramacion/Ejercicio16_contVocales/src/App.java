import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {

        // CONTAR VOCALES
        Scanner lector = new Scanner(System.in);
        System.out.println("Frase: ");
        String frase = lector.nextLine();

        int contador = 0;
        for (int i = 0; i < frase.length(); i++) {
            if (frase.charAt(i) == 'a' || frase.charAt(i) == 'e' || frase.charAt(i) == 'i' || frase.charAt(i) == 'o'
                    || frase.charAt(i) == 'u') {
                contador++;
            }
        }
        System.out.println("Vocales: " + contador);
    }
}
