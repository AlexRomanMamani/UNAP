import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        // AQUI VA EL CODIGO

        System.out.println("Ingrese el titulo: ");
        Scanner lector = new Scanner(System.in);
        String title = lector.nextLine();
        System.out.println("Ingrese el formato: ");
        String format = lector.nextLine();

        Peliculas pelicula1 = new Peliculas(title, format);

        String a="NuevoFormato";
        pelicula1.setFormato(a);

        pelicula1.mostrar();






    }
}
