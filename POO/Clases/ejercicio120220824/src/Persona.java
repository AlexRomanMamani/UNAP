public class Persona {
    // Atributos
    String nombre;
    String apellido;
    int edad;
    String correo;
    String cedulaIdentidad;
    String direccion;
    String dinero;
    String cargo;

    // Constructor
    public Persona(String nombre, String apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    // Metodos
    public void saludar() {
        System.out.println("Hola, mi nombre es " + nombre + " " + apellido);
    }

    public String getNombre() { // METODO GET
        return this.nombre;
    }

    public String getCargo() { // METODO GET
        return this.cargo;
    }
}
