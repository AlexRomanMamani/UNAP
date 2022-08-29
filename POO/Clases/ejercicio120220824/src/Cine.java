public class Cine {

    String nombre;
    String direccion;
    String salas;
    String horario;
    int n_salas;
    Boolean disponible;

    // Constructor
    public Cine(String nombre) {
        this.nombre = nombre;
    }

    // geters
    public String getNombre() {
        return this.nombre;
    }

    public String getDireccion() {
        return this.direccion;
    }

    public String getSalas() {
        return this.salas;
    }

    public Boolean disponible() {
        return this.disponible;
    }

    // seters
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setDispobible(Boolean disponible) {
        this.disponible = disponible;
    }

    // metodo
    public void disponible(Boolean disponible) {
        if (disponible == true) {
            System.out.println("El cine " + this.nombre + " esta disponible");
        } else {
            System.out.println("El cine " + this.nombre + " no esta disponible");
        }
    }
}
