public class App {
    public static void main(String[] args) throws Exception {

        Peliculas pelicula1 = new Peliculas("El señor de los anillos", "Fantasia");
        Peliculas pelicula2 = new Peliculas("El hobbit", "Fantasia");
        Cine cine1 = new Cine("Cinemark");

        pelicula1.setClasificacion("12");

        String movieRating = pelicula1.getClasificacion();

        System.out.println("La pelicula " + pelicula1.getNombre() + " tiene una clasificacion de " + movieRating);

        pelicula1.duracionPelicula(pelicula1.getNombre(), 180);

        cine1.disponible(true);
        pelicula1.mostrarPelicula(pelicula1.getNombre(), pelicula1.getGenero(), pelicula1.getClasificacion());

    }
}
