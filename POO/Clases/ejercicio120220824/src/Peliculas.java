public class Peliculas {

    String nombre;
    String genero;
    String duracion;
    String clasificacion;
    String director;

    // Constructor
    public Peliculas(String nombre, String genero) {
        this.nombre = nombre;
    }

    // geters
    public String getNombre() {
        return this.nombre;
    }

    public String getClasificacion() {
        return this.clasificacion;
    }

    public String getGenero() {
        return this.genero;
    }

    // seters
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public void setClasificacion(String clasificacion) {
        this.clasificacion = clasificacion;
    }

    // metodo
    public void duracionPelicula(String pelicula, int tiempo) {

        System.out.println("La pelicula " + pelicula + " tiene una duracion de " + tiempo + " minutos");
        return;
    }

    public void mostrarPelicula(String pelicula, String genero, String clasificacion) {
        System.out.println("La pelicula " + pelicula + " es de genero " + genero + " y tiene una clasificacion de "
                + clasificacion);
        return;
    }
}
