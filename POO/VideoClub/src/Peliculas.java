public class Peliculas {
    // ATRIBUTOS
    String titulo, formato;

    // CONSTRUCTOR
    public Peliculas(String titulo, String formato) {
        this.titulo = titulo;
        this.formato = formato;
    }

    // GETTERS Y SETTERS

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getFormato() {
        return formato;
    }

    public void setFormato(String formato) {
        this.formato = formato;
    }
    // METODO
    public void mostrar(){
        System.out.println("La pelicula " + this.titulo + ", formato "+this.formato+ "," +
                " ha sido ingresada con exito.");
    }
}
